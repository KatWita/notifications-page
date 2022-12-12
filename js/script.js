const btn = document.querySelector('.btn-header');
const allActive = document.querySelectorAll('.active');
const number = document.querySelector('.header__number');
let count = allActive.length;

const clearAllActive = () => {
	allActive.forEach((active) => {
		active.classList.remove('active');
	});
	count = 0;
	number.textContent = count;
};

btn.addEventListener('click', clearAllActive);
allActive.forEach((active) => {
	count = allActive.length;

	active.addEventListener('click', (e) => {
		if (active.classList.contains('active')) {
			e.currentTarget.classList.remove('active');
			count--;
		}

		if (count < 0) {
			return;
		} else {
			number.textContent = count;
		}
	});
});
