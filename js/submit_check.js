$(function() {
	$('#submit').attr('disabled', 'disabled');
	$('#submit').css({
            opacity: "0.5"  ,
			cursor:"default"
        });

	$('#check').click(function() {
		if ($(this).prop('checked') == false) {
			$('#submit').attr('disabled', 'disabled');
			$('#submit').css({
            opacity: "0.5"  ,
			cursor:"default"
        });

		} else {
			$('#submit').removeAttr('disabled');
			$('#submit').css({
            opacity: "1"  ,
			cursor:"pointer"
        });
		}
	});
	$('.back').click(function() {
		$('#submit').attr('disabled', 'disabled');

	});
});
