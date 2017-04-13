$(document).ready(function(){

	//Toggle Menu
	$(".menubar > i").click(function(){
		$(".menu").slideToggle("slow");
	});

	//Menu Anchor
	$(".menu-item").click(function(){
		var panelId = $(this).attr("data-panelid");
		var panelOffset = $("#panel"+panelId).offset().top;
		$("body").animate({scrollTop: panelOffset},"slow");
	});

	//Banner Slide
	$(".slide").hide();
	var slideIndex = 1;
	var slide = setInterval(function(){
		$("#slide"+slideIndex).fadeIn("slow").siblings().fadeOut("slow");
		slideIndex++;
		if(slideIndex > $(".slide").length){
			slideIndex = 1;
		}
	},1500);

	//Back 2 Top
	$(".back2top").click(function(){
		$("body").animate({scrollTop: 0}, "slow");
	});
});
