// ----------------------- footer всегда снизу

document.querySelector("#main").style.minHeight = `${window.innerHeight - 331}px`;

// ----------------------- Смена категории игр в offers 

const open_offers_games = (category) => {
    document.querySelector('.offers__grid_active').classList.remove("offers__grid_active");
    document.querySelector(`.offers__grid_${category}`).classList.add("offers__grid_active");

    document.querySelector('.offers__head__nav_active').classList.remove(`offers__head__nav_active`);
    document.querySelector(`#offers_nav-${category}`).classList.add('offers__head__nav_active');
}