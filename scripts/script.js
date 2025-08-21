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
    document.querySelector('.blackoutBlock').classList.toggle('blackoutBlock_active');
    document.querySelector('.header__catalogNavs').classList.toggle('header__catalogNavs_hidden');
}