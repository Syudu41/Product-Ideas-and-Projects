function setCurrentYear() {
	const year = String(new Date().getFullYear());
	for (const el of document.querySelectorAll('[data-year]')) {
		el.textContent = year;
	}
}

function runEntrance() {
	const page = document.querySelector('[data-enter]');
	if (!page) return;
	requestAnimationFrame(() => page.classList.add('is-in'));
}

function observeReveals() {
	const revealEls = Array.from(document.querySelectorAll('.reveal'));
	if (revealEls.length === 0) return;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		},
		{ root: null, rootMargin: '0px 0px -100px 0px', threshold: 0.15 }
	);

	for (const el of revealEls) observer.observe(el);
}

window.addEventListener('DOMContentLoaded', () => {
	setCurrentYear();
	runEntrance();
	observeReveals();
});
