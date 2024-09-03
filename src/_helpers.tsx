import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

export function scrollTo(ref: string) {
	document.querySelector(ref)!.scrollIntoView({ behavior: "smooth" });
}
