$('li > strong > a').click(function() {
    $('li > strong > a').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){
  $('.search-form').on("click",(function(e){
  $(".form-group").addClass("sb-search-open");
    e.stopPropagation()
  }));


 
})