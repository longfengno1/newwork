$(function(){
	//Header�еĵ������Hover����ʾ����
	$(".store_name").hover(function(){
		$(this).find(".ele_intro").show();
		if(ie6){
			$(this).find(".ele_intro .bdr_a").width($(this).width()+38);	
		}
		
			
	},function(){
		$(this).find(".ele_intro").hide();	
	});
	
	
	//����û��趨��ͨ���ĵ��̵���������...
	if($("#main #menu").length!=0){
		//���ƽ�ͨ���ĵ��̵�����ǰ���Ԫ���¼�����Ϊ0
		$("#main #menu").prev().css("marginBottom",0);	
	}
	
	//������"ȫ����Ʒ����"�˵�չ���˷���
	$(".store_ele_cate .cate_1").bind("click",function(){
		var $this = $(this);
		if($this.hasClass("cate_1_curr")){
			$this.next(".cate_2_ctner").hide("fast");
			$this.removeClass("cate_1_curr");
		}
		else{
			$this.next(".cate_2_ctner").show("fast");	
			$this.addClass("cate_1_curr");
		}
	});
		
	
	//����banner�б��ʼ��
	$(".store_ele_bannerSlider").each(function(){
		var bannerSlider = $(this);
		var bsUL = bannerSlider.find("ul");
		var itemH = bannerSlider.find("li").first().height();
		bannerSlider.height(itemH);
		bsUL.height(itemH);
		bsUL.width(bannerSlider.find("li").length*bannerSlider.width());
		if(bannerSlider.find("li").length<2){
			bannerSlider.find(".nav").hide();	
		}
		else{
			UI.Xslider(bannerSlider,{
				autoScroll:5000,
				speed:2000,
				showNav:".nav a"
			});	
		}
	});
	
	//��Ʒ�б�ɸѡ
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
	
	//ͨ���еġ�����������̬��ӹ���Ч��
	$(".store_layout_main .store_ele_historyProbox").each(function(){
		var $this = $(this);
		var itemNum = $this.find(".prolist li").length;
		var dotNav = '';
		//var viewedSize = 
		if(itemNum>5){
			for(var i=1,j=Math.ceil(itemNum/5);i<=j;i++){
				dotNav+='<a href="javascript:void(0);">'+i+'</a>';
			}
			
			$this.find(".prolist_ctner").before('<div class="nav"><div class="navInner">'+dotNav+'</div></div>');
			
			UI.Xslider($this.find(".ele_cont"),{
				numtoMove:1,
				unitLen:$this.width(),
				scrollObjSize:$this.width()*Math.ceil(itemNum/5),
				showNav:".nav a"
			});	
			
		}	
	});
	
	
	//ͨ���еġ����̹��桱չ��IntroЧ��
	$(".store_layout_main .store_ele_newslist li").bind("click",function(){
		var $this = $(this);
		$this.addClass("item_show").find(".ele_intro").show("fast");
		$this.siblings(".item_show").removeClass("item_show").find(".ele_intro").hide("fast");
		$this.siblings(".item_show_last").removeClass("item_show_last");
		if($this.next("li").length==0){
			$this.addClass("item_show_last");
		}
	});
	
	
	//ͨ���б�ҳ�У�ͨ��menubar�ṹ����û�С�.menulist��Ԫ�ص�
	if($("#menu").length!=0 && $("#menu .menubar").find(".menulist").length==0){
		var eleCate = $("#menu").next(".store_layout_left_main").find(".store_layout_col_left").find(".store_ele_cate");
		if(eleCate.length!=0){
			eleCate.css("marginTop",-49);
			$("#menu").find(".navigation").after('<div class="menu"><h3><a class="tc" style="background-image:none;padding:0;">'+eleCate.find(".ele_caption").text()+'</a></h3></div>');
		}
	}
	
	
	
});