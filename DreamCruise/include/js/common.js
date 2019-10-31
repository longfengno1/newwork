/***gdpr banner ********************************************/
var assignGDPRBanner = {
    data: {
        acceptCookie: getCookie('ALLOW_TO_USE_COOKIES')
    },
    init: function () {
        var _self = this;
        var _banner = $('.gdpr-banner-wrapper');
        if (_self.data.acceptCookie != "true") {
            _banner.addClass('enable');
            _banner.find('.gdpr-banner-button').bind('click', function () {
                _self.addAcceptCookie();
                _banner.fadeOut(200, function () { $(this).remove(); });
            });

            var timer;
            $(window).scroll(
                function () {
					/*if ( $(document).scrollTop() > window.innerHeight ) {
						_banner.fadeOut();
					}else{
						_banner.fadeIn();
					}*/
                    _banner.fadeOut();
                    clearTimeout(timer);
                    timer = setTimeout(function () { _banner.fadeIn(); }, 250);
                });
        } else {
            _banner.remove();
        }
    },
    addAcceptCookie: function () {
        var _self = this;
        AcceptCookies();
    }
}
/***gdpr banner end*****************************************/

$(document).ready(function(){
	$('.navbar-toggler').click(function(){
		$(this).find('.m-menu-btn').toggleClass('open');
	});	
	$('html:lang(en) #datepicker').datepicker({
		format: 'd mmm, yyyy',
		uiLibrary: 'bootstrap4'
	});
	$('html:lang(en) #btn-search').click(function(){
		$(this).closest('#nav-search').toggleClass('active');
	});
	
	$('.btnlightbox').click(function(){
		var lobj = $(this).closest('.panel-slide');
		var lsobj = lobj.find('.panel-slide-item.slick-current');
		var lvobj = lobj.find('.panel-slide-item.slick-current video');
		if(lsobj.hasClass('videoplay')){
			lvobj[0].pause();	
			lvobj[0].currentTime = 0;
			lsobj.removeClass('videoplay');
		}
        initlightbox(lobj);
	});

	$('.dc-tab-nav-wrapper').mCustomScrollbar({
		axis: "x",
		theme: "dark-thick",
		scrollButtons: {
			enable: true
		},
		scrollbarPosition: 'outside',
		callbacks:{
			onInit:function(){
				if(this.mcs.leftPct == 0){
					$('.mCSB_buttonLeft').addClass('d-none');
				}
			},
			whileScrolling:function(){
				if(this.mcs.leftPct == 0){
					$('.mCSB_buttonLeft').addClass('d-none');
				} else {
					$('.mCSB_buttonLeft').removeClass('d-none');
				}
				if(this.mcs.leftPct == 100){
					$('.mCSB_buttonRight').addClass('d-none');
				} else {
					$('.mCSB_buttonRight').removeClass('d-none');
				}
			}
		}
	});
	
	popover.init();
	assignGDPRBanner.init();
	
	homepageinit();
	$('#dc-banner.panel-slide').slick('slickPlay'); 
});

/* Page Load Anchor */
function anchorload(val) {
	var mytext = getUrlParam(val,'');
	if (mytext != ''){
		console.log(mytext);
		scrollToAnchor(mytext);
	}
}
/* Get URL Parameter */
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}
/* Scroll to Anchor */
function scrollToAnchor(aid){
    var aTag = $("*[name='"+ aid +"']");
	var sTop = aTag.offset().top;
    $('html,body').animate({scrollTop: sTop},'slow');
}

var popover = {
	data:{
		btnshare: '#btn-share[data-toggle="popover"]',
		btnwechat: '#btn-wechat[data-toggle="popover"]',
		btnfloatwechat: '#btn-float-wechat[data-toggle="popover"]'
	},
	init: function(){
		var _self = this;
		var btnshare = $(_self.data.btnshare);
		var btnwechat = $(_self.data.btnwechat);
		var btnfloatwechat = $(_self.data.btnfloatwechat);

		btnshare.popover({
			html: true,
			content: function() {
	            return $("#popover-content").html();
	        }
		}).on('inserted.bs.popover', function () {
			var url = encodeURIComponent(url||(location.href).split("?")[0]);
			$("#popover-share-wechat img").attr('src', 'https://chart.googleapis.com/chart?cht=qr&chs=154x154&chld=Q%7C0&chl=' + url);
		}).on('shown.bs.popover', function () {
			$('.list-share .icon-wechat').popover({
				html: true,
				content: function() {
		            		return $("#popover-share-wechat").html();
		        	}
			});
		});
		btnwechat.popover({
			html: true,
			content: function() {
	            return $("#popover-wechat").html();
	        }
		});
		btnfloatwechat.popover({
			html: true,
			content: function() {
	            return $("#popover-float-wechat").html();
	        }
		});
	}
}

