function sliderFunction(){
var slickHeroImage = {
  speed: 800,
dots: true,
fade: true,
autoplay: true,
autoplaySpeed: 2500,
prevArrow: '<button type="button" data-role="none" class="carousel-control left slick-prev">Previous</button>',
nextArrow: '<button type="button" data-role="none" class="carousel-control right slick-next">Next</button>',
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
}
(function () {
    //Includes
    $('#navBar').load("include/header.html");
    $('#certifications').load("include/certifications.html");
    $('#ourClients').load("include/ourClients.html");
    $('#footer').load("include/footer.html");
    // set time out function in order to get content first before to apply slick slider
    setTimeout(sliderFunction, 300);
})();
