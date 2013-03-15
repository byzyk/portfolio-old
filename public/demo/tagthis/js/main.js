$(function() {

    searchResultsGrid();

});


function searchResultsGrid() {
    var item = $('.search-result .search-result-item');
    item.filter(":even").wrapAll('<div class="col left">');
    item.filter(":odd").wrapAll('<div class="col right">');
}
