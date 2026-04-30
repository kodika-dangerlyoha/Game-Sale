function open_section(title) {
    const open_section = document.querySelector('.header__mobile__section_open');
    if (open_section) { open_section.classList.remove('header__mobile__section_open'); }
    
    document.querySelector(`.header__mobile__${title}`).classList.add('header__mobile__section_open');
}

function close_section() {
    document.querySelector('.header__mobile__section_open').classList.remove('header__mobile__section_open'); 
    document.querySelector('.header__mobile__main').classList.add('header__mobile__section_open');
}