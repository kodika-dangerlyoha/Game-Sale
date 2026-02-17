function update_favorite_counter_header() {
    let cookie = JSON.parse(document.cookie);
    let favorite_list = cookie.favorite_list;
    // let length_list = favorite_list.length;
    update_counter(favorite_list.length, 'favorite');
    // const counter = document.querySelector('#header_favorite_counter');
    // // const number = counter.querySelector('.header__nav__button__counter__number');

    // console.log(length_list);
    
    // if (length_list === 0) {
    //     if (!document.querySelector('#header_favorite_counter.header__nav__button__counter_hidden')) {
    //         counter.classList.add('header__nav__button__counter_hidden');
    //     }
    // }
    // else if (length_list > 9) {
    //     if (document.querySelector('#header_favorite_counter.header__nav__button__counter_hidden')) {
    //         counter.classList.remove('header__nav__button__counter_hidden');
    //     }
    //     counter.innerHTML = '<div class="header__nav__button__counter__number txt">9+</div>';
    // }
    // else {
    //     if (document.querySelector('#header_favorite_counter.header__nav__button__counter_hidden')) {
    //         counter.classList.remove('header__nav__button__counter_hidden');
    //     }
    //     counter.innerHTML = `<div class="header__nav__button__counter__number txt">${length_list}</div>`;
    // }
}

function update_counter(value, title) {
    const counter = document.querySelector(`#header_${title}_counter`);
    const counter_hidden = document.querySelector(`#header_${title}_counter.header__nav__button__counter_hidden`);
    // const number = counter.querySelector('.header__nav__button__counter__number');
    
    if (value === 0) {
        if (!counter_hidden) {
            counter.classList.add('header__nav__button__counter_hidden');
        }
    }
    else if (value > 9) {
        if (counter_hidden) {
            counter.classList.remove('header__nav__button__counter_hidden');
        }
        counter.innerHTML = '<div class="header__nav__button__counter__number txt">9+</div>';
    }
    else {
        if (counter_hidden) {
            counter.classList.remove('header__nav__button__counter_hidden');
        }
        counter.innerHTML = `<div class="header__nav__button__counter__number txt">${value}</div>`;
    }
}

// function update_basket_button() {
//     const header_basket_button = document.querySelector('#header_basket_button');
//     let count_game = 0;
    
//     let cookie = JSON.parse(document.cookie);
//     let basket_list = cookie.basket_list;

//     count_game = basket_list.length;

//     if (count_game === 0) {
//         header_basket_button.querySelector('#header_basket_price').innerHTML = "0 ₽";
//         header_basket_button.querySelector('#header_basket_counter').innerHTML = "0 Игр";
//         header_basket_button.classList.add('header__nav__buttonBasket_closed');
//     }
//     else {
//         let price = 0;

//         let basket_list_infos = [];
//         games.forEach(info => {
//             if (contains(basket_list, info.id)) {
//                 console.log(basket_list_infos[info.id]);
//                 console.log(info);
//                 basket_list_infos[info.id] = info;
//             }
//         });

//         basket_list_infos.forEach(game => {
//             price += game.newPrice;
//         });

//         header_basket_button.querySelector('#header_basket_price').innerHTML = `${price} ₽`;
//         header_basket_button.querySelector('#header_basket_counter').innerHTML = `${count_game} Игр`;
//         if (header_basket_button.classList.contains('header__nav__buttonBasket_closed')) {
//             header_basket_button.classList.remove('header__nav__buttonBasket_closed');
//         }
//     }
// }

function update_header_basket() {
    let cookie = JSON.parse(document.cookie);
    let basket_list = cookie.basket_list;

    let count_game = basket_list.length;
    const header_basket_button = document.querySelector('#header_basket_button');

    let games_html = "";
    let basket_list_infos = [];
    let price = 0;

    games.forEach(info => {
        if (contains(basket_list, info.id)) {
            basket_list_infos[info.id] = info;
        }
    });

    basket_list_infos.forEach(game => {
        games_html += get_header_basket_game(game);
        price += game.newPrice;
    })

    document.querySelector('#header_basket_grid').innerHTML = games_html;

    if (count_game === 0) {
        document.querySelector('#header_basket_grid').innerHTML = `<div class="header__basket__grid__nothing flex-center txt">
                                                                        <div>Нет игр в корзине</div>
                                                                    </div>`;
        header_basket_button.querySelector('#header_basket_price').innerHTML = "0 ₽";
        header_basket_button.querySelector('#header_basket_counter').innerHTML = "0 Игр";
        header_basket_button.classList.add('header__nav__buttonBasket_closed');
    }

    else {
        header_basket_button.querySelector('#header_basket_price').innerHTML = `${price} ₽`;
        header_basket_button.querySelector('#header_basket_counter').innerHTML = `${count_game} Игр`;
        if (header_basket_button.classList.contains('header__nav__buttonBasket_closed')) {
            header_basket_button.classList.remove('header__nav__buttonBasket_closed');
        }
    }
}

