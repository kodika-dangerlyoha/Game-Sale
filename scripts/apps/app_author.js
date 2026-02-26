set_top_img_paralax(416, 1);

function make_author_games() {
    const list = games.slice(0, 6);
    const list_all = games.slice(0, 12);
    let games_all = "";
    let games_new = "";
    let games_pop = "";
    let series_html = "";

    list.forEach(game => {
        games_new += get_horizont_game_html(game);
        games_pop += get_horizont_game_html(game);
    });

    list_all.forEach(game => {
        games_all += get_horizont_game_html(game);
    });

    series.forEach(el => {
        series_html += get_series_card_html(el);
    });

    document.querySelector('#switch_content-all').innerHTML = games_all;
    document.querySelector('#switch_content-new').innerHTML = games_new;
    document.querySelector('#switch_content-pop').innerHTML = games_pop;
    document.querySelector('#switch_point-all span').innerHTML = list_all.length;
    document.querySelector('#grid_series').innerHTML = series_html;
}

make_author_games();

const ss = new Switch_Section;
ss.init(document.querySelector('#switch_section-author'));