// JavaScript Document

$(function () {
	
	$('#faqs .part-2 > ul > li > h3').click(function () {
		$(this).parent().toggleClass('active').siblings().removeClass('active');
		$('.dc-scroll-wrapper').mCustomScrollbar("scrollTo","0",{
			scrollInertia:0
		});
	})
	
});

function toggledropdown() {
	var fdropdown = $('#first-select');
	var sdropdown = $('#second-select');
	fdropdown.change(function () {
		var selectval = $(this).val();
		//console.log(selectval);
		if (selectval != undefined || selectval != ''){
			var selectarray = $(this).find('option[value="'+selectval+'"]').attr('data-attr');
			var array = selectarray.split(", ");
			var list = '';
			for (i = 0; i < array.length; i++) {
				list += '<option value="' + array[i] + '">' + array[i] + '</option>';
			}
			sdropdown.empty().append(list).addClass('active');
		} else {
			sdropdown.empty().removeClass('active');
		}
	});
}