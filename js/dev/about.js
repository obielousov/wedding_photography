import "./main.min.js";
/* empty css           */
import "./watcher.min.js";
import "./heroblock.min.js";
import { r as Swiper } from "./navigation.min.js";
import { t as Autoplay } from "./slider.min.js";
//#region src/components/pages/about/about.js
function initSliders() {
	if (document.querySelector(".about__slider")) new Swiper(".about__slider", {
		modules: [Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 50,
		autoHeight: true,
		speed: 800,
		loop: true,
		autoplay: {
			delay: 7e3,
			disableOnInteraction: false
		}
	});
}
document.querySelector(".about__slider") && window.addEventListener("load", initSliders);
//#endregion
