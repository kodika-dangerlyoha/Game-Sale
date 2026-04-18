function getGames_for_salesHits() {
    return games.slice(0, 5);
}

function getGames_similar() {
    return games.slice(0, 6);
}

function get_game_banner() {
    return games[3];
}

make_index();
init_lazyImg(document.querySelectorAll('img[data-lazy_src]'));
// update_basket_button();