import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
	closeButton: true,
});


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
		prevEl: introSlider?.closest('.intro').querySelector('.navArrowPrev'),
		nextEl: introSlider?.closest('.intro').querySelector('.navArrowNext'),
	},
	pagination: {
		el: introSlider?.closest('.intro').querySelector('.swiper-pagination'),
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

// Инициализация слайдера reviewsPageSlider
const reviewsPageSlider = document.querySelector('.reviewsPageSlider');
var mySwiperReviewsPageSlider = new Swiper(reviewsPageSlider, {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
	},
	autoHeight: true,
	navigation: {
		prevEl: reviewsPageSlider?.querySelector('.navArrowPrev'),
		nextEl: reviewsPageSlider?.querySelector('.navArrowNext'),
	},
	pagination: {
		el: reviewsPageSlider?.querySelector('.swiper-pagination'),
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
const mediaQuerymin992 = window.matchMedia('(min-width: 992px)');
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
$('.accordBtnHide').click(function () {
	$(this).closest('.accordItem').find('.accordHead').toggleClass('active');
	$(this).closest('.accordItem').find('.accordBody').slideToggle();
});
$('.nav-article-title').click(function () {
	$(this).toggleClass('active');
	$(this).siblings('.nav-article-list').toggleClass('active');
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

$('#toggle_sm').click(function () {
	$(this).toggleClass('active');
	$('.headerFixedSmNav').slideToggle();
});

$('.headerNavMobile .header__nav-has-child>a').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).siblings('.subList').slideToggle();
});
$('.headerFixedSmNav .header__nav-has-child>a').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).siblings('.subList').slideToggle();
});



document.addEventListener('DOMContentLoaded', function () {

	if (mediaQuerymin992.matches) {
		const header = document.getElementById('headerFixedLg');
		if (!header) {
			console.error("Элемент с ID 'headerFixedLg' не найден!");
			return;
		}

		let lastScrollTop = 0; // Хранит предыдущую позицию скролла
		let headerVisible = true; // Флаг, показывающий, видима ли шапка
		const scrollThreshold = 50; // Порог в пикселях, после которого начинаем реагировать на скролл (чтобы избежать дрожания при малейшем движении)

		// Функция для добавления класса (появления)
		function showHeader() {
			if (!headerVisible) {
				header.classList.add('header-visible'); // Добавляем класс для плавного появления
				headerVisible = true;
			}
		}

		// Функция для удаления класса (скрытия)
		function hideHeader() {
			if (headerVisible) {
				header.classList.remove('header-visible'); // Удаляем класс для плавного скрытия
				headerVisible = false;
			}
		}

		window.addEventListener('scroll', function () {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			// Проверяем, не находимся ли мы у самого верха страницы
			if (scrollTop < scrollThreshold) {
				// Плавно убираем шапку, если находимся в самом начале
				hideHeader();
			} else {
				// Обычная логика скрытия/появления при скролле
				if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
					// Скролл вниз: убираем шапку
					hideHeader();
				} else if (scrollTop < lastScrollTop) {
					// Скролл вверх: показываем шапку
					showHeader();
				}
			}
			lastScrollTop = scrollTop; // Обновляем последнюю позицию скролла
		});

		// Изначальное состояние: если страница открыта не сначала, шапка должна быть видима
		// (можно добавить класс .header-visible при загрузке, если нужно, но скрипт это обработает)
		// При первой загрузке, если scrollTop > scrollThreshold, шапка будет показана,
		// если < scrollThreshold, то будет скрыта.
	}
	if (mediaQueryMax991.matches) {
		const header = document.getElementById('headerFixedSm');
		if (!header) {
			console.error("Элемент с ID 'headerFixedLg' не найден!");
			return;
		}

		let lastScrollTop = 0; // Хранит предыдущую позицию скролла
		let headerVisible = true; // Флаг, показывающий, видима ли шапка
		const scrollThreshold = 50; // Порог в пикселях, после которого начинаем реагировать на скролл (чтобы избежать дрожания при малейшем движении)

		// Функция для добавления класса (появления)
		function showHeader() {
			if (!headerVisible) {
				header.classList.add('header-visible'); // Добавляем класс для плавного появления
				headerVisible = true;
			}
		}

		// Функция для удаления класса (скрытия)
		function hideHeader() {
			if (headerVisible) {
				header.classList.remove('header-visible'); // Удаляем класс для плавного скрытия
				headerVisible = false;
			}
		}

		window.addEventListener('scroll', function () {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			// Проверяем, не находимся ли мы у самого верха страницы
			if (scrollTop < scrollThreshold) {
				// Плавно убираем шапку, если находимся в самом начале
				hideHeader();
			} else {
				// Обычная логика скрытия/появления при скролле
				if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
					// Скролл вниз: убираем шапку
					hideHeader();
				} else if (scrollTop < lastScrollTop) {
					// Скролл вверх: показываем шапку
					showHeader();
				}
			}
			lastScrollTop = scrollTop; // Обновляем последнюю позицию скролла
		});

		// Изначальное состояние: если страница открыта не сначала, шапка должна быть видима
		// (можно добавить класс .header-visible при загрузке, если нужно, но скрипт это обработает)
		// При первой загрузке, если scrollTop > scrollThreshold, шапка будет показана,
		// если < scrollThreshold, то будет скрыта.
	}
});


