if (document.cookie == '') {
    document.cookie = '{"basket_list": [], "favorite_list": [], "notification_list": []}';
}

function cl(elem) {
    console.log(elem);
}

cl(document.cookie);

function add_game_basket_request(game_id, game_name, type) {
    if (type == 'add_basket') {
        return {
            'status': true,
            'messege': `Игра <span>${game_name}</span> добавлена в корзину`
        }
    }
    else if (type == 'delete_basket') {
        return {
            'status': true,
            'messege': `Игра <span>${game_name}</span> удалена из корзины`
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
            'messege': `Игра <span>${game_name}</span> удалена из избранного`
        }
    }
    else if (type == 'add_favorite') {
        return {
            'status': true,
            'messege': `Игра <span>${game_name}</span> добавлена в избранное`
        }
    }
}

function add_game_basket(game_id, game_name) {
    let cookie = JSON.parse(document.cookie);
    let basket_list = cookie.basket_list;

    if (basket_list.find(info => info == game_id) === undefined) {
        cookie.basket_list.push(game_id);
        document.cookie = JSON.stringify(cookie);
        const answer = add_game_basket_request(game_id, game_name, 'add_basket');
        add_notification(answer.messege, answer.status);
        update_header_basket();
        // updateBasket();
    }
    else {
        delete_game_in_basket(game_id, game_name);
    }
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
        const answer = add_game_basket_request(game_id, game_name, 'delete_basket');
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



// let notification_list = get_notification_list_request();

// function get_notification_list_request() {
//     const notification_list = JSON.parse(document.cookie).notification_list;

//     return notification_list.reduce((summ_notification, notification_info) => summ_notification + get_notification_html(notification_info.type, notification_info.value), "");;
// }

// const notification_types = {
//     "error": 'Произошла ошибка',
//     "nothing": 'Нет новый уведомлений',
//     "game": 'Игра <span>${game_name}</span> добавлена в корзину',
// }

// function create_new_notification() {
//     make_notification()
// }

// function set_notifacation_request(type, value) {
//     let cookie = JSON.parse(document.cookie);
//     let notifacation_info = {
//         'type': type,
//         'value': value,
//     }
//     cookie.notification_list.push(notifacation_info);
//     document.cookie = JSON.stringify(cookie);
//     console.log(document.cookie);

//     notification_list = get_notification_list_request();
//     make_notification();
// }

// function make_notification() {
//     if (notification_list == "") {
//         notification_list = `<div class="header__notification__grid__notification notification_nothing">
//                                 <div class="header__notification__grid__notification__point txt">
//                                     <div class="header__notification__grid__notification__point__smile">:(</div>
//                                 </div>
//                                 <div class="header__notification__grid__notification__text txt">Нет новый уведомлений</div>
//                             </div>`
//     }
//     document.querySelector('#grid_notification').innerHTML = notification_list;
// }

// make_notification()