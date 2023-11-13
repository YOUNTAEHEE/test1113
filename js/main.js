const section = document.querySelector('section');
const btns = section.querySelector('.btns');
const colors = section.querySelectorAll('li');

colors.forEach((color, index) => {
	colors[index].addEventListener('click', () => {
		if (colors[index].classList.contains('on')) return;

		activation(colors, index);
		bg(colors, index);
	});
});

function activation(arr, idx) {
	console.log(arr);
	arr.forEach((el) => {
		el.classList.remove('on');
	});
	colors[idx].classList.add('on');
}

function bg(arr, idx) {
	arr.forEach((el) => {
		el.style.backgroundColor = '#333';
	});
	arr[idx].style.backgroundColor = arr[idx].innerText;
}
