/*----------------------------/
	/* CAROUSEL
	/*---------------------------*/

	if($('.slick-carousel').length > 0) {
		$('.responsive').slick({
			dots: true,
			infinite:false,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay:true,
            autoplaySpeed:3000,
			responsive: [
				{
					breakpoint: 561,
					settings: {
       					slidesToShow: 3,
				        slidesToScroll: 3,
				        infinite: true
      }
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]
		});
	}


	/*----------------------------/
	/* PARALLAX
	/*---------------------------*/

	if($('.parallax').length > 0) {
		$('.parallax').stellar();
	}
