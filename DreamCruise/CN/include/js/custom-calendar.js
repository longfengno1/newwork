var HK_calevents = [
	{
		title: '¥ <span>4,100</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-02'
	},
	{
		title: '¥ <span>4,200</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-09'
	},
	{
		title: '¥ <span>4,300</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '云顶梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-16'
	},
	{
		title: '¥ <span>4,400</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-23',
		hot: true
	}
];

var GZ_calevents = [
	{
		title: '¥ <span>4,100</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-02'
	},
	{
		title: '¥ <span>4,200</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-09'
	},
	{
		title: '¥ <span>4,300</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '云顶梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-16'
	},
	{
		title: '¥ <span>4,400</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-23',
		hot: true
	}
];

var SG_calevents = [
	{
		title: '¥ <span>4,100</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-02'
	},
	{
		title: '¥ <span>4,200</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-09'
	},
	{
		title: '¥ <span>4,300</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '云顶梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-16'
	},
	{
		title: '¥ <span>4,400</span> 起/人',
		itneraries: '上海 - 香港 - 吉隆坡 - 新加坡 - 苏比克湾 - 巴生港',
		cruises: '世界梦号',
		travelday:'6天5晚，周六-周四',
		expirydate: '2018.08.21',
		start: '2018-11-23',
		hot: true
	}
];

$(document).ready(function () {
	var cwrapper = $('#calendar');
	var calendar = $('.dc-calendar');
	var hkobj = $('#HK-Calendar');
	var gzobj = $('#GZ-Calendar');
	var sgobj = $('#SG-Calendar');

	initcalendar(hkobj, HK_calevents);
	initcalendar(gzobj, GZ_calevents);
	initcalendar(sgobj, SG_calevents);

	cwrapper.on('shown.bs.collapse', function () {
		calendar.fullCalendar('render');
	});

	$('a[data-toggle="pill"]').on('shown.bs.tab', function () {
		calendar.fullCalendar('render');
	});

	var mobilebreakpoint = 768; //Mobile Breakpoint

	if (window.innerWidth < mobilebreakpoint) {
		calendarresize(calendar, 'mobile');
	} else {
		calendarresize(calendar, 'desktop');
	}
	$(window).resize(function (e) {
		if (window.innerWidth < mobilebreakpoint) {
			calendarresize(calendar, 'mobile');
		} else {
			calendarresize(calendar, 'desktop');
		}
	});
});


function initcalendar(obj, data) {
	obj.fullCalendar({
		locale: 'zh-cn',
		eventLimit: true, // allow "more" link when too many events
		views: {
			month: {
				eventLimit: 2
			}
		},
		eventLimitText: function (n) {
			return n + '+ More >';
		},
		events: data,
		//fixedWeekCount:false,
		showNonCurrentDates: false,
		titleFormat: 'MMM YYYY',
		eventRender: function (event, element) {
			if (event.hot == true) {
				var hotday = event.start.format();
				var hotoffer = '<div class="highlight-hot"><div class="icon-hot"><span>热门</span></div></div>';
				obj.find('.fc-day[data-date="' + hotday + '"]').html(hotoffer);
			}
			if (event.soldout == true) {
				return $('<div class="txt-soldout">' + event.title + '</div>');
			} else {
				return $('<div class="row mx-0"><div class="col-12 p-0"><div class="txt-desc"></div></div><div class="col p-0 text-right"><div class="txt-price">' + event.title + '</div>' + event.itneraries + '<br />' + event.cruises + ' <br />' + event.travelday + '</div></div>');
			}
		},
		eventAfterRender: function (event, element) {
			//console.log(event.start.format('YYYY.MM.DD'));
			element.popover({
              animation:true,
			  delay: 300,
			  title: event.start.format('YYYY.MM.DD')+' 所有航线',
			  template: '<div class="popover calendar-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              content: '<div class="row"><div class="col"><p><span class="icon-from">' + event.itneraries + '</span></p><p><span class="icon-to">' + event.cruises + '</span><span class="icon-time">' + event.travelday + '</span></p><p><span class="icon-date mb-2 mb-md-0">限时至'+event.expirydate+'</span><br class="d-md-none"><span class="icon-offer ml-md-2">特惠</span><span class="icon-hot-offer ml-2">热门</span> <span class="icon-tag">亲子游</span><span class="icon-tag">周末游</span></p></div><div class="col-auto d-flex flex-column"><p class="txt-price mt-auto">'+event.title+'</p></div><a href="javascript:void(0)" class="btn-itneraries" tabindex="0"></a></div>',
              trigger: 'hover',
              html: true,
              placement: 'bottom',
              container: 'body',
              offset:500
          	});
		},
		viewRender: function (view, element){
			$(element).find('.fc-day-header.fc-wed').prepend('<a href="javascript:void(0)" onclick="" class="btn-right show">></a>');
			$(element).find('.fc-day-header.fc-wed').append('<a href="javascript:void(0)" onclick="" class="btn-left"><</a>');
			initscrollbtn(element);
		},
		header: {
			left: 'prev title next',
			center: '',
			right: ''
		}
	});

}

function calendarresize(obj, type) {
	var ratio;
	if (type == 'mobile') {
		ratio = 0.6;

	} else {
		ratio = 1.3;
	}
	obj.fullCalendar('option', 'aspectRatio', ratio);
}

function initscrollbtn(obj) {
	var leftbtn = obj.find('.btn-right');
	var rightbtn = obj.find('.btn-left');
	var sobj = obj.children('table');

	leftbtn.on('click', function () {
		var sobjrt = sobj.width();
		console.log(sobjrt);
		sobj.animate({
			scrollLeft: sobjrt
		}, 500);
	});
	rightbtn.on('click', function () {
		sobj.animate({
			scrollLeft: 0
		}, 500);
	});

	sobj.scroll(function () {
		var setpoint = sobj.find('.fc-day-header.fc-wed').offset().left;
		//console.log($('.dc-calendar .fc-view > table').scrollLeft());
		if (setpoint >= 0) {
			rightbtn.removeClass('show');
			leftbtn.addClass('show');
		} else {
			rightbtn.addClass('show');
			leftbtn.removeClass('show');
		}
	});
}