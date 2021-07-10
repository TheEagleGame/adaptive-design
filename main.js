const navItems = document.querySelectorAll('.nav__item');
navItems.forEach( (el,index) => el.addEventListener('click', () => {
    navItems.forEach(el => el.classList.remove('active'))
    if (el.classList.value === 'nav__item nav__item_tablet') {
        navItems[index - 5].classList.add('active')
        navItems[index - 5 - 5].classList.add('active')
    }
    if (el.classList.value === 'nav__item nav__item_desktop') {
        navItems[index + 5].classList.add('active')
        navItems[index - 5].classList.add('active')
    }
    if (el.classList.value === 'nav__item nav__item_mobile') {
        navItems[index + 5].classList.add('active')
        navItems[index + 5 + 5].classList.add('active')
    }
    el.classList.add('active')
}))
console.log(navItems)


const headerSearch = document.querySelector('.header-search')
const searchIcon = document.querySelector('.header-search__icon')
const searchText = document.querySelector('.header-search__text')
window.addEventListener('scroll', () => {
    if (window.scrollY) {
        headerSearch.classList.add('header-search_small')
        searchIcon.classList.add('header-search__icon_none')
        searchText.classList.add('header-search__text_scale')
    } else {
        headerSearch.classList.remove('header-search_small')
        searchIcon.classList.remove('header-search__icon_none')
        searchText.classList.remove('header-search__text_scale')
    }
})

const navIcon = document.querySelector('.nav-common__icon');
const navContainer = document.querySelector('.nav-wrapper');
const menuTablet = document.querySelector('.nav-tablet')
let menuOpen = false;
navIcon.addEventListener('click', () => {
    if(!menuOpen) {
        navContainer.classList.add('open');
        navIcon.classList.add('active');
        menuTablet.classList.add('change-order');
        menuOpen = true;
    } else {
        navContainer.classList.remove('open');
        navIcon.classList.remove('active');
        menuTablet.classList.remove('change-order');
        menuOpen = false;
    }
});


