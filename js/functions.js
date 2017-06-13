function ativaPage(){
	$('.targetPage').click(function(){
		var target = $(this).attr('dt-page');
		$('.page').removeClass('page-active');
		$(target).addClass('page-active');
	});
}



ativaPage();
