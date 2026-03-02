let favorite_list = get_favorite_list_request();

function get_favorite_list_request() {
    const favorite_list = JSON.parse(document.cookie).favorite_list;

    let favorite_list_infos = [];
    games.forEach(info => {
        if (contains(favorite_list, info.id)) {
            favorite_list_infos[info.id] = info;
        }
    })
    return favorite_list_infos;
}

function update_favorite_basket() {
    let inner_html = '';

    const basket = get_basket_list();
    let full_price = 0;
    let discount = 0;
    let total_price = 0;

    basket.forEach(game => {
        inner_html += get_small_game(game);
        full_price += game.oldPrice;
        total_price += game.newPrice;
    });

    document.querySelector('#full_price').innerHTML = `${full_price} ₽`;
    document.querySelector('#total_price').innerHTML = `${total_price} ₽`;
    document.querySelector('#discount').innerHTML = `${Math.round((full_price - total_price) / full_price * 100)}%`;
    document.querySelector('#basket').innerHTML = inner_html;
}

function make_favorite_games() {
    document.querySelector('#favorite_grid').innerHTML += favorite_list.reduce((summ_game, game) => summ_game + get_lineGames_html(game, 'favorite'), "");
}

function make_favorite() {
    if (favorite_list.length > 0) {
        document.querySelector('.favorite_empty').classList.remove('favorite_empty');
        make_favorite_games();
        update_favorite_basket();
    }
}

make_favorite();