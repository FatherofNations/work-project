$('.sity-select').hide();
$('#selectChange, #i-select').click(function(){
	$('.sity-select').fadeToggle();
});
$('.Select ul li p').click(function burn(){
	var selected = $(this).html();
	$('#selectChange').html(selected);
});

$(document).click( function(event){
	if( $(event.target).closest("#selectChange, #i-select, .sity-select").length ) 
	return;
	$(".sity-select").fadeOut();
	event.stopPropagation();
});

