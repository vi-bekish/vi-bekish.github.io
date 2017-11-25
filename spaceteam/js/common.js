/* function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("menu").style.marginRight = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("menu").style.marginRight = "0";
        document.body.style.backgroundColor = "white";
    } */
    


$(window).on('mousemove', function(e) {
   var w = $(window).width();
   var h = $(window).height();
    
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;
    
    $(".parallax").each(function(i,el){
        var offset = parseInt($(el).data('offset'));
        
        var translate = "translate3d(" + Math.round(offsetX * offset)
        + "px," + Math.round(offsetY * offset) + "px, 0px";
        
        $(el).css({
            "transform":translate
        })
    })
    
});

$(document).ready(function(){
 

    
 var options = {
        offset: 500
    }
    var header = new Headhesive('.mnu', options); 

	function setEqualHeight(columns){
		var tallestcolumn = 0;
		columns.each(function(){
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn){
					tallestcolumn  = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}
		
	setEqualHeight($('.blocks > div > a, .blocks-hide > div > a'));

 
    $('a#toggle-btn').click(function() {
        $('.blocks-hide').slideToggle(1000);
        return false;
    });
    
    $(".owl-carousel").owlCarousel({
        items: 1,
		    margin: 0,
		    responsiveClass: true,
		    loop: true,
		    nav: true,
		    dots: true,
		    autoplay: true,
		    smartSpeed: 500,
			responsive:{
				0:{
					nav:false
				},
				480: {
					nav:false
				},
				768:{
					nav:false
				},
				1000:{
					nav:true,
				}
			},
		    navText: [
		      "<i class='icon-arrow-left owl-direction'></i>",
		      "<i class='icon-arrow-right owl-direction'></i>"
	     	]
        
    });
    
    $ ('.timer').countTo({
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });

    
});