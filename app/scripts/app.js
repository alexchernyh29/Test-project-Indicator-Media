import $ from "jquery";
import slick from "slick-carousel";

$(() => {
	$(".certificates-slider__list").slick({
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});
});
