$(document).ready(function(){

	/*DECLARATION*/
	var currentSecName = "";
	var vh = $(window).height();
	
	viewportHeight(vh);
	

	/*STICKY MENU AND SECTION SCROLL(WAYPOINTS)*/
	$('.waypoints').waypoint(function(direction){
		if ( direction == "down" ) {
			$('nav').addClass('sticky');
			//$('.main-menu').css("background-color","transparent");
		} else {
			$('nav').removeClass('sticky');
			//$('.main-menu').css("background-color","#1abc9c");
		}
	});

	/*MY SOLUTION OF PAGE SCROLL AND STICKY MENU*/
	/*var distance = $('.menu-section').offset().top;

    $window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() > distance ) {
	        // Your div has reached the top
	        $("nav").addClass("sticky");

	    } else {
	    	$('nav').removeClass('sticky');
	    }
	});*/


	/*MENU ACTIVE CLASS*/
	/*var main = $('#main-menu ul');

	$('.main-nav li a').click(function(event) {
	        
	    event.preventDefault();
	 
	    var full_url = this.href,
	        parts = full_url.split('#'),
	        trgt = parts[1],
	        target_offset = $('#'+trgt).offset(),
	        target_top = target_offset.top;
	        
	    $('html, body').animate({scrollTop:target_top}, 500);
	    
	   // Remove active class on any li when an anchor is clicked 
	    
	    main.children().removeClass();
	    
	    // Add active class to clicked anchor's parent li 
	        
	    $(this).parent().addClass('active');

	});*/

	/*MENU AND SECTION ACTIVE CLASS*/
	//var lastScrollTop = 0; 
	$(window).on('scroll',function(){
		$('.down-arrow').css({
			"opacity": "0",
			"transition" : "1s"
		});
		clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        // do something
	        $('.down-arrow').css({
				"opacity": "1",
				"transition" : "1s"
			});
	        console.log("Haven't scrolled in 250ms!");
	    }, 250));

		/*var st = $(this).scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			$('.down-arrow').css({
				"opacity": "0",
				"transition" : "1s"
			});
		} else {
			// upscroll code
			$('.down-arrow').css({
				"opacity": "0",
				"transition" : "1s"
			});
		}
		lastScrollTop = st;
		*/



		$('section').each(function(){
		  
			$(this).removeClass('active');

			if( $('#home').inView() ) {
		        currentSecName = "home";
		        $('.main-nav li').each(function(){
		        	$(this).removeClass('active');
		        	if( $(this).attr('class') == currentSecName ) {
		        		$(this).addClass('active');
		        	} 
		        });
	        }
		    
		    if( $('#about').inView() ) {
		        currentSecName = "about";
		        $('.main-nav li').each(function(){
		        	$(this).removeClass('active');
		        	if( $(this).attr('class') == currentSecName ) {
		        		$(this).addClass('active');
		        	} 
		        });	        
		    }

		    if( $('#team').inView() ) {
		        currentSecName = "team";
		        $('.main-nav li').each(function(){
		        	$(this).removeClass('active');
		        	if( $(this).attr('class') == currentSecName ) {
		        		$(this).addClass('active');
		        	} 
		        });	        
		    }
		    
		    if( $('#service').inView() ) {
		        currentSecName = "service";
		        $('.main-nav li').each(function(){
		        	$(this).removeClass('active');
		        	if( $(this).attr('class') == currentSecName ) {
		        		$(this).addClass('active');
		        	} 
		        });	        
		    }

		    if( $('#portfolio').inView() ) {
		        currentSecName = "portfolio";
		        $('.main-nav li').each(function(){
		        	$(this).removeClass('active');
		        	if( $(this).attr('class') == currentSecName ) {
		        		$(this).addClass('active');
		        	} 
		        });	        
		    }

		    if( $('#client').inView() ) {
		        currentSecName = "client";
		        $('.main-nav li').each(function(){
		        	$(this).removeClass('active');
		        	if( $(this).attr('class') == currentSecName ) {
		        		$(this).addClass('active');
		        	} 
		        });	        
		    }

		    if( $('#contact').inView() ) {
		        currentSecName = "contact";
		        $('.main-nav li').each(function(){
		        	$(this).removeClass('active');
		        	if( $(this).attr('class') == currentSecName ) {
		        		$(this).addClass('active');
		        	} 
		        });	        
		    }			
		});
	});

	/*MIXITUP PLUGIN (PORTFOLIO SECTION)*/
	var mixitUp = mixitup(".mixitup");

	/*OWL CAROUSEL(CLIENT SECTION)*/
	$(".testimonials").owlCarousel({
		loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$(".client-logo").owlCarousel({
		loop:true,
		margin:30,
	    nav:false,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	

}); /*document.ready*/

/*CHANGE HEADER DOWN ARROW BOTTOM*/
function viewportHeight(vh){
	if( vh > 700 ) {
		document.getElementsByClassName("down-arrow")[0].style.bottom = "5%";
	}

	if( vh > 800 ) {
		document.getElementsByClassName("down-arrow")[0].style.bottom = "10%";
	}

	if( vh > 900 ) {
		document.getElementsByClassName("down-arrow")[0].style.bottom = "20%";
	}
}

$.fn.inView = function(){
 	if(!this.length) 
        return false;
    
    var elementTop = this.offset().top  + 100;
    var elementBottom = elementTop + this.outerHeight();

    var viewportTop = $(window).scrollTop() ;
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function openNav() {
	document.getElementById("mobileNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mobileNav").style.width = "0%";
}