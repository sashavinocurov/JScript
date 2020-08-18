$(document).ready(function(){

    $('img').hover(function(){
        $(this).attr('src', $(this).data('alt-src'))
    }, function(){
        $(this).attr('src', $(this).data('org-src'))
    })
})