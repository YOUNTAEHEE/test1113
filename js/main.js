const section = document.querySelector('section');
const btns = section.querySelector('.btns');
const colors = section.querySelectorAll('li');

colors.forEach((color, index) => {
	colors[index].addEventListener('click', () => {
		if (colors[index].classList.contains('on')) return;
		colors.forEach((color, idx) => {
			color.classList.remove('on');
			color.style.backgroundColor = '#333';
		});
		colors[index].classList.add('on');
		colors[index].style.backgroundColor = colors[index].innerText;
	});
});