function open_header_basket() {
    close_header_blocks();
    // if (document.querySelector('.header__notification_active')) {
    //     const notification = document.querySelector('.header__notification');
    //     notification.classList.remove('header__notification_active');
    //     document.getElementById('header_button_notification').classList.remove('header__nav__button_active');
    //     setTimeout(() => notification.style.display = "none", 160);
    // }
    // document.querySelector('#temporary_notification').style.right = '330px';
    // document.querySelector('#temporary_notification').style.display = 'none';
    const header_basket = document.querySelector('.header__basket');
    header_basket.style.display = "block";
    document.querySelector('#header_basket_button').classList.add('header__nav__buttonBasket_active');
    setTimeout(() => header_basket.classList.add('header__basket_active'), 10);
}
function close_header_basket() {
    if (!document.querySelector('.header__basket_active')) return;

    const header_basket = document.querySelector('.header__basket');
    header_basket.classList.remove('header__basket_active');
    document.querySelector('#header_basket_button').classList.remove('header__nav__buttonBasket_active');
    setTimeout(() => header_basket.style.display = "none", 160);
    // document.querySelector('#temporary_notification').style.right = '15px';
    // document.querySelector('#temporary_notification').style.display = 'block';
    open_temp_notification();
}
function toggle_header_basket() {
    if (document.querySelector('.header__basket').classList.contains('header__basket_active')) {
        close_header_basket();
    }
    else {
        open_header_basket();
    }
}

function open_auth_block() {
    close_header_blocks();

    const header_authBlock = document.querySelector('.header__authBlock');
    header_authBlock.style.display = 'block';
    document.querySelector('#header_profile_button').classList.add('header__nav__button_active');
    setTimeout(() => {
        header_authBlock.classList.remove('header__authBlock_hidden');
    }, 10);
}
function close_auth_block() {
    if (document.querySelector('.header__authBlock_hidden')) return;

    const header_authBlock = document.querySelector('.header__authBlock');
    header_authBlock.classList.add('header__authBlock_hidden');
    document.querySelector('#header_profile_button').classList.remove('header__nav__button_active');
    setTimeout(() => {
        header_authBlock.style.display = 'none';
    }, 200);
    open_temp_notification();
}
function toggle_auth_block() {
    if (document.querySelector('.header__authBlock_hidden')) {
        open_auth_block();
        return;
    }
    close_auth_block();
}

function close_temp_notification() {
    document.querySelector('#temporary_notification').style.display = 'none';
}
function open_temp_notification() {
    document.querySelector('#temporary_notification').style.display = 'block';
}

function toggle_notifications() {
    if (!document.querySelector('.header__notification_active')) {
        open_notifications();
        return;
    }
    close_notifications();
}
function open_notifications() {
    close_header_blocks();
    const notification = document.querySelector('.header__notification');
    // const notification_button = document.getElementById('header_button_notification');
    
    notification.style.display = "block";
    document.getElementById('header_button_notification').classList.add('header__nav__button_active');
    setTimeout(() => notification.classList.add('header__notification_active'), 10);
}
function close_notifications() {
    if (!document.querySelector('.header__notification_active')) return;

    const notification = document.querySelector('.header__notification');
    // const notification_button = document.getElementById('header_button_notification');

    notification.classList.remove('header__notification_active');
    document.getElementById('header_button_notification').classList.remove('header__nav__button_active');
    open_temp_notification();
    setTimeout(() => notification.style.display = "none", 160);
}

function close_header_blocks() {
    close_auth_block();
    close_header_basket();
    close_notifications();
    close_temp_notification();
}

update_header_basket();
update_favorite_counter_header();



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

// ----------------------- Поиск get post 

const search_input = document.querySelector('#search-input');
const search_button = document.querySelector('#search-button');

function search_to_catalog(value) {
    // Создание параметров
    const params = new URLSearchParams();
    params.append('title', `${value}`);

    // Создание полного URL
    const base_url = 'catalog.html';
    const url_w_params = `${base_url}?${params.toString()}`;
    window.location.href = url_w_params;
}

search_input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter' && evt.target.value !== '') {
        search_to_catalog(evt.target.value);
    }
});

search_button.addEventListener('click', () => search_to_catalog(search_input.value));


// ----------------------- Открытиие меню каталога в шапке 

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

const open_catalogNavs = () => {
    const header = document.querySelector('.header');
    document.querySelector('.header__buttonCatalog').classList.toggle('header__buttonCatalog_active');
    document.querySelector('.blackoutBlock').classList.toggle('blackoutBlock_active');
    // document.querySelector('.header__catalogNavs').classList.toggle('header__catalogNavs_hidden');
    document.querySelector('.header__catalog').classList.toggle('header__catalog_open');
    header.classList.toggle('header_open');

    scrollTop = window.pageYOffset;
    if (document.querySelector('.header_open')) {
        header_bg.style.opacity = "1";
        header_bg_visible = true;
        const w = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${w}px`;
        header.style.paddingRight = `${w + 15}px`;
    }
    else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        header.style.paddingRight = '15px';
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