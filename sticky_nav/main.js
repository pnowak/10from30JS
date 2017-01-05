function fixNav() {
    var nav = document.querySelector('nav'),
        navToTop = nav.offsetTop;

    if (window.pageYOffset >= navToTop) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

function fixHead() {
    var head = document.querySelector('header'),
        headFromTop = head.getBoundingClientRect().height;

    if (window.pageYOffset >= headFromTop) {
        head.classList.add('fixed');
    } else {
        head.classList.remove('fixed');
    }
}


document.addEventListener('scroll', function (e) {
    fixNav();
    fixHead();
}, false);