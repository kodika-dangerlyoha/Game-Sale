// import {get_horizont_game_html} from './HTMLelements.js';
let basket_game_list = get_basket_game_list();
let games_list = getGames();
let editions = get_editions();

function getGames() {
    return games;
}

// -----------------------

function getGames_for_salesHits() {
    return games.slice(0, 6);
}

function getGames_similar() {
    return games.slice(0, 6);
}

function get_game_banner() {
    return games[3];
}

function get_editions() {
    return games[0].editions;
}

function get_categories_game() {
    return games[0].categories;
}

function get_basket_game_list() {
    return basketProducts;
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

function makeSimilar_gameCard(game) {
    const games_section_head = document.querySelector('#switch_section-game .switch__head');

    if (game.series) {
        games_section_head.innerHTML = get_games_section_head_series();
        document.querySelector('#switch_section-game #switch_content-similar').innerHTML += games_list.reduce((summ_game, game) => summ_game + get_horizont_game_html(game), "");
        document.querySelector('#switch_section-game #switch_content-series').innerHTML += games_list.reduce((summ_game, game) => summ_game + get_horizont_game_html(game), "");
        return
    }
    games_section_head.classList = "heading heading_center";
    games_section_head.innerHTML = get_games_section_head_noSeries();
    document.querySelector('#switch_section-game #switch_content-similar').innerHTML += games_list.reduce((summ_game, game) => summ_game + get_horizont_game_html(game), "");
}

// function makeCatalog_catalog() {
//     let div = document.querySelector('#catalog');
//     div.innerHTML = "";

//     function addGame() {
//         let grid = document.createElement('div');
        
//         getGames().forEach(game => {
//                 let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
//                 let blockSiteHTML = ` <div class="catalog__grid__game__banner">
//                                             <img src="${game.imgW}" alt="">
//                                             <div class="catalog__grid__game__banner__discount">
//                                                 <div class="catalog__grid__game__banner__discount__inner txt">${discount}%</div>
//                                             </div>
//                                         </div>
//                                         <div class="catalog__grid__game__info">
//                                             <div class="catalog__grid__game__info__buttons">
//                                                 <div class="catalog__grid__game__info__buttons__button">
//                                                     <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_blue absolute-zero"></div>
//                                                     <img src="img/icons/basket64.png" alt="">
//                                                 </div>
//                                                 <div class="catalog__grid__game__info__buttons__button">
//                                                     <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_red absolute-zero"></div>
//                                                     <img src="img/icons/like64.png" alt="">
//                                                 </div>
//                                             </div>
//                                             <div class="catalog__grid__game__info__name txt">${game.name}</div>
//                                             <div class="catalog__grid__game__info__price txt">${game.newPrice} ₽</div>
//                                         </div>`;
                                        
//                 let div = document.createElement('div');
//                 div.classList.add("catalog__grid__game");
//                 div.innerHTML = blockSiteHTML;
//                 grid.append(div);
//         });
//         return grid.innerHTML;
//     }

//     let blockSiteHTML = `<div class="catalog__grid">
//                             ${addGame()}
//                         </div>`;

//     div.innerHTML = blockSiteHTML;
// }

function make_additions(game) {
    make_editions();
    make_dlc(game);
}

function make_editions() {
    let inner_html = "";
    editions.forEach(el => {
        inner_html += get_edition_game_html(el);
    });

    document.querySelector('#additions-editions .additions__side__grid').innerHTML = inner_html;

    // document.querySelector('#additions-editions .additions__side__grid').innerHTML += editions.reduce(
    //     (summ_game, edition) => summ_game + get_edition_game_html(edition, Math.round((edition.oldPrice - edition.newPrice) / edition.oldPrice * 100)), "");
    document.getElementsByClassName('edition')[0].classList.add('edition_active');
}

function make_dlc(game) {
    let inner_html = "";

    game.dlc.forEach(el => {
        inner_html += get_dlc_html(el);
    });

    document.querySelector('#additions-dlc .additions__side__grid').innerHTML = inner_html;

    // document.querySelector('#additions-dlc .additions__side__grid').innerHTML += game.dlc.reduce(
    //     (summ_game, dlc) => summ_game + get_dlc_html(dlc), "");
}

function make_regions_list(selected, str) {
    let regions_list = document.querySelector('#regions_list');
    regions_list.innerHTML = '';
    regions.forEach(e => {
        if (e.region_id != selected && e.full_title.toLowerCase().includes(str.toLowerCase())) {
            regions_list.innerHTML += get_region_html(e);
        }
    });
}

function make_desscription() {
    document.querySelector('#description').innerHTML += games[0].description.replace(/<br>/g, '');
    document.querySelector('#systemRequirements').innerHTML += games[0].systemRequirements;
}

function make_mainInfo(game) {
    document.querySelector('#game_img_right').src = game.imgH;
    document.querySelector('#game_title').innerHTML = game.name;
    // document.querySelector('#game_title_top').innerHTML = game.name;
    document.querySelector('#game_smallDescription').innerHTML = game.small_description;
    document.querySelector('#game_date').innerHTML = game.date;
    document.querySelector('#game_developer').innerHTML = game.developer;
    document.querySelector('#game_publisher').innerHTML = game.publisher;

    let categories_html = "";
    game.categories.forEach(category => {
        categories_html += get_categories_game_html(category);
    });
    document.querySelector('#game_categories').innerHTML = categories_html;
}

function make_game_card_info(game) {
    // let gameList = "";
    // let categories_list = "";

    document.querySelector('#miniGameCard').classList.remove('miniGameCard_loading');

    document.getElementById('img_miniGameCard').src = game.imgH;
    document.getElementById('img_miniGameCard').alt = game.name;
    document.getElementById('price_game').innerHTML = `${game.newPrice}₽ <span>${game.oldPrice} ₽</span>`;
    document.getElementById('title_game').innerHTML = game.name;

    document.querySelector('#top_img_paralax_block img').src = game.bigBanner;
    // document.getElementById('treiler').src = games[0].treilerSrc;
    // document.getElementById('visual_main_screenshot').style.backgroundImage = `url('${game.imgH}')`;
    // document.getElementById('game_img').alt = games[0].name;

    // get_categories_game().forEach(category => {
    //     categories_list += get_categories_game_html(category);
    // })
    
    // gameList += get_info_game_html(
    //     game, 
    //     Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100),
    //     categories_list
    // )

    // document.querySelector('#game_info').innerHTML = gameList;

    make_mainInfo(game);
    make_additions(game);
    make_desscription();
    makeSimilar_gameCard(game);

    document.querySelectorAll('.loadingContent').forEach(elem => {
        if (elem.classList[1].search('_loading')) {
            elem.classList.remove(elem.classList[1]);
        }
        elem.classList.add('open_content');
        elem.classList.remove('loadingContent');
    });

    document.querySelectorAll('.loadingBlock').forEach(elem => elem.remove('loadingBlock'));

    setTimeout(() => {
        let class_open_content = document.getElementsByClassName('open_content');
        while (class_open_content.length) class_open_content[0].classList.remove("open_content");
    }, 800);
}

function makeSalesHits_index() {
    let gameList = "";
    
    getGames_for_salesHits().forEach(game => {
        gameList += get_vertical_game_html(game);
    });

    document.querySelector('#salesHits #salesHits_content').innerHTML = gameList;
}

function makeBanner_index(game_info) {
    let discount = Math.round((game_info.oldPrice - game_info.newPrice) / game_info.oldPrice * 100);

    document.getElementById('bannerSecond').src = game_info.link;
    document.getElementById('banners_second_img').src = game_info.bigBanner;
    document.getElementById('banner_second_discount').innerText = discount + "%";
    document.getElementById('banner_second_price').innerText = game_info.newPrice + " ₽";
    document.getElementById('banner_second_title').innerText = game_info.name;
}

function makeCarousel_index(n) {
    let gameList = "";
    
        gameList += get_carousel_game_html(
            n,
            games[n], 
            Math.round((games[n].oldPrice - games[n].newPrice) / games[n].oldPrice * 100)
        );

    document.querySelector('#banner').innerHTML = gameList;
}

function make_index() {
    // makeCarousel_index(0);
    makeSalesHits_index();
    makeOffers_index();
    // makeBanner_index(games[3]);

    document.querySelectorAll('.loadingContent').forEach(elem => {
        if (elem.classList[1].search('_loading')) {
            elem.classList.remove(elem.classList[1]);
        }
        elem.classList.remove('loadingContent');
        elem.remove;
    })
}