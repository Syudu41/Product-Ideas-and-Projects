function setCurrentYear() {
	const year = String(new Date().getFullYear());
	for (const el of document.querySelectorAll('[data-year]')) {
		el.textContent = year;
	}
}

function getPreferredTheme() {
	const saved = localStorage.getItem('theme');
	if (saved === 'dark' || saved === 'light') return saved;
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
	const isDark = theme === 'dark';
	document.documentElement.classList.toggle('dark', isDark);
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function updateThemeToggle() {
	const btn = document.getElementById('theme-toggle');
	if (!btn) return;
	const isDark = document.documentElement.classList.contains('dark');
	btn.setAttribute('aria-pressed', String(isDark));
	btn.textContent = isDark ? 'Light' : 'Dark';
}

function wireThemeToggle() {
	applyTheme(getPreferredTheme());
	updateThemeToggle();

	const btn = document.getElementById('theme-toggle');
	if (!btn) return;
	btn.addEventListener('click', () => {
		const isDark = document.documentElement.classList.contains('dark');
		applyTheme(isDark ? 'light' : 'dark');
		updateThemeToggle();
	});
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
	wireThemeToggle();
	setCurrentYear();
	runEntrance();
	observeReveals();
});
