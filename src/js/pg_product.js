$(function(){
	//ÉÌÆ·ËõÂÔÍ¼¹ö¶¯
	var slider=UI.Xslider(".imgzoomlist",{
		numtoMove:1,
		stepOne:true,	
		start:2,
		viewedSize:350,
		unitLen:70,
		unitDisplayed:1,
		beforeStart:function(e){
			$(e.next).find("a").trigger("mouseenter");
		}
	});
	var bigimg=$(".bigimg").find("img");
	$(".imgzoomlist").find("li a").mouseenter(function(){
		var $this=$(this);
		bigimg.attr("src",$this.attr("href"));
		bigimg.parent("a").attr("href",$this.attr("bigimg"));
		$this.parent().addClass("current").siblings().removeClass("current");
		$(".imgzoomlist").data("curindex",~~$(this).parent().attr("index")+1);
	}).click(function(){	
		return false;	
	});
	
	//to remove exist jqZoomWindow
	$(".jqzoom").bind("mouseenter",function(){
		var jqZoomWin = $(".jqZoomWindow");
		if(jqZoomWin.length!=0) {
			jqZoomWin.remove(); 
		}
	});
	var options = {
		zoomWidth: 380,
		zoomHeight: 380,
		
		xOffset: 18,
		yOffset: 0,
		title : false,
		showEffect:"fadein",
		hideEffect:"fadeout",
		position: "right" 
	}
	$(".jqzoom").jqzoom(options);

	$(".proshare").hover(function(){
		$(this).addClass("share_now");		
		$(this).parents(".proinfo").css("z-index",999);
	},function(){
		$(this).removeClass("share_now");
		$(this).parents(".proinfo").css("z-index",1);
	});
	
	$(".relay").hover(
		function(){
			$(this).addClass("relay_now");
			$(this).parents(".proinfo").css("z-index",999);
			if($(".relay").data("isfocus")){
				$(".relay").data("canHide",false);
			}else{
				$(".relay").data("canHide",true);
			}
			$(".relay").data("isShow",true);
		},
		function(){
			$(".relay").data("isShow",false);
			if($(".relay").data("canHide")){
				$(this).removeClass("relay_now");
				$(this).parents(".proinfo").css("z-index",1);	
			}
		}
	);
	$(".relay input[type='text'],.relay textarea").focus(function(){
		$(".relay").data("canHide",false);
		$(".relay").data("isfocus",true);
	});
	$(".relay input[type='text'],.relay textarea").blur(function(){
		$(".relay").data("isfocus",false);
		$(".relay").data("canHide",true);
		if($(".relay").data("isShow")==false){
			$(".relay").removeClass("relay_now");
			$(this).parents(".proinfo").css("z-index",1);	
		}
	});
	$(".giftlst").hover(
		function(){
			var me=$(this);
			me.find("dt").addClass("hovered");
			me.find("dd").show();
		},
		function(){
			var me=$(this);
			me.find("dt").removeClass("hovered");
			me.find("dd").hide();
		}
	);
	
	UI.Xslider(".combolist");
	UI.Xslider(".promlist");
	
	/*$(".prominfo li a").click(function(){
		var win;
		if($(this).data("rel_win")!=undefined){
			win =  $(this).data("rel_win");
			win.fn.popIn();
		}
		else {
			win = PopWin("#pop"+$(this).attr("id"),{
				action: "in",
				animate : false,
				overlay: "#overlay_transparent",
				callback: function(o){
					$("#overlay_transparent").click(function(){
						win.fn.popOut();
						$(this).unbind("click");
					});
				}
				,
				afterPopOut: function(){
					$("#overlay_transparent").unbind("click");
				}
			});
			$(this).data("rel_win",win);
		}
	});
	$("#brandinfomore").click(function(){
		var win;
		if($(this).data("rel_win")!=undefined){
			win =  $(this).data("rel_win");
			win.fn.popIn();
		}
		else {
			win = PopWin("#brandinfomorePop",{
				action: "in",
				animate : false,
				overlay: "#overlay_transparent",
				callback: function(o){
					$("#overlay_transparent").click(function(){
						win.fn.popOut();
						$(this).unbind("click");
					});
				}
				,
				afterPopOut: function(){
					$("#overlay_transparent").unbind("click");
				}
			});
			$(this).data("rel_win",win);
		}
		
	});
	$(".hasPopup .opener").click(function(){
		var me=$(this);
		me.parent().find(".popWinA").show();
	})
	$(".hasPopup .shuter").click(function(){
		$(this).parent().parent().hide();
	})*/
	
	
	
	$(".shoppingcartp").hover(
		function(){
			$(this).addClass("shoppingcartp_hover");	
		},
		function(){
			$(this).removeClass("shoppingcartp_hover");	
		}
	);
	
	/* Group Detail Virtual */
	$(".accord dt").click(function(){
		$(this).parent().siblings().removeClass("expand");
		$(this).parent().addClass("expand");
	});
	$(".accord dt a").focus(function(){
		$(this).blur();	
	});
})