$(document).ready(function(){

	$('#menu-btn').click(function(){		
			$('.menu').slideToggle(700);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			}		
		});

	$('.top-nav__menu > li').on('click',function(){
		$('.nav-submenu').hide();
		$(this).children(".nav-submenu").show();
	});

	$('.top-submenu li').on('click',function(){
		$(this).parents('.nav-submenu').css('display','none');
	});	
	
	$('.slider-block').slick({
    		arrows: true,
    		appendDots: $('.slider-block__dots'),
    		dots: true
   		});
});