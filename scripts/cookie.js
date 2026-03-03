if (document.cookie == '') {
    document.cookie = '{"basket_list": [], "favorite_list": [], "notification_list": []}';
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

function game_in_basket(game_id) {
    get_basket_list().forEach(id => {
        if (id === game_id) return true;
    });
    return false;
}

function toggle_game_basket(game_id, game_title) {
    if (game_in_basket(game_id)) {
        delete_game_basket(game_id, game_title);
        return
    }
    add_game_basket(game_id, game_title);
}

function basket_request(game_title, type) {
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

// function add_game_basket(game_id, game_name) {
//     let cookie = JSON.parse(document.cookie);
//     let basket_list = cookie.basket_list;

//     if (basket_list.find(info => info == game_id) === undefined) {
//         cookie.basket_list.push(game_id);
//         document.cookie = JSON.stringify(cookie);
//         const answer = basket_request(game_id, game_name, 'add_basket');
//         add_notification(answer.messege, answer.status);
//         update_header_basket();
//         // updateBasket();
//     }
//     else {
//         delete_game_in_basket(game_id, game_name);
//     }
// }

function add_game_basket(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
    cookie.basket_list.push(game_id);
    document.cookie = JSON.stringify(cookie);

    const answer = basket_request(game_title, 'add_basket');
    add_notification(answer.messege, answer.status);

    update_header_basket();
}

function delete_game_basket(game_id, game_title) {
    let cookie = JSON.parse(document.cookie);
}

function delete_game_in_basket(game_id, game_name) {
    let cookie = JSON.parse(document.cookie);
    let basket_list = cookie.basket_list;

    if (basket_list.find(info => info == game_id) !== undefined) {
        basket_list = basket_list.filter(info => {
            return info !== game_id;
        })
        cookie.basket_list = basket_list;
        document.cookie = JSON.stringify(cookie);
        const answer = basket_request(game_id, game_name, 'delete_basket');
        add_notification(answer.messege, answer.status);
        update_header_basket();
        // updateBasket();
    }
}

function add_game_favorite(game_id, game_name) {
    let cookie = JSON.parse(document.cookie);
    let favorite_list = cookie.favorite_list;

    if (favorite_list.find(info => info == game_id) === undefined) {
        cookie.favorite_list.push(game_id);
        document.cookie = JSON.stringify(cookie);
        const answer = add_game_basket_request(game_id, game_name, 'add_favorite');
        add_notification(answer.messege, answer.status);
        // updateBasket();
    }
    else {
        delete_game_in_favorite(game_id, game_name);
    }
    update_favorite_counter_header();
}

function delete_game_in_favorite(game_id, game_name) {
    let cookie = JSON.parse(document.cookie);
    let favorite_list = cookie.favorite_list;

    if (favorite_list.find(info => info == game_id) !== undefined) {
        favorite_list = favorite_list.filter(function(info) {
            return info !== game_id;
        })
        cookie.favorite_list = favorite_list;
        document.cookie = JSON.stringify(cookie);
        const answer = add_game_basket_request(game_id, game_name, 'delete_favorite');
        add_notification(answer.messege, answer.status);
        // updateBasket();
    }
}