$(function(){
	/*** 
		Shopping Cart
	
	 ***/
	 
	 //购物车商品清单中弹出换购商品浮层
	 //UI.popWinA(".prom_exchange");
	 $(".prom_exchange .opener").hover(function(){
		 $(".pop_exchange_show").hide().removeClass("pop_exchange_show").parents(".promAction_curr").removeClass("promAction_curr");
		$(this).parent().find(".pop_exchange").show().addClass("pop_exchange_show");	 
		$(this).parents(".promAction").addClass("promAction_curr");
	},function(){});
	$(".pop_exchange .close").live("click",function(){
		$(this).parent().hide().removeClass("pop_exchange_show");
		$(this).parents(".promAction_curr").removeClass("promAction_curr");
	});
	
	 
	 
	 //"热卖推荐"、“最近浏览滚动”
	$(".sliderA").each(function(){
		var $this = $(this); 
			UI.Xslider($this,{
			numtoMove:1,
			unitLen:980,
			scrollObjSize:980*Math.ceil($(".prolist li",$this).length / 4),
			showNav:".nav a"
		});	
	});
	 
	/*UI.Xslider(".sliderB",{
		numtoMove:1,
		unitLen:980,
		scrollObjSize:980*Math.ceil($(".sliderB .prolist li").length / 4),
		showNav:".nav a"
	});	*/
	
	
	//"您可以选择的促销活动"滚动
	/*UI.Xslider(".sliderC",{
		numtoMove:4,		
		showNav:".nav a"
	});*/
	
	
	$(".delslider").hover(function(){
		$(".abtnp",this).stop(true,true).fadeIn()
	},function(){
		$(".abtnp",this).stop(true,true).fadeOut()
	});
	
	
	//购物车底部商品列表价格及加入购物车按钮hover切换
	$(".prolistRecommend .prolist .pp").hover(function(){
		$(this).addClass("pp_hover");		
		},function(){
		$(this).removeClass("pp_hover");
	});
	
	
	/*** 
		Checkokut
	
	 ***/
	
	//切换开据发票内容
	$(".invest_need").click(function(e){
		if($(this).find("input").attr("checked")){
			$(this).siblings(".investc").show();
		}else{
			$(this).siblings(".investc").hide();	
		}
	});
	
	
	//提交订单BOX中使用优惠券等功能
	$("#discount dt").toggle(function(){
		$(this).find(".icon").addClass("now");
		$(this).next().slideDown();
	},
		function(){
		$(this).find(".icon").removeClass("now");
		$(this).next().slideUp();
	});
	
	//表单验证
	if($(".formsub").length>0){
		$(".formsub").Validform({
			tiptype:function(msg,o,cssctl){
				if(!o.obj.is("form")){
					
					var objtip=o.obj.parent("li").find(".Validform_checktip");
					if(o.type==2){
						o.obj.parent("li").find(".tipmsg").hide();
					}else{
						o.obj.parent("li").find(".tipmsg").show();
					}
					
					cssctl(objtip,o.type);
					objtip.text(msg);
				}			
			}		
		
			
		});
	}
	/*$(".combobox .intnobrd").blur(function(){	
		var me=$(this);	
		var lia=$(this).parent().find(".select dd a");
		lia.each(function(i,v){
			this.selected=false;
			if($(this).html()==me.val()){
				this.selected="selected";
			}	
		})
	})
	$("#addnewcord1").click(function(){
		$("#newcord1").show();
		$(this).parent().hide();
	})
	$("#addnewcord2").click(function(){
		$("#newcord2").show();
		$(this).parent().hide();
	})*/
	
	if(ie6){
		/* Paytype Tab */
		$(".paytype .tab .tabitem").each(function(){
			var fix = $(this).index();
			$(this).attr("for","paytype_radio_"+fix);
			$(this).find("input").attr("id","paytype_radio_"+fix);
		});
		$(".investc .tab .tabitem").each(function(){
			var fix = $(this).index();
			$(this).attr("for","invest_radio_"+fix);
			$(this).find("input").attr("id","invest_radio_"+fix);
		});
		$(".pay_cod").each(function(){
			var fix = new Date().getTime();
			$(this).find("label").each(function(){
				fix = fix  + "" + $(this).index();
				$(this).attr("for","invest_radio_"+fix);
				$(this).find("input").attr("id","invest_radio_"+fix);
			})
		});
	}
	
	/* Paytype Banklist hover & click @ Checkout */
	$(".banklist li input,.banklist li img").click(function(){
		$(this).parents("li").find("input").attr("checked","checked");
		$(".banklist li").removeClass("current");
		$(this).parents("li").addClass("current");	
	});
	/* Remove border for IE6 */
	$(".banklist li a").focus(function(){this.blur();});
})