set_top_img_paralax(416, 1);

function make_author_games() {
    const list = games.slice(0, 6);
    const list_all = games.slice(0, 12);
    let games_all = "";
    let games_new = "";
    let games_pop = "";

    list.forEach(game => {
        games_new += get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100));
        games_pop += get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100));
    });

    list_all.forEach(game => {
        games_all += get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100));
    });

    document.querySelector('#switch_content-all').innerHTML = games_all;
    document.querySelector('#switch_content-new').innerHTML = games_new;
    document.querySelector('#switch_content-pop').innerHTML = games_pop;
    document.querySelector('#switch_point-all span').innerHTML = list_all.length;
}

make_author_games();