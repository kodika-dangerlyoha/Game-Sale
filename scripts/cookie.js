if (document.cookie == '') {
    document.cookie = '{"basket_list": [], "favorite_list": [], "notification_list": []}';
}

function update_buttons_solo(article) {
    const basket = get_basket_list_id();
    const favorite = get_favorite_list_id();
    if (basket.includes(article.dataset.gameID)) update_button(article, 'basket');
    if (favorite.includes(article.dataset.gameID)) update_button(article, 'favorite');
}

function update_buttons(parent) {
    const basket = get_basket_list_id();
    const favorite = get_favorite_list_id();
    parent.querySelectorAll('article').forEach(article => {
        if (basket.includes( Number(article.dataset.game_id) )) update_button(article, 'basket');
        if (favorite.includes( Number(article.dataset.game_id) )) update_button(article, 'favorite');
    });
}

function update_button(parent, type) {
    const button = parent.querySelector(`button[data-button="${type}"]`);
    if (!button) return
    const first_class = button.classList[0];
    button.classList.add(`${first_class}_active`);
}

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
    console.log(game_in_basket(game_id));
    if (game_in_basket(game_id)) {
        delete_game_basket(game_id, game_title);
        return
    }
    add_game_basket(game_id, game_title);
}

function add_game_basket(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.basket_list.push(game_id);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'add_basket');
    add_notification(answer.messege, answer.status);
    update_header_basket();
}

function delete_game_basket(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.basket_list.splice(cookie.basket_list.indexOf(game_id), 1);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'delete_basket');
    add_notification(answer.messege, answer.status);
    update_header_basket();
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
    console.log(game_in_favorite(game_id));
    if (game_in_favorite(game_id)) {
        delete_game_favorite(game_id, game_title);
        return
    }
    add_game_favorite(game_id, game_title);
}

function add_game_favorite(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.favorite_list.push(game_id);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'add_favorite');
    add_notification(answer.messege, answer.status);
    update_favorite_counter_header();
}

function delete_game_favorite(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.favorite_list.splice(cookie.favorite_list.indexOf(game_id), 1);
    document.cookie = JSON.stringify(cookie);

    const answer = cookie_request(game_title, 'delete_favorite');
    add_notification(answer.messege, answer.status);
    update_favorite_counter_header();
}