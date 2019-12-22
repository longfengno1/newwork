import "../../js/common2";
import "./index.scss";
(function () {
    $(document).ready(function () {
        var TabBarBox = $("#TabBarBox");
        var TBBWrap = TabBarBox.parent();
        $(window).bind("scroll", function () {
            var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
            if (!TBBWrap.offset()) return;
            if (st > TBBWrap.offset().top) {
                TabBarBox.addClass("boxfixed_w100");

            } else {
                TabBarBox.removeClass("boxfixed_w100");

            }

            var leftlistbox_tag1 = $(".leftlist .leftlist_box_tag1");
            var leftlistboxWrap_tag1 = leftlistbox_tag1.parent();
            if (!leftlistboxWrap_tag1.offset()) return;
            if (st > leftlistboxWrap_tag1.offset().top - 60 &&
                st < leftlistboxWrap_tag1.offset().top + $("#tag1").height() - leftlistbox_tag1.height()) {
                leftlistbox_tag1.addClass("boxfixed_w100");
            } else {
                leftlistbox_tag1.removeClass("boxfixed_w100");

            }

            var leftlistbox_tag2 = $(".leftlist .leftlist_box_tag2");
            var leftlistboxWrap_tag2 = leftlistbox_tag2.parent();
            if (!leftlistboxWrap_tag2.offset()) return;
            if (st > leftlistboxWrap_tag2.offset().top - 60 &&
                st < leftlistboxWrap_tag2.offset().top + $("#tag2").next().height() - leftlistbox_tag2.height()) {
                leftlistbox_tag2.addClass("boxfixed_w100");
            } else {
                leftlistbox_tag2.removeClass("boxfixed_w100");

            }


            var leftlistbox_tag3 = $(".leftlist .leftlist_box_tag3");
            var leftlistboxWrap_tag3 = leftlistbox_tag3.parent();
            if (!leftlistboxWrap_tag3.offset()) return;
            if (st > leftlistboxWrap_tag3.offset().top - 60 &&
                st < leftlistboxWrap_tag3.offset().top + $("#tag3").next().height() - leftlistbox_tag3.height()) {
                leftlistbox_tag3.addClass("boxfixed_w100");
            } else {
                leftlistbox_tag3.removeClass("boxfixed_w100");

            }

            var leftlistbox_tag4 = $(".leftlist .leftlist_box_tag4");
            var leftlistboxWrap_tag4 = leftlistbox_tag4.parent();
            if (!leftlistboxWrap_tag4.offset()) return;
            if (st > leftlistboxWrap_tag4.offset().top - 60 &&
                st < leftlistboxWrap_tag4.offset().top + $("#tag4").next().height() - leftlistbox_tag4.height()) {
                leftlistbox_tag4.addClass("boxfixed_w100");
            } else {
                leftlistbox_tag4.removeClass("boxfixed_w100");

            }

            var leftlistbox_tag5 = $(".leftlist .leftlist_box_tag5");
            var leftlistboxWrap_tag5 = leftlistbox_tag5.parent();
            if (!leftlistboxWrap_tag5.offset()) return;
            if (st > leftlistboxWrap_tag5.offset().top - 60 &&
                st < leftlistboxWrap_tag5.offset().top + $("#tag5").next().height() - leftlistbox_tag5.height()) {
                leftlistbox_tag5.addClass("boxfixed_w100");
            } else {
                leftlistbox_tag5.removeClass("boxfixed_w100");

            }

            if (st > $("#tag1").offset().top) {
                $(".bartags a").removeClass("current");
                $(".bartags a").eq(0).addClass("current");
            }
            if (st > $("#tag2").offset().top) {
                $(".bartags a").removeClass("current");
                $(".bartags a").eq(1).addClass("current");
            }
            if (st > $("#tag3").offset().top) {
                $(".bartags a").removeClass("current");
                $(".bartags a").eq(2).addClass("current");
            }
            if (st > $("#tag4").offset().top) {
                $(".bartags a").removeClass("current");
                $(".bartags a").eq(3).addClass("current");
            }
            if (st > $("#tag5").offset().top) {
                $(".bartags a").removeClass("current");
                $(".bartags a").eq(4).addClass("current");
            }
            if (st > $("#tag6").offset().top) {
                $(".bartags a").removeClass("current");
                $(".bartags a").eq(5).addClass("current");
            }

            if (st+60 > $("#day0").offset().top) {
                $(".day-index li").removeClass("current");
                $(".day-index li").eq(0).addClass("current");
            }
            if (st + 60 > $("#day1").offset().top) {
                $(".day-index li").removeClass("current");
                $(".day-index li").eq(1).addClass("current");
            }
            if (st + 60 > $("#day2").offset().top) {
                $(".day-index li").removeClass("current");
                $(".day-index li").eq(2).addClass("current");
            }
            if (st + 60 > $("#day3").offset().top) {
                $(".day-index li").removeClass("current");
                $(".day-index li").eq(3).addClass("current");
            }
            if (st + 60 > $("#day4").offset().top) {
                $(".day-index li").removeClass("current");
                $(".day-index li").eq(4).addClass("current");
            }
            if (st + 60 > $("#day5").offset().top) {
                $(".day-index li").removeClass("current");
                $(".day-index li").eq(5).addClass("current");
            }
            if (st + 60 > $("#day6").offset().top) {
                $(".day-index li").removeClass("current");
                $(".day-index li").eq(6).addClass("current");
            }
        });

        $(".priceinfo_link").click(function () {
            var $this = $(this);
            $this.parent().find(".opener").show();

        });
        $(".opener .opener-close").click(function () {
            $(".opener").hide();
        });

        $("#header .navbar-menu li").hover(function () {
            var $this = $(this)
            $("#header .navbar-menu li").removeClass("current");
            $this.addClass("current");

        })
        $("#header .navbar-menu").hover(function () {
            $(".header-bar .sub_header_menu").show();
        }, function () {
            $(".header-bar .sub_header_menu").delay(100, "showsubmenu").hide();
        })
        $(".proinfo .action .dof-date .more").click(function () {
            var $this = $(this)
            $this.toggleClass("more_open");
            $(".date_plane").toggle();

        })
        $(".btnfav").click(function () {
            var $this = $(this)
            $this.find(".icon").toggleClass("icon-fav2")
            $this.find(".icon").toggleClass("icon-fav")
            $this.find(".icon").toggleClass("yellow");

        })
        $(".date_box").click(function () {
            var $this = $(this)
            $this.parent().find(".opener").toggle();
        })
        $(".bartags a").click(function () {
            var $this = $(this);
            setTimeout(function () {
                $(".bartags a").removeClass("current");
                $this.addClass("current");
            }, 300)

        })
        $(".days_box_title").click(function () {
            var $this = $(this);
            $this.find(".icon-arrowdown").toggleClass("icon-arrowup");
            $this.parent().find(".days_box_content").toggle();
        })
    });

    $(".search_price").click(function () {
        $(".mark.layerprice").show();
    });
    $(".mark").click(function () {
        $(".mark").hide();
    });
    $(".layer-price .close").click(function () {
        $(".mark").hide();
    });

    $(".start-date-item").click(function () {
        $(".start-date-item").removeClass("current");
        $(this).addClass("current");
    });

    $(".box_title").click(function () {
        var $this = $(this);
        $this.find(".icon-arrowdown").toggleClass("icon-arrowup");
        $this.parent().find(".box_content").toggle();
    });


    $("#modifiy-date").click(function () {
        $(".layerout2").show();
    });
    $("#modifiy-date-sm").click(function () {
        $(".layerout2").show();
    });

    $(".search_price-sm").click(function () {

        $(".setcart").show();
    });

    $(".btn-fav").click(function () {
        if ($(this).hasClass("selected")) {
            $(".btn-fav").removeClass("selected");
            $(".btn-fav").removeClass("icon-fav");
            $(".btn-fav").addClass("icon-fav2");
        }
        else {
            $(".btn-fav").addClass("selected");
            $(".btn-fav").addClass("icon-fav");
            $(".btn-fav").removeClass("icon-fav2");
        }
    });


})();