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
    })
})();