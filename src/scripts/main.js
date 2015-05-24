$(document).ready(function($){
	$(".open-panel").click(function(){
	  
	  $("html").toggleClass("openNav");
	  
	});

	$(".close-panel, #content").click(function(){
  
		$("html").removeClass("openNav");
  
	});
});


