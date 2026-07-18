import "./main.min.js";
import "./watcher.min.js";
import "./heroblock.min.js";
import "./slider.min.js";
import "./gallery.min.js";
//#region src/components/pages/portfoliodetail/portfoliodetail.js
function initGallery() {
	const galleryEl = document.querySelector("[data-fls-gallery]");
	if (galleryEl) lightGallery(galleryEl, {
		selector: "a",
		speed: 500,
		hash: false
	});
}
document.querySelector("[data-fls-gallery]") && window.addEventListener("load", initGallery);
//#endregion
