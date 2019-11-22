$(function(){
	UI.Xslider(".topbanner",{
		autoScroll:5000,
		speed:2000,
		showNav:".nav a"
	});
	
	$(".sideprolist .tab").find(".tab_1").click(function(){
			$(".sideprolist .tab").removeClass("tabAlter");
	});
	$(".sideprolist .tab").find(".tab_2").click(function(){
			$(".sideprolist .tab").addClass("tabAlter");
	});
	
	
	UI.Xslider($(".floor2 .slideBig"),{showNav:".dotnav a"});	
	UI.Xslider($(".floor3 .slidearea"),{showNav:".dotnav a"});
	UI.Xslider($(".floor8 .brandSlider"),{showNav:".dotnav a"});
	
});

