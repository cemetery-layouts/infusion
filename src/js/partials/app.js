$('.carusel__container').owlCarousel({
	loop: true,
	nav: true,
	items: 4,
	stageElement: 'ul',
	itemElement: 'li',
	navContainer: '.carusel__nav',
	dotsContainer: '.carusel__page-list',
	controlsClass: 'carusel__controls',	
	dotClass: 'carusel__page-item',	
	navContainerClass: 'carusel__nav',	
	stageClass: 'carusel__list',	
	margin: 20,
	navClass: ['carusel__btn carusel__btn_prev', 'carusel__btn carusel__btn_next'],
	navText: ['',''],
	autoplay: true,
	autoplayTimeout: 2500	
});
$('.testimonials__slider').owlCarousel({
	mouseDrag: false,
	touchDrag: false,
	animateOut: 'testimonials__animate-out',
	animateInClass: 'testimonials__animate-in',
	items: 1,
	stageElement: 'ul',
	itemElement: 'li',
	dotsContainer: '.testimonials__page-list',
	dotClass: 'testimonials__page-item',
	navContainer: '.testimonials__controls',	
	navClass: ['testimonials__btn testimonials__btn_prev', 'testimonials__btn testimonials__btn_next'],
	navText: ['',''],
	stageClass: 'testimonials__list'	
});
$('.slider').owlCarousel({
	loop: true,
	items: 1,
	dots: false,
	stageElement: 'ul',
	itemElement: 'li',
	stageClass: 'slider__list',
	navText: ['',''],
	navContainer: '.slider__nav',
	navClass: ['slider__nav-btn slider__nav-btn_prev', 'slider__nav-btn slider__nav-btn_next']
});