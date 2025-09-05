import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/fslightbox.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntroSlider = new Swiper(introSlider, {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 10,
	effect: 'fade',
	autoplay: {
		delay: 5000,
	},
	fadeEffect: {
		crossFade: true
	},
	autoHeight: true,
	navigation: {
		prevEl: introSlider?.querySelector('.navArrowPrev'),
		nextEl: introSlider?.querySelector('.navArrowNext'),
	},
	pagination: {
		el: introSlider?.querySelector('.swiper-pagination'),
		clickable: true,
		type: 'bullets',
	},
});

// Инициализация слайдера caseSlider
const caseSlider = document.querySelector('.caseSlider');
var mySwiperCaseSlider = new Swiper(caseSlider, {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
	},
	autoHeight: true,
	navigation: {
		prevEl: caseSlider?.querySelector('.navArrowPrev'),
		nextEl: caseSlider?.querySelector('.navArrowNext'),
	},
	pagination: {
		el: caseSlider?.querySelector('.swiper-pagination'),
		clickable: true,
		type: 'bullets',
	},
});

// Инициализация слайдера logoSliderLeft
document.querySelectorAll('.logoSliderLeft').forEach(n => {
	const mySwiperLogoLeft = new Swiper(n, {
		slidesPerView: 'auto',
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 2500,  // Задержка между прокруткой (в миллисекундах)
			disableOnInteraction: false, // Не останавливать при взаимодействии пользователя
		},
	});
});

// Инициализация слайдера logoSliderRight
document.querySelectorAll('.logoSliderRight').forEach(n => {
	const mySwiperLogoRight = new Swiper(n, {
		slidesPerView: 'auto',
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 2500,  // Задержка между прокруткой (в миллисекундах)
			disableOnInteraction: false, // Не останавливать при взаимодействии пользователя
		},
	});
});

const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');
const mediaQueryMax767 = window.matchMedia('(max-width: 767px)');

// Акордионы
if (mediaQueryMax991.matches) {
	$('.accordHead--sm').click(function () {
		$(this).toggleClass('active');
		$(this).siblings('.accordBody--sm').slideToggle();
	});
}
$('.accordHead').click(function () {
	$(this).toggleClass('active');
	$(this).siblings('.accordBody').slideToggle();
});

// Услуги
if (mediaQueryMax767.matches) {
	$('.helpBtnAction').click(function () {
		$(this).toggleClass('active');
		$(this).parent('.help__block').find('.help__block-list').children(':not(:first-child)').slideToggle();
	});
}

$('#toggle').click(function () {
	$(this).toggleClass('active');
	$('.headerNavMobile').slideToggle();
});

$('.header__nav-has-child>a').click(function () {
	$(this).toggleClass('active');
	$(this).siblings('.subList').slideToggle();
});