function homepageinit(){
    //Banner init
	var vobj = $('.dc-video video');
	var vsbtn = $('.dc-video .dc-video-sound-btn');
	var timer;

	
	var btnthumb = $('.video-thumbnail');
        videobtninit(btnthumb);

	//Slider init
	var pslider = $('.panel-slide'); 
	var sslider = $('.ships-slide'); 
	var oslider = $('.overlay-slide');
	
	pslider.slick({
		slide: '.panel-slide-item',
		dots: true
	}).on("beforeChange", function(event, slick, currentSlide) {
		var current = $(slick.$slides.get(currentSlide));
		if(current.hasClass('videoplay')){
			current.find(btnthumb).off('mouseover');
			current.find(vsbtn).removeClass('active');
			current.find(vobj)[0].controls = false;
			current.find(vobj)[0].muted = true;	
			current.find(vobj)[0].currentTime = 0;
			current.find(vobj)[0].pause();	
			clearInterval(timer);
			current.removeClass('videoplay');
			slickplay();
		}
	}).on('afterChange', function(event, slick, currentSlide, nextSlide){
		videobtninit(btnthumb);
		$(this).find('.hascontrol').prop('controls',true); 
		$(this).find(vobj).css('pointer-events', 'auto');  
	}).on('dragstart', function(){  
		$(this).find(vobj).css('pointer-events', 'none'); 
	 });
	sslider.slick({
		infinite: false
	});
	oslider.slick({
		slidesToShow: 3,
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
	}).on('setPosition', function (event, slick) {
		$('.overlay-slide-item').equalizeHeights();
	});

	$.fn.equalizeHeights = function() {
	  this.css('height', 'auto'); //Reset height before count
	  var maxHeight = this.map(function( i, e ) {
	    return $( e ).height();
	  }).get();
	  return this.height( Math.max.apply( this, maxHeight ) );
	};

	// Select dropdown
	initselect();

	// Tab on Mobile
	inittab();

	// HZslider
	hzsliderinit();

	// Ship Overlay
	ospopover.init();

	//Sound button
	vsbtn.click( function (){
		$(this).toggleClass('active');
    	$(this).parent().find(vobj).prop('muted', !$(this).parent().find(vobj).prop('muted'));
	});

	//Select cruise
	selectcruise.init();
}

function videobtninit(thumbobj){
	thumbobj.on('mouseover click', function(){
		var obj = $(this);
		timer = setTimeout(function(){
			obj.parent().find('video')[0].play();
			obj.parent().addClass('videoplay');	
		}, 500);
		obj.parents('.panel-slide').slick('slickPause');
	});
}

function slickplay(){
   $('.panel-slide').slick('slickPlay');
}

function hzsliderinit(){
	var hzslider = $('.donslide');
	var mobilebreakpoint = 991; //Mobile Breakpoint

	if (window.innerWidth < mobilebreakpoint) {
		mobileOnlySlider(hzslider);
	}
	$(window).resize(function(e){
		if(window.innerWidth < mobilebreakpoint) {
			if(!hzslider.hasClass('slick-initialized')){
				mobileOnlySlider(hzslider);
			}
		}else{
			if(hzslider.hasClass('slick-initialized')){
				hzslider.slick('unslick');
			}
		}
	});
}

function mobileOnlySlider(obj) {
	var btnobj = $('.donmenu .donmenu-btn');
	obj.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		btnobj.removeClass('current');
		btnobj.eq(nextSlide).addClass('current');
	});
	btnobj.removeClass('current');
	btnobj.eq(obj.slick('slickCurrentSlide')).addClass('current');
}

function mobilelist(){
	var mobj = $('.donmenu');
	var popover = $('.btn-donpopover');
	popover.click(function(){
	      mobj.toggleClass('active');
	});
}

