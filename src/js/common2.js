import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './ui.base';
import '../css/global2.scss';
(function () {
    $(document).ready(function () {
        $("#header .navbar-menu>li").hover(function () {
            var $this = $(this)
            $("#header .navbar-menu>li").removeClass("current");
            $(".header-bar .sub_header_menu").hide();
            $this.find(".sub_header_menu").show();
            $this.addClass("current");

        }, function () {
            $("#header .navbar-menu>li").removeClass("current");
            $(".header-bar .sub_header_menu").hide();
        })
        // $("#header .navbar-menu").hover(function(){
        //     $(".header-bar .sub_header_menu").show();
        // },function(){
        //     $(".header-bar .sub_header_menu").delay(100,"showsubmenu").hide();
        // })
        // $(".header-bar .sub_header_menu").hover(function(){


        // })
        $("#header .menu-box-inner").click(function () {
            $("body").addClass("show_menu");
            setTimeout(function () {
                $(".m_menu .navbar-menu").addClass("w80r")
            }, 100);
        })
        $(".m_menu").click(function () {
            

            $("body").removeClass("show_menu");
            setTimeout(function () {
                $(".m_menu .navbar-menu").removeClass("w80r")
            }, 100);
            return;
            //return false;
        })
        $(".m_menu ul>li>a").click(function () {
            var $this = $(this)
            $this.parent().toggleClass("showsub");
            $this.parent().find(".icon-arrow").toggleClass("icon-arrowdown");
            return false;
        })
        $('.show-sm .fixed_plane').bind('touchmove', function (e) {

            e.preventDefault();
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var elm = $(this).offset();
            var w = $(this).find("a").width();
            var h = $(this).find("a").height()
            var x = touch.clientX - w / 2;
            var y = touch.clientY - h / 2;

            $(this).css(
                'left', x + 'px'
            ).css(
                'top', y + 'px'
            ).css(
                'height', '2rem'
            ).css(
                'width', '2rem'
            );
        });
    })


    $(".scroll-item").click(function () {

        if ($(this).hasClass("active")) {
            $(".scroll-item").removeClass("active");
            $(this).removeClass("active");
        } else {
            $(".scroll-item").removeClass("active");
            $(this).toggleClass("active");
        }

    });

    $(".tab-item").click(function () {

        if ($(this).hasClass("active")) {
            $(".tab-item").removeClass("active");
            $(this).removeClass("active");
        } else {
            $(".tab-item").removeClass("active");
            $(this).toggleClass("active");
        }

    });

    $(".scroll-item-sub").click(function () {
        $(".scroll-item-sub").removeClass("active");
        $(this).toggleClass("active");
    });

    $(".more-btn").click(function () {
        $(this).parent().find(".desc").toggleClass("desc-expand");
        $(this).parent().find(".more-btn").toggle();
    })


    $(".tab-title").click(function () {
        $(".tab-title").removeClass("current");
        $(this).addClass("current");
    });
    $(".agreebox a").click(function () {
        $(".agreebox").hide();
    });
    $(window).bind("scroll", function () {
        var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;

        if (st < 400) {
            $(".fixed_plane,.left-select-ship").hide()
        } else {
            $(".fixed_plane,.left-select-ship").show()
        }
    })
})();