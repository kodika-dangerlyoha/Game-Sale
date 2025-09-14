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
}

function stop_change_game_category() { onmouse = false; }

function change_game_category(category) {
    onmouse = true;
    old_category = category;
    setTimeout(function() {
        if (old_category == category && onmouse) {
            make_game_list_header(category);
            if (document.querySelector('.header__catalog__navs__nav_active')) {
                document.querySelector('.header__catalog__navs__nav_active').classList.remove('header__catalog__navs__nav_active');
            }
            document.querySelector(`#header__catalog__nav-${category}`).classList.add('header__catalog__navs__nav_active');
        }
    }, 1001);
}