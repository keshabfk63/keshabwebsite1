jQuery(document).ready(function(){
	$('button,a').click(function(){
		$('div').toggleClass("menu-push");
		$('nav').toggleClass("menu-open");
	})
})