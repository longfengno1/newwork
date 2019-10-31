$(document).ready(function(){
	$('#datepicker').datepicker({
		locale: 'zh-cn',
		format: 'yyyy.mm.dd',
		uiLibrary: 'bootstrap4'
	});

	$('#btn-top').click(function(){
		$('html, body').animate({scrollTop: 0});
	});

	/* Homepage Tips Slider */
	var tslider = $('.tips-slide');
	tslider.slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			  }
			}
		]
	});
});

var navbtn = {
	el:{
		obj: '.float-btn-list',
		wrapper: '.tab-pane',
		header: '.sub-title'
	},
	init: function(){
        $(navbtn.el.obj).find('a').click(function(){
             var index = $(this).parent().index();
             var pos = $(this).closest(navbtn.el.wrapper).find(navbtn.el.header).eq(index).offset().top;
             $('html, body').animate({scrollTop:pos});
        });
	}
}

function goBack() {
	window.history.back();
}