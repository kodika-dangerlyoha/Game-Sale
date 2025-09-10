// ----------------------- footer всегда снизу

document.querySelector("#main").style.minHeight = `${window.innerHeight - 331}px`;

// ----------------------- Изменение фона шапки при скролле 
const header_bg = document.querySelector('#header__bg');

let header_bg_visible = false;
window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset;
    if (scrollTop == 0) {
        header_bg.style.opacity = "0";
        header_bg_visible = false;
    }
    else {
        header_bg.style.opacity = "1";
        header_bg_visible = true;
    }
});

// ----------------------- Открытиие меню каталога в шапке 

const open_catalogNavs = () => {
    document.querySelector('.header__buttonCatalog').classList.toggle('header__buttonCatalog_active');
    document.querySelector('.blackoutBlock').classList.toggle('blackoutBlock_active');
    // document.querySelector('.header__catalogNavs').classList.toggle('header__catalogNavs_hidden');
    document.querySelector('.header__catalog').classList.toggle('header__catalog_open');
    document.querySelector('.header').classList.toggle('header_open');
    if (!header_bg_visible) {
        header_bg.style.opacity = "1";
        header_bg_visible = true;
    }
}

// ----------------------- Смена категории игр в offers 

const open_offers_games = (category) => {
    document.querySelector('.offers__grid_active').classList.remove("offers__grid_active");
    document.querySelector(`.offers__grid_${category}`).classList.add("offers__grid_active");

    document.querySelector('.offers__head__nav_active').classList.remove(`offers__head__nav_active`);
    document.querySelector(`#offers_nav-${category}`).classList.add('offers__head__nav_active');
}