set_top_img_paralax(416, 0.6);

function toggle_series_about() {
    const about = document.querySelector('.series__about');
    const button = about.querySelector('.series__about__buttonBlock button');
    if (document.querySelector('.series__about_hidden')) {
        about.classList.remove('series__about_hidden');
        button.innerHTML = '-';
        return
    }
    about.classList.add('series__about_hidden');
    button.innerHTML = '+';
}

function make_series() {
    let inner_html = "";
    const games_list = games.slice(0, 5);
    games_list.forEach(game => {
        inner_html += get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100));
    });

    document.querySelector('#series_grid').innerHTML = inner_html;
}

make_series();