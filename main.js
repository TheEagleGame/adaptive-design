const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((el) => el.addEventListener('click', () => {
    const setActiveIcon = () => {
        if (el.classList.value.includes('catalog')) {
            return 'catalog'
        }
        if (el.classList.value.includes('beauty')) {
            return 'beauty'
        }
        if (el.classList.value.includes('healthy')) {
            return 'healthy'
        }
        if (el.classList.value.includes('adventure')) {
            return 'adventure'
        }
        if (el.classList.value.includes('auto')) {
            return 'auto'
        }
    }
    let activeIcon = setActiveIcon()
    navItems.forEach(el => {
        if (el.classList.value.includes(activeIcon)) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')
        }

    })
}))


const headerSearch = document.querySelector('.header-search')
const searchIcon = document.querySelector('.header-search__icon')
const searchText = document.querySelector('.header-search__text')
window.addEventListener('scroll', () => {
    if (window.scrollY && window.outerWidth < 1440) {
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
    if (!menuOpen) {
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


