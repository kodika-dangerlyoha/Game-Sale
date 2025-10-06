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

function makeFavorite_favorite() {
    if (favorite_list.length > 0) {
        document.getElementById('favorite_nothing').remove();
        document.querySelector('#favorite #favorite_grid').innerHTML += favorite_list.reduce((summ_game, game) => summ_game + get_vertical_game_html(
            game,  
            Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
        ), "");
    }
}

makeFavorite_favorite();