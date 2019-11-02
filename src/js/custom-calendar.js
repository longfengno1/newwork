var HK_calevents = [
	{
		title: 'SOLD OUT',
		description: '',
		start: '2018-09-07',
		soldout: true
	},
	{
		title: 'from HKD<span>3,100</span>person',
		description: 'Singapore Weekend Getaway',
		start: '2018-09-14',
		hot: true
	},
	{
		title: 'from HKD<span>3,100</span>person',
		description: 'Bintan Island Weekend Cruise',
		start: '2018-09-14'
	},
	{
		title: 'from HKD<span>3,100</span>person',
		description: 'Kuala Lumpur',
		start: '2018-09-14'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-21'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-28',
		hot: true
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-10-05',
		hot: true
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-10-12'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-10-19'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-10-26'
	}
];

var GZ_calevents = [
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-06'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-13'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-20'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-27',
		hot: true
	}
];

var SG_calevents = [
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-05'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-12'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-12'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-19'
	},
	{
		title: 'from HKD<span>4,100</span>person',
		description: '',
		start: '2018-09-26',
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
				var hotoffer = '<div class="highlight-hot"><div class="icon-hot"><span>HOT</span></div></div>';
				obj.find('.fc-day[data-date="' + hotday + '"]').html(hotoffer);
			}
			if (event.soldout == true) {
				return $('<div class="txt-soldout">' + event.title + '</div>');
			} else {
				return $('<div class="row mx-0"><div class="col-12 p-0"><div class="txt-desc">' + event.description + '</div></div><div class="col p-0"><div class="txt-price">' + event.title + '</div></div></div>');
			}
		},
		viewRender: function (view, element){
			$(element).find('.fc-day-header.fc-wed').prepend('<a href="javascript:void(0)" onclick="" class="btn-right show">></a>');
			$(element).find('.fc-day-header.fc-wed').append('<a href="javascript:void(0)" onclick="" class="btn-left"><</a>');
			initscrollbtn(element);
		},
		header: {
			left: '',
			center: 'prev title next',
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