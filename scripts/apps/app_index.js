// import { Lazy_img } from '../modules/modules.js';
// const LI = new Lazy_img();

function getGames_for_salesHits() {
    return games.slice(0, 5);
}

function getGames_similar() {
    return games.slice(0, 6);
}

function get_game_banner() {
    return games[3];
}

function makeSalesHits_index() {
    let gameList = "";
    
    getGames_for_salesHits().forEach(game => {
        gameList += get_vertical_game_html(game);
    });

    document.querySelector('#salesHits #salesHits_content').innerHTML = gameList;
}

function makeOffers_index() {
    // let gameList_new = "";
    let gameList_expected = "";
    let gameList_ourChoice = "";

    document.querySelector('#offers_grid_new').innerHTML += games_list.filter(({status}) => status == "new").reduce(
        (summ_game, game) => summ_game + get_horizont_game_html(game), "");
    document.querySelector('#offers_grid_expected').innerHTML += games_list.filter(({status}) => status == "expected").reduce(
        (summ_game, game) => summ_game + get_horizont_game_html(game), "");
    document.querySelector('#offers_grid_ourChoice').innerHTML += games_list.filter(({status}) => status == "ourChoice").reduce(
        (summ_game, game) => summ_game + get_horizont_game_html(game), "");
}

function make_index() {
    // makeCarousel_index(0);
    makeSalesHits_index();
    makeOffers_index();
    // makeBanner_index(games[3]);
    update_buttons(document);
    update_marks(document);

    document.querySelectorAll('.loadingContent').forEach(elem => {
        if (elem.classList[1].search('_loading')) {
            elem.classList.remove(elem.classList[1]);
        }
        elem.classList.remove('loadingContent');
        elem.remove;
    })
}

make_index();
init_lazyImg(document);
// init_lazyImg(document);