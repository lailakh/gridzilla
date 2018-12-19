$('li >strong > a').click(function() {
	
    $('li>strong>a').removeClass('active');
    $(this).addClass('active');





});


function determine (name){
	var class_name = $(name).attr('id');

	

   
	$(".data1").hide();
	$("."+class_name).show();

	$('#'+class_name).addClass('active');
	$('#'+class_name).siblings().removeClass('active');

}



 
