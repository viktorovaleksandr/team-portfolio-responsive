$(document).ready(function(){
                $('.slick-slider').slick({
                	
					dots: true,
					  infinite: true,
					  speed: 300,
					  slidesToShow: 3,
					  slidesToScroll: 3,
					  arrows: false,

					  responsive: [
					    {
					      breakpoint: 1400,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2,
					        infinite: true,
					        dots: true
					      }
					    },

					    {
					      breakpoint: 950,
					      settings: {
					        slidesToShow: 1,
					        slidesToScroll: 1
					      }
					    
					    }
					    // You can unslick at a given breakpoint now by adding:
					    // settings: "unslick"
					    // instead of a settings object
					  ]
					});
                });
           