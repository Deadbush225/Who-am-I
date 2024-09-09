declare global {
	interface Window {
		__forceSmoothScrollPolyfill__: boolean;
	}
}

window.__forceSmoothScrollPolyfill__ = true;

import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

export function scrollTo(ref: string) {
	document.querySelector(ref)!.scrollIntoView({ behavior: "smooth" });
}
