var fs = require('fs');

var contacts = [
  ['email', 'bohdan.kh@gmail.com'],
  ['skype', 'byzyk93'],
  ['phone', '+380 93 661 4427']
];
var worksDir = './works/';

exports.index = function(req, res){
  var works = [];
  var json;
  var worksFiles = fs.readdirSync(worksDir);
  worksFiles.sort(function(a, b) {
    return fs.statSync(worksDir + a).mtime.getTime() - fs.statSync(worksDir + b).mtime.getTime();
  });
  worksFiles.reverse();
  for (var i = 0; i < worksFiles.length; i++) {
    json = fs.readFileSync(worksDir + worksFiles[i], 'utf-8');
    works.push(JSON.parse(json));
  }
  console.log(works);
  
  res.render('index', {
    contacts: contacts,
    works: works
  });
};



exports.portfolio = function(req, res){
  var work = req.params.work;
  if (typeof(work) === 'undefined') {
    res.redirect('/');
  } else {
    var json = fs.readFileSync(worksDir + work + '.json', 'utf-8');
    work = JSON.parse(json);    
    var path = work.url? work.url : '/p/'+work.id+'/index.html';
    console.log(path);
    res.render('portfolio', {
      contacts: contacts,
      path: path,
      work: work
    });
  }
};
