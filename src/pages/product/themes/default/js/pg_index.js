$(function(){
	//设置标识变量，用于判断是否需要使用获取banner图片主色来改变背景色
	var supportCanvas = false;
	var isOnlineEnv = false;//是否在线环境
	var siteUrlHOST = document.location.host;
	if(document.createElement("canvas").getContext){
		supportCanvas = true;	
	}
	if(("http:" == document.location.protocol) || ("https:" == document.location.protocol)){
		isOnlineEnv = true;	
	}
	
	
	//第一屏大banner滚动
	if($(".topbanner").find("li").length>1){
		UI.Xslider(".topbanner",{
			autoScroll:5000,
			speed:2000,
			showNav:".nav a",
			beforeStart:function(e){
				setAvarageColor(e.next.find("img").get(0),"#topbanner-expandBg");
			}
		});
	}
	else{
		$(".topbanner .nav").hide();
	}
	//设置第一张显示banner图对应的背景色
	setAvarageColor($(".topbanner").find("li.current img").get(0),"#topbanner-expandBg");
	
	//定义设置背景色的function
	function setAvarageColor(img,dom){
		var sameDomain = false;
		if(img.src.indexOf(siteUrlHOST)!=-1){
			sameDomain = true;
		}
		if(isOnlineEnv && sameDomain && supportCanvas && RGBaster){
			RGBaster.colors(img, {
			  exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ],
			  success: function(payload) {
				// 容器的背景色变成图片的主色 - payload.dominant
				$(dom).animate({backgroundColor:payload.dominant},800);	
			  }
			});
		}
	}
	ie6 && $(".sideRecomBox").css("visibility","visible");
	
	
	
	
	
	//"热门经验分享"列表滚动
	(function(){
		var xpUL = $(".xpslider .mover");
		var xpCell = xpUL.find("li");
		var xpNum = xpCell.length;
		if(xpNum>3){
			//$(".xpslider").find(".abtn").css("visibility","visible");
			xpUL.width(xpNum*xpCell.width());
			UI.Xslider(".xpslider",{
				speed:800,		
				unitDisplayed: 3,//可视的单位个数
		        numtoMove: 3,
				scrollObj:".mover",
				viewedSize:xpCell.width()*3,
				scrollObjSize:xpNum*xpCell.width()		
			});
		}
		
	})();
	
	
	//“合作伙伴”logo列表滚动
	(function(){
		var logoUL = $(".partnerBox .partnerList");
		var logoCell = logoUL.find("li");
		var logoNum = Math.ceil(logoCell.length/2);
		var pageNum = Math.ceil(logoCell.length/10);
		if(pageNum>=2){
			$(".partnerBox").find(".slidenav").css("visibility","visible");
			var slideNavHTML = "";
			for(var i = 0;i<pageNum;i++){
				slideNavHTML += '<a href="javascript:void(0)"></a>';
			}
			$(".partnerBox").find(".slidenav").html(slideNavHTML);
			
			logoUL.width(logoNum*logoCell.outerWidth(true));
			UI.Xslider(".partnerBox",{
				speed:800,		
				unitDisplayed: 5,//可视的单位个数
		        numtoMove: 5,
				scrollObj:".mover",
				showNav:".slidenav a",
				scrollObjSize:logoNum*logoCell.outerWidth(true),		
				unitLen:604
			});
		}
		if(ie6){
			logoCell.hover(function(){
				$(this).find(".prom").css("display","block");	
			},
			function(){
				$(this).find(".prom").css("display","none");	
			});		
		}
		
	})();
	
	
	
});