$(function(){
	UI.Xslider(".topbanner",{
		autoScroll:5000,
		speed:2000,
		showNav:".nav a"
	});
	UI.Xslider(".hotgoods");
	var seachtab=$(".filterbox");
	seachtab.find(".filtermore span").click(function(){
		var me=$(this);
		me.toggleClass("up");	
		if(!me.hasClass("up")){
			me.parents("tr").find(".inner").addClass("filterhidden")
			//seachtab.find(".filtertype > ul > li:gt(4)").removeClass("hidden");
		}else{
			//seachtab.find(".filtertype > ul > li:gt(4)").addClass("hidden");		
			me.parents("tr").find(".inner").removeClass("filterhidden")
		}
	});
	$(".seprator .ckbox").click(function(){
		$(this).toggleClass("ckbox_checked");	
	});
	
	/*//Compare Bar
	$("#compareclose").click(
		function(){
			var cp=$("#compare");
			var me=$(this)
			if(me.attr("rel")==0){
				me.html("&#91;&#23637;&#24320;&#93;");
				cp.stop().animate({height:35},1000);
				me.attr("rel",1)
			}else{
				me.html("&#91;&#25910;&#36215;&#93;");
				cp.stop().animate({height:143},1000);
				me.attr("rel",0)
			}
		}
	);
	$("#compare .compareArea li").hover(function(){
		$(".del",this).show()
	},function(){
		$(".del",this).hide()
	});
	//���С�����¡���ʼ�Ƚϡ���ť��floatFunc�ڵ�����
	var timerFixComparePos;
	$(window).bind("resize",function(){
		clearTimeout(timerFixComparePos);
		timerFixComparePos =  setTimeout(function(){
		if($(window).width()<1280){
			$("#compare").css({right:31});
		}
		else{
			$("#compare").css({right:"auto"});	
		}
		},10);
	});
	$(window).resize();
	
	//����������Ʒ�б��ְ�ťhoverЧ��
	$(".catepro .action .btn_gray24").hover(
		function(){
			$(this).addClass("btn_red24");
		},
		function(){
			$(this).removeClass("btn_red24");
		}
	);
	
	//������Ʒ�б���hover�����м۸�İ�ť��
	$(".sidebox .btn_gray24").hover(
		function(){
			var price = $(this).data("priceText",$(this).text());
			$(this).addClass("btn_red24");
			$(this).find("em").text("���빺�ﳵ").addClass("cmnTxt");
		},
		function(){			
			//var price = $(this).data("priceText",$(this).text());
			$(this).removeClass("btn_red24");
			$(this).find("em").text($(this).data("priceText")).removeClass("cmnTxt");
			
		}
	);*/
	
});