import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './ui.base';
import '../css/global2.scss';
(function () {
    $(document).ready(function () {
        $("#header .navbar-menu>li").hover(function(){
            var $this = $(this)
            $("#header .navbar-menu>li").removeClass("current");
            $(".header-bar .sub_header_menu").hide();
            $this.find(".sub_header_menu").show();
            $this.addClass("current");
            
        },function(){
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
            return false;
        })
        $(".m_menu ul>li>a").click(function () {
            var $this = $(this)
            $this.parent().toggleClass("showsub");
            $this.parent().find(".icon-arrow").toggleClass("icon-arrowdown");
            return false;
        })
        $('.show-sm .fixed_plane').bind('touchmove',function(e){
           
            e.preventDefault();
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var elm = $(this).offset();
            var w = $(this).find("a").width();
            var h = $(this).find("a").height()
            var x = touch.pageX - w/2;
            var y = touch.pageY - h/2;
            $(this).css('left', x+'px');
            $(this).css('top', y+'px');
            
            });
    })

    $(".scroll-item").click(function () {
        $(".scroll-item").removeClass("active");
        $(this).addClass("active");
    });

    $(".scroll-item-sub").click(function () {
        $(".scroll-item-sub").removeClass("active");
        $(this).addClass("active");
    });

    $(".tab-title").click(function () {
        $(".tab-title").removeClass("current");
        $(this).addClass("current");
    });
})();