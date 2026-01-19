function make_catalog_navs() {
    let list_genres_HC_html = "";
    let list_authors_HC_html = "";
    // let list_authors_HC = document.querySelector('#list_authors_HC').innerHTML;

    genres.forEach(e => {
        list_genres_HC_html += get_genresNav_headerCatalog_html(e);
    })
    document.querySelector('#list_genres_HC').innerHTML = list_genres_HC_html;

    authors.forEach(e => {
        list_authors_HC_html += get_authorNav_headerCatalog_html(e);
    })
    document.querySelector('#list_authors_HC').innerHTML = list_authors_HC_html;
}

make_catalog_navs();

// ----------------------- Открытиие меню каталога в шапке 

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

const open_catalogNavs = () => {
    document.querySelector('.header__buttonCatalog').classList.toggle('header__buttonCatalog_active');
    document.querySelector('.blackoutBlock').classList.toggle('blackoutBlock_active');
    // document.querySelector('.header__catalogNavs').classList.toggle('header__catalogNavs_hidden');
    document.querySelector('.header__catalog').classList.toggle('header__catalog_open');
    document.querySelector('.header').classList.toggle('header_open');

    scrollTop = window.pageYOffset;
    if (document.querySelector('.header_open')) {
        header_bg.style.opacity = "1";
        header_bg_visible = true;
        // document.body.style.overflow = 'hidden';
        // document.body.style.paddingRight = getScrollbarWidth() + 'px';
    }
    else {
        // document.body.style.overflow = '';
        // document.body.style.paddingRight = '';
        if (window.pageYOffset == 0) {
            header_bg.style.opacity = "0";
            header_bg_visible = false;
        }
        else {
            header_bg.style.opacity = "1";
            header_bg_visible = true;
        }
    }
}

// ----------------------- Выбор категории 

let onmouse = false;
let old_category = "";

function get_games_for_header_games(category) {
    let array = games_list.filter(game => 
        game.genres?.includes(category) || game.publisher?.includes(category) || game.developer?.includes(category)
    ).slice(0, 5);
    return array;
}

function make_game_list_header(category) {
    const game_list_header = get_games_for_header_games(category);
    let game_list_html = "";
    game_list_header.forEach(e => { game_list_html += get_horizont_game_headerCatalog_html(e, Math.round((e.oldPrice - e.newPrice) / e.oldPrice * 100)); })
    document.querySelector('#catalog_game_list').innerHTML = game_list_html;

    if (document.querySelector('.header__catalog__navs__nav_active')) {
        document.querySelector('.header__catalog__navs__nav_active').classList.remove('header__catalog__navs__nav_active');
    }
    document.querySelector(`#header__catalog__nav-${category}`).classList.add('header__catalog__navs__nav_active');

    setTimeout(function() {
        document.querySelectorAll('.gameH_headerCatalog').forEach(e => { e.classList.add('gameH_open') });
    }, 50)
}

function stop_change_game_category() { onmouse = false; }

function change_game_category(category) {
    onmouse = true;
    if (old_category != category) {
        old_category = category;
        setTimeout(function() {
            if (old_category == category && onmouse) {
                make_game_list_header(category);
            }
        }, 601);
    }
}

make_game_list_header('shooter');

// document.querySelectorAll('.header__catalog__navs__genres__list__genre').forEach(e => {
//     e.addEventListener("mouseover", () => change_game_category('shooter'))
// });