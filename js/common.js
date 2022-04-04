let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

sliderNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

sliderPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
	sliderPrev.disablet = position === 0;
	sliderNext.disablet = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();