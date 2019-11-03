$(function () { 
	UI.Xslider(".smallPicList",{
		dir: "V",
		viewedSize:720	
	});
	$(".smallPicList li").click(function(){
		var me=$(this);
		var img=$(".bigPicShow img");
		img.hide();
		img.attr("src",me.find("img").attr("bigsrc"));
		me.addClass("current").siblings().removeClass("current");
	});	
	$(".bigPicShow img").load(function(){
		/*if(!-[1, ] && !window.XMLHttpRequest){
			//IE 6 fix
			this.style.display = "block";
			this.style.height = "auto";
			this.style.width = "auto";
			if(this.height-600>=0){
				this.style.height = "auto";
				this.style.width = (this.width-980>=0) ? "980px" : "auto";
			}
			else {
				this.style.height = "600px";
			}
			
		}*/
		$(this).fadeIn(800);
	});
});