function initlightbox(obj){
	var gallerytemp = '<div id="overlay-bg"></div><div id="lightbox" class="container"><div class="lightbox-wrapper"><p class="text-right mb-1"><a class="close-btn" href="javascript:void(0)">Close</a></p><div class="lightbox-view"></div><div class="lightbox-nav"></div></div></div>';
	$(gallerytemp).appendTo('body');

	var closebtn = $('.close-btn');
	var lbview = $('.lightbox-view');
	var lbnav = $('.lightbox-nav');

	closebtn.on('click', function(){
		lbview.slick('unslick');
		lbnav.slick('unslick');
        $('.lightbox-wrapper, #overlay-bg').remove();
	});
   
	lbview.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: lbnav
	}).on("beforeChange", function(event, slick, currentSlide) {
		var current = $(slick.$slides.get(currentSlide));
		if(current.hasClass('videoplay')){
			current.find(overlaythumb).off('mouseover');
			current.find('video')[0].controls = false;
			current.find('video')[0].currentTime = 0;
			current.find('video')[0].pause();	
			clearInterval(timer);
			current.removeClass('videoplay');
		}
	}).on('afterChange', function(event, slick, currentSlide, nextSlide){
		videobtninit(overlaythumb);
		var hasvideoobj = $(this).find('.hascontrol');
		hasvideoobj.prop('controls',true);
	});
	lbnav.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: lbview,
		arrows: false,
		focusOnSelect: true
	}).on('afterChange', function(event, slick, currentSlide, nextSlide){
		var current = $(slick.$slides.get(currentSlide));
		if(current.hasClass('hasvideo')){
			$('.lightbox-wrapper .panel-slide-item.slick-current .video-thumbnail').click();
		}
	});

	var currentSlide = obj.slick('slickCurrentSlide');

	obj.find('.panel-slide-item:not(".slick-cloned")').each(function(i){
		var existingcon =  $(this).html();
		lbview.slick('slickAdd', '<div class="panel-slide-item">'+existingcon+'</div>');
		lbnav.slick('slickAdd', '<div class="panel-slide-item">'+existingcon+'</div>');
	});
	lbnav.find('.video-thumbnail, .dc-video').parent().addClass('hasvideo');
	lbnav.find('.video-thumbnail, .dc-video, .panel-slide-caption').remove();
	lbview.slick('slickGoTo',currentSlide);
	lbnav.slick('slickGoTo',currentSlide);

	var overlaythumb = $('#lightbox .video-thumbnail');
	videobtninit(overlaythumb);
}

function initselect(){
	var custlist = $('.dc-selectbtn');
	var custlistbtn = $('.dc-selectlist');
	var custlistselect = $('.dc-select');
	var custlistlink = $('.dc-selectlist a');

	custlist.click(function(){
	   $(this).parent().siblings().find(custlistbtn).removeClass('active');
       $(this).next(custlistbtn).toggleClass('active');
	});
	$(document).click(function(e) {
		if ( $(e.target).closest(custlist).length === 0 ) {
			custlistbtn.removeClass('active');
		}
    });
	custlistlink.click(function(){
		$(this).closest(custlistbtn).toggleClass('active');
		var selecttxt = $(this).html();
		var selectval = $(this).attr('data-attr');
		$(this).closest(custlistbtn).parent().find(custlist).html(selecttxt);
		$(this).closest(custlistbtn).parent().find(custlistselect).val(selectval).change();
	});
}

function offerfilter(){
	var selectbox1 = $('.offer-fliter');
	
	selectbox1.change(function(){
	   var val = $(this).val();
		$('#offer-fliter-list > li').hide();
		$('#offer-fliter-list > li').removeClass('first-item');
		
		var shipsval = '.' + $('#offer-filter-ships').val();
		var themeval = '.' + $('#offer-filter-theme').val();
		if (shipsval == '.ALL' || shipsval === '.'+undefined){
			shipsval = '';
		} 
		if (themeval == '.ALL' || themeval === '.'+undefined){
			themeval = '';
		} 

		var fstring = shipsval + themeval;
		$('#offer-fliter-list .item-itineraries'+fstring+'').parent().show();
		$('#offer-fliter-list li:visible:eq(0)').addClass('first-item');
	});
	
}

function cefilter(){
	var selectbox1 = $('.offer-fliter');
	
	selectbox1.change(function(){
	   var val = $(this).val();
		$('#ce-list > *').hide();
		
		var shipsval = '.' + $('#offer-filter-ships').val();
		var themeval = '.' + $('#offer-filter-theme').val();
		if (shipsval == '.ALL' || shipsval === '.'+undefined){
			shipsval = '';
		} 
		if (themeval == '.ALL' || themeval === '.'+undefined){
			themeval = '';
		} 

		var fstring = shipsval + themeval;
		$('#ce-list > *'+fstring+'').show();
	});
	
}

function inittab(){
	var tabbtn = $('.dc-tabbtn');
	var tablist = $('.dc-tab-nav');
	var tablink = $('.dc-tab-nav a');
	tabbtn.click(function(){
		$(this).parent().find(tablist).toggleClass('active');
	});
	tablink.click(function(){
		var linkcon = $(this).html(); 
		$(this).closest(tablist).toggleClass('active');
		$(this).closest(tablist).parent().find(tabbtn).html(linkcon);
	});
}

