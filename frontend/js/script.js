const btnOpen = document.getElementById('location');
const dropdown = document.getElementById('dropdown');

const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
	dropdown.classList.add('active');
})

const closeModal = () => {
	dropdown.classList.remove('active')
};

btnClose.addEventListener('click', closeModal);