if (document.cookie == '') {
    document.cookie = '{"basket_list": [], "favorite_list": [], "notification_list": []}';
}

// - update basket and favorite 

// ~ Кнопки 

function update_buttons(parent) {
    if (!parent) { console.log('parent invalid'); return }
    update_buttons_type(parent, 'basket');
    update_buttons_type(parent, 'favorite');
}

const actions_get_list_id = {
    'basket': get_basket_list_id,
    'favorite': get_favorite_list_id
}

function update_buttons_type(parent, type) {
    parent.querySelectorAll(`button[data-button=${type}]`).forEach(button => {
        update_button( button, actions_get_list_id[type]().includes(Number(button.dataset.game_id)) );
    });
}

function update_button(button, include) {
    const first_class = button.classList[0];

    if (include) { button.classList.add(`${first_class}_active`); }
    else {
        if ( button.classList.contains(`${first_class}_active`) ) { button.classList.remove(`${first_class}_active`); }
    }
}

// ~ Метки 

function update_marks(parent) {
    if (!parent) { console.log('parent invalid'); return }
    update_marks_basket(parent);
    update_marks_favorite(parent);
}

function update_marks_basket(parent) {
    parent.querySelectorAll('article').forEach(article => {
        update_mark( article, 'basket', get_basket_list_id().includes(Number(article.dataset.game_id)) );
    });
}

function update_marks_favorite(parent) {
    parent.querySelectorAll('article').forEach(article => {
        update_mark( article, 'favorite', get_favorite_list_id().includes(Number(article.dataset.game_id)) );
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
    // update_buttons_basket(document);
    update_buttons_type(document, 'basket');
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

    // const answer = cookie_request(game_title, 'add_favorite');
    // add_notification(answer.messege, answer.status);
    update_favorite_counter_header();
    // update_buttons_favorite(document);
    update_buttons_type(document, 'favorite');
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