// quiz change blocks
let quizBlock1 = document.querySelector('.modalQuizBlock-1');
let quizBlock2 = document.querySelector('.modalQuizBlock-2');
let quizBlock3 = document.querySelector('.modalQuizBlock-3');
let quizBlock4 = document.querySelector('.modalQuizBlock-4');
let quizBlock5 = document.querySelector('.modalQuizBlock-5');

let quizNext1 = document.getElementById('modalQuizBtn-1');
let quizNext2 = document.getElementById('modalQuizBtn-2');
let quizNext3 = document.getElementById('modalQuizBtn-3');

let quizPrev2 = document.getElementById('modalQuizBtnPrev-2');
let quizPrev3 = document.getElementById('modalQuizBtnPrev-3');
let quizPrev4 = document.getElementById('modalQuizBtnPrev-4');

let zayav_rastorg_1 = document.getElementById('zayav_rastorg_1');
let zayav_rastorg_2 = document.getElementById('zayav_rastorg_2');
let zayav_rastorg_3 = document.getElementById('zayav_rastorg_3');


function quizBlocksHide() {
	let quizBlocks = document.querySelectorAll('.modalQuizBlock');
	quizBlocks.forEach(el => {
		el.style.display = 'none';
	});
}
function showQuizBlock1() {
	quizBlocksHide();
	quizBlock1.style.display = 'block';
}
function showQuizBlock2() {
	quizBlocksHide();
	quizBlock2.style.display = 'block';
}
function showQuizBlock3() {
	quizBlocksHide();
	quizBlock3.style.display = 'block';
}
function showQuizBlock4() {
	quizBlocksHide();
	quizBlock4.style.display = 'block';
}
function showQuizBlock5() {
	quizBlocksHide();
	quizBlock5.style.display = 'block';
}

quizNext1?.addEventListener('click', () => {
	showQuizBlock2();
});
quizPrev2?.addEventListener('click', () => {
	showQuizBlock1();
});
quizNext2?.addEventListener('click', () => {
	showQuizBlock3();
});
quizPrev3?.addEventListener('click', () => {
	showQuizBlock2();
});
quizNext3?.addEventListener('click', () => {

	if(zayav_rastorg_1.checked){
		showQuizBlock4();
	}
	if(zayav_rastorg_3.checked){
		showQuizBlock4();
	}
	if(zayav_rastorg_2.checked){
		showQuizBlock5();
	}
});
quizPrev4?.addEventListener('click', () => {
	showQuizBlock3();
});