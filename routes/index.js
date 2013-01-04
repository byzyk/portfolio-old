var fs = require('fs');

exports.index = function(req, res){
  var contacts = [
    ['email', 'bohdan.kh@gmail.com'],
    ['skype', 'byzyk93'],
    ['phone', '+380 93 661 4427']
  ];
  
  var json;
  var works = [];
  var worksDir = './works/';
  var worksFiles = fs.readdirSync(worksDir);
  worksFiles.sort(function(a, b) {
    return fs.statSync(worksDir + a).mtime.getTime() - fs.statSync(worksDir + b).mtime.getTime();
  });
  worksFiles.reverse();
  for (var i = 0; i < worksFiles.length; i++) {
    json = fs.readFileSync(worksDir + worksFiles[i], 'utf-8');
    works.push(JSON.parse(json));
  }
  console.log(works)
  
  res.render('index', {
    contacts: contacts,
    works: works
  });
};