function initbanner(){
	var bannerobj = $('.slider');
	var sliderobj = $('.slide-item');
	
	bannerobj.cycle({
		delay: 0,
		fx: 'scrollVert',
		timeout: 3000,
		slides: '> .slide-item',
		loop: 0,
		log: false,
		paused: true
	}).on({
	mouseleave: function(){
		$(this).cycle('goto', '0').cycle('pause').children(sliderobj).removeClass('actived');
	},
	'cycle-after': function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ){
	if($(incomingSlideEl).hasClass('actived') != true && optionHash.slideNum != 1){
		var oplayer = setTimeout(function(){ 
		$(incomingSlideEl).addClass('actived');
		}, 1000); 
	}
	if(optionHash.slideNum >= optionHash.slideCount){
		$(this).cycle('pause');
	}
	if(optionHash.slideNum == 1){
		$(this).children(sliderobj).removeClass('actived');
	}
	}
	});

	sliderobj.on('click mouseover', function () {
	if($(this).hasClass('actived') != true){
		$(this).parent(bannerobj).cycle('resume');
	}
	});
}

function socialNetworkShare(type, url, msg){
	var url = encodeURIComponent(url||(location.href).split("?")[0]);
	var msg = encodeURIComponent($('meta[property="og:title"]').attr('content'));
	var desc = encodeURIComponent($('meta[property="og:description"]').attr('content'));
	var img = encodeURIComponent($('meta[property="og:image"]').attr('content'));
	var pathPrefix, pathShare;

	switch(type){
		case "email":
			pathShare = 
			"mailto:?subject=" + msg + "&body=" + desc + "%0A%0A" + url;
			window.location = pathShare;
			return;
		case "copy_url":
			if (window.clipboardData){
				var allowed = window.clipboardData.setData("Text", decodeURIComponent(url));
				if (allowed) alert("URL has been copied to your clipboard.");
			}
			else {
				if (en) {
					alert("Your browser does not support this function.");
				}
				else {
					alert("對不起！您的瀏覽器不支援此功能。");
				}
			}
			return;
		case "messenger":
			pathPrefix = "http://profile.live.com/badge/?";
			pathShare = pathPrefix + "url=" + url + "&title=" + msg + "&description=" + desc + "&screenshot=" + img;
			break;
		case "facebook":
			pathPrefix = "http://www.facebook.com/sharer.php?";
			pathShare = pathPrefix + "u=" + url + "&t=" + msg + "&d=" + desc;
			break;
		case "twitter":
			pathPrefix = "http://twitter.com/share?";
			pathShare = pathPrefix + "url=" + url + "&text=" + msg;
			break;
		case "weibo":
			pathPrefix = "http://v.t.sina.com.cn/share/share.php?";
			pathShare = pathPrefix + "url=" + url + "&title=" + msg + "&pic=" + img;
			break;
		case "wechat":
			pathPrefix = "https://chart.apis.google.com/chart?cht=qr&chs=154x154&chld=Q%7C0&chl=";
			pathShare = pathPrefix + url;
			break;	
		case "google":
			pathPrefix = "https://plus.google.com/share?";
			pathShare = pathPrefix + "url=" + url;
			break;	
		case "QQ":
			pathPrefix = "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
			pathShare = pathPrefix + "url=" + url + "&title=" + msg + "&pics=" + img + "&summary=" + desc;
			break;	
	}
	
	window.open(pathShare,"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=640, height=480");
}
/* Cookies */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function AcceptCookies() {
	var cname = 'ALLOW_TO_USE_COOKIES';
	var cvalue = true;
	var mins = 30 * 24 * 60;
        var d = new Date();
        d.setTime(d.getTime() + (mins * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        var secureCookie = "";
	if (location.protocol == "https:"){
		secureCookie = " Secure;"
	}
        document.cookie = cname + "=" + cvalue + ";" + expires + ";" + secureCookie + " HttpOnly; path=/";
}

/* Swith BG video */
var switchbg = {
   el:{
      obj: '#bg-ourships-sea',
	  daystart: 6,
	  dayend: 18,
	  dayvideo: '../../video/dreamcruise_effect1.mp4',
	  nightvideo: '../../video/dreamcruise_covereffect.mp4'
   },
   init: function(){
      $(switchbg.el.obj).find('video')[0].play();
   
      var now = new Date();
	  var hour = now.getHours();
	  
	  //hour = 18; Test night
	  //hour = 6; Test day
	  if (hour > switchbg.el.daystart && hour < switchbg.el.dayend)
          {
		//Day
		console.log('Current Hour: '+hour+' @Day');
	  }
	  else {
		//Night
		switchbg.changevideo();
		console.log('Current Hour: '+hour+' @Night');
	  }
   },
   changevideo: function(){
      var vobj = $(switchbg.el.obj).find('video')[0];
      var playPromise = vobj.play();
      if (playPromise !== undefined) {
      	  playPromise.then(function(result) {
	              switchbg.vcallback();
		  }, function(error) {
			    console.log(error);
		  });
	      
	  } else {
	  	       switchbg.vcallback();
	  }
   },
   vcallback: function(){
   	  var vobj = $(switchbg.el.obj).find('video')[0];
   	  vobj.currentTime = 0;
	  vobj.pause();
	  $(switchbg.el.obj).find('video').attr('src', switchbg.el.nightvideo);
	  vobj.play();
   }
}

/* Ourships overlay */
var ospopover = {
	el:{
	  oslider: '.overlay-slide',	
          our_ship_overlay: '.our-ship-overlay',
          overlay_slide: '.overlay-slide',
          overlay_close: '.btn-overlay-close'
	},
	init: function(){
                $(ospopover.el.overlay_close).click(function(){
                $(ospopover.el.our_ship_overlay).css('visibility', 'hidden');
       });
	},
	click: function(array){
	       var filter = '.'+array.join('.');
	       $(ospopover.el.our_ship_overlay).css('visibility', 'visible');
	       $(ospopover.el.oslider).slick('slickUnfilter').slick('slickFilter', filter);
	}
}

/* DC Select */
var toggletab = {
	el:{
	   btn: '#btn-toggle-tab',
	   panel:'#toggle-pannel',
	   clbtn:'#v-pills-tabContent td a'
	},
	init: function(){
		  $(this.el.btn).bind('click', function(){
				$(this).next(toggletab.el.panel).toggle();
		  });
		  $(this.el.clbtn).bind('click', function(){
				$(this).closest(toggletab.el.panel).hide();
		  });
	}
}

/* DC Select list */
var dcCustomSelect = {
	el:{
		obj: '.dc-custom-select',
		sbtn: '.select-selected',
		select: '.dc-custom-select select',
		sopt: '.dc-custom-select option',
		ls: '.select-items'
	},
	init:function(){
		var slist = '';
		var sbtn = '<a class="select-selected" href="javascript:void(0)">'+$(this.el.sopt+':eq(0)').html()+'</a>';
		$(this.el.sopt).each(function(index) {
			if (index == 0){
			  slist += '<li class="active">' + $(this).html() + '</li>';
			} else {
			  slist += '<li>' + $(this).html() + '</li>';
			}
		});
		slisthtml = '<ul class="select-items select-hide">' + slist + '</ul>';
		$(this.el.obj).append(slisthtml).append(sbtn);
		$(this.el.sbtn).click(function(){
		  dcCustomSelect.Switch();
		});
		$(this.el.ls).children('li').click(function(){
		  $(this).addClass('active').siblings().removeClass('active');
		  var selectindex = $(this).index();
		  var selectitem = $(this).html();
		  $(dcCustomSelect.el.sbtn).html(selectitem);
		  $(dcCustomSelect.el.select).val($(dcCustomSelect.el.sopt+':eq('+selectindex+')').val()).change();
		  dcCustomSelect.Switch();
		});
	},
	Switch:function(){
		$(this.el.ls).toggleClass('select-hide');
	}
}

/* List view &Grid view switch */
var switchview = {
	el: {
		list: '#result-view',
		lv: '.icon-listview',
		gv: '.icon-gridview'
	},
	init: function () {
		$(this.el.lv).bind('click', function () {
			switchview.switch('list');
		});
		$(this.el.gv).bind('click', function () {
			switchview.switch('grid');
		});
	},
	switch: function (type) {
		var list = $(this.el.list);
		$(this.el.lv + ', ' + this.el.gv).removeClass('active');
		if (type == 'grid') {
			list.addClass('grid-view');
			$(this.el.gv).addClass('active');
		} else {
			list.removeClass('grid-view');
			$(this.el.lv).addClass('active');
		}
	}
}

/* Datepicker highlight */
function datehighlight(value){
	var cmonth = value.split(',')[0].toString() - 1;	
	var cday = value.split(',')[1].toString();	
	var cyear = value.split(',')[2].toString();	
	$('.gj-picker td[month="'+ cmonth +'"][day="'+cday+'"][year="'+cyear+'"]').addClass('highlighted');	
}

/* Banner - Select cruise  */
var selectcruise = {
	el:{
      obj: '.select-banner ul a'
	},
	init: function(){
      $(this.el.obj).click(function(){
         $(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
			});
	}
}