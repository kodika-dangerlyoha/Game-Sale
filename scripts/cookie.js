if (document.cookie == '') {
    document.cookie = '{"basket_list": [], "favorite_list": [], "notification_list": []}';
}

// - update basket and favorite 

// function add_event_upd_buttons(buttons, parent, type) {
//     const actions = {
//         'all': (button) => button.addEventListener('click', () => update_buttons(parent)),
//         'solo': (button) => button.addEventListener('click', () => update_buttons_solo(parent)),
//     }

//     buttons.forEach(button => {
//         actions[type](button);
//     });
// }

// function add_event_upd_marks(buttons, parent, type) {
//     const actions = {
//         'all': (button) => button.addEventListener('click', () => update_buttons(parent)),
//         'solo': (button) => button.addEventListener('click', () => update_buttons_solo(parent)),
//     }

//     buttons.forEach(button => {
//         actions[type](button);
//     });
// }

// function update_buttons_solo(article) {
//     const basket = get_basket_list_id();
//     const favorite = get_favorite_list_id();
//     if (basket.includes(article.dataset.game_id)) update_button(article, 'basket');
//     if (favorite.includes(article.dataset.game_id)) update_button(article, 'favorite');
// }

// ~ Кнопки 

const actions_upd_buttons = {
    'basket': (parent) => update_buttons_basket(parent),
    'favorite': (parent) => update_buttons_favorite(parent)
}

function update_buttons(parent) {
    if (!parent) { console.log('parent invalid'); return }
    // actions_upd_buttons['basket'](parent);
    // actions_upd_buttons['favorite'](parent);
    update_buttons_basket(parent);
    update_buttons_favorite(parent);
}

function update_buttons_basket(parent) {
    const basket = get_basket_list_id();
    parent.querySelectorAll('article').forEach(article => {
        update_button( article, 'basket', basket.includes(Number(article.dataset.game_id)) );
    });
}

function update_buttons_favorite(parent) {
    const favorite = get_favorite_list_id();
    parent.querySelectorAll('article').forEach(article => {
        update_button( article, 'favorite', favorite.includes(Number(article.dataset.game_id)) );
    });
}

function update_button(parent, type, include) {
    const button = parent.querySelector(`button[data-button="${type}"]`);
    if (!button) return
    const first_class = button.classList[0];

    if (include) { button.classList.add(`${first_class}_active`); }
    else {
        if (button.classList.contains(`${first_class}_active`)) { button.classList.remove(`${first_class}_active`); }
    }
}

// ~ Метки 

const actions_upd_marks = {
    'basket': (parent) => update_marks_basket(parent),
    'favorite': (parent) => update_marks_favorite(parent)
}

function update_marks(parent) {
    if (!parent) { console.log('parent invalid'); return }
    // actions_upd_marks[type](parent);
    update_marks_basket(parent);
    update_marks_favorite(parent);
}

function update_marks_basket(parent) {
    const basket = get_basket_list_id();
    parent.querySelectorAll('article').forEach(article => {
        update_mark( article, 'basket', basket.includes(Number(article.dataset.game_id)) );
    });
}

function update_marks_favorite(parent) {
    const favorite = get_favorite_list_id();
    parent.querySelectorAll('article').forEach(article => {
        update_mark( article, 'favorite', favorite.includes(Number(article.dataset.game_id)) );
    });
}

function update_mark(parent, type, include) {
    const mark = parent.querySelector(`div[data-mark="${type}"]`);
    if (!mark) return;

    if (include) { 
        if (mark.classList.contains('gameH__banner__info__point_hidden')) { mark.classList.remove('gameH__banner__info__point_hidden'); }
    }
    else { mark.classList.add('gameH__banner__info__point_hidden') }
}

// - - - - - - - - -                                                   

function cookie_request(game_title, type) {
    if (type == 'add_basket') {
        return {
            'status': true,
            'messege': `Игра <span>${game_title}</span> добавлена в корзину`
        }
    }
    else if (type == 'delete_basket') {
        return {
            'status': true,
            'messege': `Игра <span>${game_title}</span> удалена из корзины`
        }
    }
    else if (type == '') {
        return {
            'status': false,
            'messege': `Ошибка`
        }
    }
    else if (type == 'delete_favorite') {
        return {
            'status': true,
            'messege': `Игра <span>${game_title}</span> удалена из избранного`
        }
    }
    else if (type == 'add_favorite') {
        return {
            'status': true,
            'messege': `Игра <span>${game_title}</span> добавлена в избранное`
        }
    }
}

function get_basket_list() {
    const basket_list = JSON.parse(document.cookie).basket_list;

    let basket_list_infos = [];
    games.forEach(info => {
        if (contains(basket_list, info.id)) {
            basket_list_infos[info.id] = info;
        }
    })
    return basket_list_infos;
}

function get_basket_list_id() {
    return JSON.parse(document.cookie).basket_list;
}

function game_in_basket(game_id) {
    return get_basket_list_id().includes(game_id);
}

function toggle_game_basket(game_id, game_title) {
    if (game_in_basket(game_id)) { delete_game_basket(game_id, game_title); }
    else { add_game_basket(game_id, game_title); }
    
    update_header_basket(LO_pathname);
    update_buttons_basket(document);
    update_marks_basket(document);
}

function add_game_basket(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.basket_list.push(game_id);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'add_basket');
    add_notification(answer.messege, answer.status);
}

function delete_game_basket(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.basket_list.splice(cookie.basket_list.indexOf(game_id), 1);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'delete_basket');
    add_notification(answer.messege, answer.status);
}

function get_favorite_list() {
    const favorite_list = JSON.parse(document.cookie).favorite_list;

    let favorite_list_infos = [];
    games.forEach(info => {
        if (contains(favorite_list, info.id)) {
            favorite_list_infos[info.id] = info;
        }
    })
    return favorite_list_infos;
}

function get_favorite_list_id() {
    return JSON.parse(document.cookie).favorite_list;
}

function game_in_favorite(game_id) {
    return get_favorite_list_id().includes(game_id);
}

function toggle_game_favorite(game_id, game_title) {
    if (game_in_favorite(game_id)) { delete_game_favorite(game_id, game_title); }
    else { add_game_favorite(game_id, game_title); }

    const answer = cookie_request(game_title, 'add_favorite');
    add_notification(answer.messege, answer.status);
    update_favorite_counter_header();
    update_buttons_favorite(document);
    update_marks_favorite(document);
}

function add_game_favorite(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.favorite_list.push(game_id);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'add_favorite');
    add_notification(answer.messege, answer.status);
}

function delete_game_favorite(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.favorite_list.splice(cookie.favorite_list.indexOf(game_id), 1);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'delete_favorite');
    add_notification(answer.messege, answer.status);
}