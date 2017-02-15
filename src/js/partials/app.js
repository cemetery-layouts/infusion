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