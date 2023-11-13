const section = document.querySelector('section');
const btns = section.querySelector('.btns');
const colors = section.querySelectorAll('li');

colors.forEach((color, index) => {
	colors[index].addEventListener('click', () => {
		if (colors[index].classList.contains('on')) return;
		colors.forEach((color) => {
			color.classList.remove('on');
		});
		colors[index].classList.add('on');
	});
});
