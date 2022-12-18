const nav = document.querySelector('nav');

// dropdowns 
const links = document.querySelectorAll('li');
for (let link of links) {
    link.addEventListener('click', function () {
        // check if there is dropdown content
        if (this.childNodes.length > 2) {
            this.classList.toggle('show');
            // check if parent element of clicked 'li' has class 'menu'
            if (this.parentElement.classList.contains('menu')) {
                if (this.classList.contains('show')) {
                    this.querySelector('img').src = 'assets/minus.svg';
                } else {
                    this.querySelector('img').src = 'assets/plus.svg';
                }
            } else {
                this.classList.toggle('active');
            }
        }
    });
}

// slider
const desc = document.querySelector('.quote-wraper p');
const pic = document.querySelector('.picture-wraper img');
const nameText = document.querySelector('.picture-wraper p');
const arrowBack = document.querySelector('.arrow-back');
const arrrowForward = document.querySelector('.arrow-forward');
const dots = document.querySelectorAll('.dot');
var current = 0;

window.onload = fetch('./data.json')
    .then(res => res.json())
    .then(data => changeCard(data.people));

arrrowForward.addEventListener('click', function () {
    if (current < 2) current++;
    fetch('./data.json')
        .then(res => res.json())
        .then(data => changeCard(data.people));
});
arrowBack.addEventListener('click', function () {
    if (current > 0) current--;
    fetch('./data.json')
        .then(res => res.json())
        .then(data => changeCard(data.people));
});
function changeCard(people) {
    const { name, quote, image } = people[current];
    desc.innerText = quote;
    pic.src = image;
    nameText.innerHTML = name;
    dots.forEach(dot => dot.classList.remove('big'));
    dots[current].classList.add('big');
    current === 0 ? arrowBack.style.opacity = '0.5' : arrowBack.style.opacity = '1';
    current === people.length - 1 ? arrrowForward.style.opacity = '0.5' : arrrowForward.style.opacity = '1';
}

// tablet menu dropdowns
const burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        this.src = 'assets/close.svg';
    } else this.src = 'assets/menu.svg';
});