// import {get_horizont_game_html} from './HTMLelements.js';
let basket_game_list = get_basket_game_list();
let games_list = getGames();
let editions = get_editions();

function getGames() {
    return games;
}

// -----------------------

function getGames_for_salesHits() {
    return games.slice(0, 5);
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

    // gameList += basket_game_list.reduce((summ_game, game) => summ_game + get_basket_game_html(game), "");
    // gameList += basket_game_list.reduce((summ_game, game) => summ_game + get_basket_game_html(game), "");
    // gameList += basket_game_list.reduce((summ_game, game) => summ_game + get_basket_game_html(game), "");
    
    // games_list.forEach(game => {
    //     gameList_new += get_horizont_game_html(
    //         game, 
    //         Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
    //     )
    // });
    // games_list.forEach(game => {
    //     gameList_expected += get_horizont_game_html(
    //         game, 
    //         Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
    //     )
    // });
    // games_list.forEach(game => {
    //     gameList_ourChoice += get_horizont_game_html(
    //         game, 
    //         Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
    //     )
    // });

    // records.filter(({gender}) => gender === 'BOYS').reduce((sum, record) => sum + record.value)

    document.querySelector('#offers #offers_grid_new').innerHTML += games_list.filter(({status}) => status == "new").reduce(
        (summ_game, game) => summ_game + get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)), "");
    document.querySelector('#offers #offers_grid_expected').innerHTML += games_list.filter(({status}) => status == "expected").reduce(
        (summ_game, game) => summ_game + get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)), "");;
    document.querySelector('#offers #offers_grid_ourChoice').innerHTML += games_list.filter(({status}) => status == "ourChoice").reduce(
        (summ_game, game) => summ_game + get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)), "");;
}

function makeSimilar_gameCard() {
    document.querySelector('#similar #content').innerHTML += games_list.reduce((summ_game, game) => summ_game + get_horizont_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)), "");
}

function makeCatalog_catalog() {
    let div = document.querySelector('#catalog');
    div.innerHTML = "";

    function addGame() {
        let grid = document.createElement('div');
        
        getGames().forEach(game => {
                let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
                let blockSiteHTML = ` <div class="catalog__grid__game__banner">
                                            <img src="${game.imgW}" alt="">
                                            <div class="catalog__grid__game__banner__discount">
                                                <div class="catalog__grid__game__banner__discount__inner txt">${discount}%</div>
                                            </div>
                                        </div>
                                        <div class="catalog__grid__game__info">
                                            <div class="catalog__grid__game__info__buttons">
                                                <div class="catalog__grid__game__info__buttons__button">
                                                    <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_blue absolute-zero"></div>
                                                    <img src="img/icons/basket64.png" alt="">
                                                </div>
                                                <div class="catalog__grid__game__info__buttons__button">
                                                    <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_red absolute-zero"></div>
                                                    <img src="img/icons/like64.png" alt="">
                                                </div>
                                            </div>
                                            <div class="catalog__grid__game__info__name txt">${game.name}</div>
                                            <div class="catalog__grid__game__info__price txt">${game.newPrice} ₽</div>
                                        </div>`;
                                        
                let div = document.createElement('div');
                div.classList.add("catalog__grid__game");
                div.innerHTML = blockSiteHTML;
                grid.append(div);
        });
        return grid.innerHTML;
    }

    let blockSiteHTML = `<div class="catalog__grid">
                            ${addGame()}
                        </div>`;

    div.innerHTML = blockSiteHTML;
}

function make_editions() {
    // let editionList = "";
    
    // get_editions().forEach(edition => {
    //     editionList += get_edition_game_html(
    //         edition, 
    //         Math.round((edition.oldPrice - edition.newPrice) / edition.oldPrice * 100)
    //     )
    // });

    document.querySelector('#edition #edition_grid').innerHTML += editions.reduce((summ_game, edition) => summ_game + get_edition_game_html(edition, Math.round((edition.oldPrice - edition.newPrice) / edition.oldPrice * 100)), "");
    document.getElementsByClassName('editions__grid__edition')[0].classList.add('editions__grid__edition_active');
    document.getElementsByClassName('editions__grid__edition__info__percent')[0].classList.add('editions__grid__edition__percent_active');
}

function make_desscription() {
    document.querySelector('#description').innerHTML += games[0].description.replace(/<br>/g, '');
    document.querySelector('#systemRequirements').innerHTML += games[0].systemRequirements;
}

function make_game_card_info() {
    let gameList = "";
    let categories_list = "";

    document.querySelector('#miniGameCard').classList.remove('miniGameCard_loading');

    document.getElementById('img_miniGameCard').src = games[0].imgH;
    document.getElementById('img_miniGameCard').alt = games[0].name;
    document.getElementById('price_game').innerHTML = `${games[0].newPrice}₽ <span>${games[0].oldPrice} ₽</span>`;
    document.getElementById('title_game').innerHTML = games[0].name;

    document.getElementById('game_banner').src = games[0].bigBanner;
    document.getElementById('game_banner').alt = games[0].name;
    document.getElementById('treiler').src = games[0].treilerSrc;
    document.getElementById('game_img').src = games[0].imgH;
    document.getElementById('game_img').alt = games[0].name;

    get_categories_game().forEach(category => {
        categories_list += get_categories_game_html(category);
    })
    
    gameList += get_info_game_html(
        games[0], 
        Math.round((games[0].oldPrice - games[0].newPrice) / games[0].oldPrice * 100),
        categories_list
    )

    document.querySelector('#game_info').innerHTML = gameList;

    makeSimilar_gameCard();
    make_editions();
    make_desscription();

    document.querySelectorAll('.loadingContent').forEach(elem => {
        if (elem.classList[1].search('_loading')) {
            elem.classList.remove(elem.classList[1]);
        }
        elem.classList.add('open_content');
        elem.classList.remove('loadingContent');
    })

    document.querySelectorAll('.loadingBlock').forEach(elem => elem.remove('loadingBlock'));

    setTimeout(() => {
        let class_open_content = document.getElementsByClassName('open_content');
        while (class_open_content.length) class_open_content[0].classList.remove("open_content");
    }, 800);
}

function makeSalesHits_index() {
    let gameList = "";
    
    getGames_for_salesHits().forEach(game => {
        gameList += get_vertical_game_html(
            game, 
            Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
        )
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