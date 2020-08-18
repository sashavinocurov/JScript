$(document).ready(function(){
   
    $('img').click(function(){
       if($(this).attr('src')==$(this).data('org-src')){
           $(this).attr('src', $(this).data('alt-src'));
       }
       else{
           $(this).attr('src', $(this).data('org-src'));
       }
    });
})