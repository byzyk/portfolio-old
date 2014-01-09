$(function() {

    searchResultsGrid();

    $('.tag-search .control li').on('click', searchSwitch);
    var tagSearch = $('#tags');
    var tagSearchPlaceholder = 'Найди сайт по тегам';
    tagSearch.tagit({
        placeholderText: tagSearchPlaceholder,
        afterTagAdded: function(event, ui) {
            tagSearch.find('input:text').removeAttr('placeholder');
        },
        beforeTagRemoved: function(event, ui) {
            if (ui.tag.index() === 0) {
                tagSearch.find('input:text').attr('placeholder', tagSearchPlaceholder);
            }
        },
        onTagExists: function() {
            return false;
        }
    });

    $('.submit').on('click', submitForm);


    //Modal
    $('.modal-wrap')
        .on('click', 'a', Modal.open)
        .on('click', 'a.active', Modal.close)
        .on('mouseenter', '.modal:visible', {cursor: false}, Modal.setCursor)
        .on('mouseleave', '.modal:visible', {cursor: true}, Modal.setCursor);
    $(document).on('click', function() { if (Modal.cursor) Modal.closeAll(); });


    //Checkbox
    $('.checkbox').on('click', function() {
        var icon = $(this).find('i');
        var checkbox = $(this).find(':checkbox');
        icon.toggleClass('checked');
        if (!checkbox.attr('checked')) {
            checkbox.attr('checked', 'checked');
        } else {
            checkbox.removeAttr('checked');
        }
    });

});




function searchResultsGrid() {
    var item = $('.search-result .search-result-item');
    item.filter(":even").wrapAll('<div class="col left">');
    item.filter(":odd").wrapAll('<div class="col right">');
}

function searchSwitch() {
    $('.tag-search .control li').removeClass('active');
    $(this).addClass('active');
}

function submitForm(){
    $(this).parents('form').submit();
}

var Modal = {
    all: $('.modal-wrap .modal'),
    cursor: false,
    open: function(e) {
        e.preventDefault();
        var el = $(this);
        Modal.closeAll();
        el
            .addClass('active')
            .next()
            .show();
    },
    close: function(e) {
        e.preventDefault();
        var el = $(this);
        el
            .removeClass('active')
            .next()
            .hide();
        Modal.cursor = false;
    },
    closeAll: function() {
        Modal.all.hide();
        Modal.cursor = false;
        $('.modal-wrap a.active').removeClass('active');
    },
    setCursor: function(event) {
        Modal.cursor = event.data.cursor;
    }
}
