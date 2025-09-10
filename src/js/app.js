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