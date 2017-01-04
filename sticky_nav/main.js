document.addEventListener('scroll', function (e) {
	var nav = document.querySelector('nav'),
		head = document.querySelector('header'),
	    navToTop = nav.offsetTop,
	    headFromTop = parseInt(window.getComputedStyle(head, null).getPropertyValue('height'));

	if ((window.pageYOffset >= navToTop) && (window.pageYOffset >= headFromTop)) {
		nav.classList.add('fixed');
		head.classList.add('fixed');
	} else {
		nav.classList.remove('fixed');
		head.classList.remove('fixed');
	}
}, false);