$(document).ready(function(){
	$('#menu').animate({marginLeft:"-320px"}, 0);
	$('#menu').mouseover(function(){
		$('#menu').animate({marginLeft:"0px"}, 500);
	});
});