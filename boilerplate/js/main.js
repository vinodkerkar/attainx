
$(document).ready(function(){
var slickHeroImage = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
 };
 var slickCertifications = {
   dots: true,
   slidesToShow: 4,
   slidesToScroll: 4,
   infinite: true,
   autoplay:true,
   autoplaySpeed:3000,
   arrows:false,
   responsive: [
	    {
	      breakpoint: 559,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
     ]
 };

 $('.heroImage').slick(slickHeroImage);
 $('.certifications').slick(slickCertifications);
 $('.clients').slick(slickCertifications);

});
