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