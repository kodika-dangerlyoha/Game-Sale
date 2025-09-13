let onmouse = false;
let old_category = "";

function get_games_for_header_games(genre) {
    let array = games_list.filter(game => game.genres?.includes(genre)).slice(0, 5);
    return array;
}

function make_game_list_header(genre) {
    const game_list_header = get_games_for_header_games(genre);
    let game_list_html = "";
    game_list_header.forEach(e => {
        game_list_html += get_horizont_game_html(e, Math.round((e.oldPrice - e.newPrice) / e.oldPrice * 100));
    })
    document.querySelector('#catalog_game_list').innerHTML = game_list_html;
}

function stop_change_game_category() {
    onmouse = false;
}

function change_game_category(category) {
    onmouse = true;
    old_category = category;
    setTimeout(function() {
        if (old_category == category && onmouse) {
            make_game_list_header(category);
            if (document.querySelector('.header__catalog__navs__genres__list__genre_active')) {
                document.querySelector('.header__catalog__navs__genres__list__genre_active').classList.remove('header__catalog__navs__genres__list__genre_active');
            }
            document.querySelector(`#header__catalog__navs__genre-${category}`).classList.add('header__catalog__navs__genres__list__genre_active');
        }
    }, 1001);
}