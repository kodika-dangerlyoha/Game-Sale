set_top_img_paralax(416);

function toggle_series_about() {
    const about = document.querySelector('.series__about');
    const button = about.querySelector('.series__about__buttonBlock button');
    if (document.querySelector('.series__about_hidden')) {
        about.classList.remove('series__about_hidden');
        button.innerHTML = '-';
        return
    }
    about.classList.add('series__about_hidden');
    button.innerHTML = '+';
}