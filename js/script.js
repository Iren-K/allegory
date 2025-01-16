//Переменные
const btnOpen = document.getElementById('location');
const dropdown = document.getElementById('dropdown');
const btnClose = document.getElementById('btn-close');
const btnCatalog = document.getElementById('btn-catalog');
const burger = document.getElementById('burger');
const catalog = document.getElementById('catalog');
const carousel = document.getElementById('books');

var tabHead = document.querySelectorAll(".tab");
var tabContent = document.querySelectorAll(".col");

//Форма выбора города
btnOpen.addEventListener('click', () => {
	dropdown.classList.add('active');
})

const closeModal = () => {
	dropdown.classList.remove('active')
};

btnClose.addEventListener('click', closeModal);

//Кнопка "Каталог"
btnCatalog.addEventListener('click', () => {
	burger.classList.toggle('active');
	catalog.classList.toggle('active');
});

//Каталог

for (var i = 0; i < tabHead.length; i++) {

	tabHead[i].addEventListener("click", function(e) {
	  e.preventDefault();
	  var tabAttr = e.target.getAttribute("data-tab");
  
	  for (var j = 0; j < tabHead.length; j++) {
		var contentAttr = tabContent[j].getAttribute("data-content");
  
		if (tabAttr === contentAttr) {
		  tabHead[j].classList.toggle("active");
		  tabContent[j].classList.toggle("active");
		}
		if (tabAttr.onclick && tabAttr.includes("active")) {
		  tabHead[j].classList.remove("active");
		  tabContent[j].classList.remove("active");
		}
	  };
	});
};


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    const cardWidth = document.querySelector('.card').offsetWidth + parseInt(window.getComputedStyle(document.querySelector('.card')).marginRight);

    function moveSlider() {
        slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slider.children.length - 1) {
            currentIndex++;
            moveSlider();
        }
    });
});