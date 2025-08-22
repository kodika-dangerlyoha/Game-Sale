// ----------------------- Изменение фона шапки при скролле 
const header_bg = document.querySelector('#header__bg');

window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset;
    if (scrollTop == 0) {
        header_bg.style.opacity = "0";
    }
    else {
        header_bg.style.opacity = "1";
    }
});

const open_catalogNavs = () => {
    document.querySelector('.header__buttonCatalog').classList.toggle('header__buttonCatalog_active');
    document.querySelector('.blackoutBlock').classList.toggle('blackoutBlock_active');
    document.querySelector('.header__catalogNavs').classList.toggle('header__catalogNavs_hidden');
}

const open_offers_games = (category) => {
    document.querySelector('.offers__grid_active').classList.remove("offers__grid_active");
    document.querySelector(`.offers__grid_${category}`).classList.add("offers__grid_active");

    document.querySelector('.offers__head__nav_active').classList.remove(`offers__head__nav_active`);
    document.querySelector(`#offers_nav-${category}`).classList.add('offers__head__nav_active');
}