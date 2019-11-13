import "../../js/common2";
import "./index.scss";
import "../../js/ui.base";
import "../../js/gijgo.min";
import "../../js/popper.min";
import "../../js/slick.min";
import "../../js/aos";

(function(){
    $(document).ready(function () {
        /* Swith BG video */
        var switchbg = {
            el: {
                obj: '#bg-ourships-sea',
                daystart: 6,
                dayend: 18,
                dayvideo: '../../video/dreamcruise_effect1.mp4',
                nightvideo: '../../video/dreamcruise_covereffect.mp4'
            },
            init: function () {
                $(switchbg.el.obj).find('video')[0].play();

                var now = new Date();
                var hour = now.getHours();
                if (hour > switchbg.el.daystart && hour < switchbg.el.dayend) {
                    console.log('Current Hour: ' + hour + ' @Day');
                } else {
                    switchbg.changevideo();
                    console.log('Current Hour: ' + hour + ' @Night');
                }
            },
            changevideo: function () {
                var vobj = $(switchbg.el.obj).find('video')[0];
                var playPromise = vobj.play();
                if (playPromise !== undefined) {
                    playPromise.then(function (result) {
                        switchbg.vcallback();
                    }, function (error) {
                        console.log(error);
                    });

                } else {
                    switchbg.vcallback();
                }
            },
            vcallback: function () {
                var vobj = $(switchbg.el.obj).find('video')[0];
                vobj.currentTime = 0;
                vobj.pause();
				  if($(switchbg.el.obj).find('video').attr('src')==switchbg.el.nightvideo){
					  $(switchbg.el.obj).find('video').attr('src', switchbg.el.dayvideo);
				  }else{
					  $(switchbg.el.obj).find('video').attr('src', switchbg.el.nightvideo);
				  }
                
                vobj.play();
            }
        };

        /* Ourships overlay */
        var ospopover = {
            el: {
                oslider: '.overlay-slide',
                our_ship_overlay: '.our-ship-overlay',
                overlay_slide: '.overlay-slide',
                overlay_close: '.btn-overlay-close'
            },
            init: function () {
                $(ospopover.el.overlay_close).click(function () {
                    $(ospopover.el.our_ship_overlay).css('visibility', 'hidden');
                });
            },
            click: function (array) {
                var filter = '.' + array.join('.');
                $(ospopover.el.our_ship_overlay).css('visibility', 'visible');
                $(ospopover.el.oslider).slick('slickUnfilter').slick('slickFilter', filter);
            }
        };

        switchbg.init();

        ospopover.init();
        window.ospopover = ospopover;
        window.switchbg = switchbg;
        var sslider = $('.ships-slide');
        var oslider = $('.overlay-slide');
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

	  this.css('height', 'auto'); 

	  var maxHeight = this.map(function( i, e ) {
	    return $( e ).height();
	  }).get();
	  return this.height( Math.max.apply( this, maxHeight ) );
	};
    });
})()
