// -------- game card -------- 

const get_horizont_game_html = (game, discount) => {
    let preOrder_html = "";
    let dls_html = "";

    if (game.preOrder != "") {
        preOrder_html = `<div class="gameH__banner__info__point gameH__banner__info__point_more gameH__banner__info__point_preOrder"><span>Предзаказ</span>${game.preOrder}</div>`;
    }

    if (game.dls) {
        dls_html = `<div class="gameH__banner__info__point gameH__banner__info__point_more">DLC</div>`;
    }

    return `<article class="gameH game_${game.id}">
                <a href = "${game.link}" class="gameH__banner">
                    <div class="gameH__banner__imgBlock"><img src="${game.imgH}" alt="${game.name}"></div>
                    <div class="gameH__banner__videoBlock">
                        <video src="${game.treilerSrc}" autoplay loop muted>
                    </div>
                    <div class="gameH__banner__info txt">
                        <div class="gameH__banner__info__left">
                            ${preOrder_html}
                        </div>
                        <div class="gameH__banner__info__right">
                            ${dls_html}
                            <div class="gameH__banner__info__point gameH__banner__info__point_discount">${discount}%</div>
                        </div>
                    </div>
                </a>
                <div class="gameH__info">
                    <div class="gameH__info__left">
                        <div class="gameH__info__name txt">${game.name}</div>
                    </div>
                    <div class="gameH__info__right">
                        <div class="gameH__info__price txt">${game.newPrice}₽</div>
                        <div class="gameH__info__buttons">
                            <div class="gameH__info__buttons__button _buttonBasket">
                                <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_blue absolute-zero"></div>
                                <img src="img/icons/main/basket64.png" alt="">
                            </div>
                            <div class="gameH__info__buttons__button _buttonFavorite">
                                <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_red absolute-zero"></div>
                                <img src="img/icons/main/like64.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </article>`
};

const get_horizont_game_headerCatalog_html = (game, discount) => {
    let preOrder_html = "";
    let dls_html = "";

    if (game.preOrder != "") {
        preOrder_html = `<div class="gameH__banner__info__point gameH__banner__info__point_more gameH__banner__info__point_preOrder"><span>Предзаказ</span>${game.preOrder}</div>`;
    }

    if (game.dls) {
        dls_html = `<div class="gameH__banner__info__point gameH__banner__info__point_more">DLC</div>`;
    }

    return `<article class = "gameH gameH_headerCatalog">
                <a href = "${game.link}" class="gameH__banner">
                    <div class="gameH__banner__imgBlock"><img src="${game.imgH}" alt="${game.name}"></div>
                    <div class="gameH__banner__videoBlock">
                        <video src="${game.treilerSrc}" autoplay loop muted>
                    </div>
                    <div class="gameH__banner__info txt">
                        <div class="gameH__banner__info__left">
                            ${preOrder_html}
                        </div>
                        <div class="gameH__banner__info__right">
                            ${dls_html}
                            <div class="gameH__banner__info__point gameH__banner__info__point_discount">${discount}%</div>
                        </div>
                    </div>
                </a>
                <div class="gameH__info">
                    <div class="gameH__info__left">
                        <div class="gameH__info__name txt">${game.name}</div>
                    </div>
                    <div class="gameH__info__right">
                        <div class="gameH__info__price txt">${game.newPrice}₽</div>
                        <div class="gameH__info__buttons">
                            <div class="gameH__info__buttons__button _buttonBasket">
                                <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_blue absolute-zero"></div>
                                <img src="img/icons/main/basket64.png" alt="">
                            </div>
                            <div class="gameH__info__buttons__button _buttonFavorite">
                                <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_red absolute-zero"></div>
                                <img src="img/icons/main/like64.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </article>`
};

const get_vertical_game_html = (game, discount) => {
    return `<article class="gameV game_${game.id}">
                <a href = "${game.link}" class="gameV__banner">
                    <div class="gameV__banner__glass"></div>
                    <img src="${game.imgW}" alt="${game.name}">
                    <div class="gameV__banner__discount txt">${discount}%</div>
                </a>
                <div class="gameV__info">
                    <div class="gameV__info__left">
                        <div class="gameV__info__name txt">${game.name}</div>
                    </div>
                    <div class="gameV__info__right">
                        <div class="gameV__info__price txt">${game.newPrice}₽</div>
                        <div class="gameV__info__buttons">
                            <div class="gameV__info__buttons__button _buttonBasket" onclick="add_game_basket(${game.id}, '${game.name}')">
                                <div class="gameV__info__buttons__button__forHover gameV__info__buttons__button__forHover_blue absolute-zero"></div>
                                <img src="img/icons/main/basket64.png" alt="">
                            </div>
                            <div class="gameV__info__buttons__button _buttonFavorite" onclick="add_game_favorite(${game.id}, '${game.name}')">
                                <div class="gameV__info__buttons__button__forHover gameV__info__buttons__button__forHover_red absolute-zero"></div>
                                <img src="img/icons/main/like64.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </article>`
}

// -------- series card -------- 

const get_series_card_html = (series) => {
    return `<article class="seriesCard game_${series.id}">
                <a href = "${series.link}" class="seriesCard__banner">
                    <div class="seriesCard__banner__imgBlock"><img src="${series.imgH}" alt="${series.name}"></div>
                </a>
                <div class="seriesCard__info">
                    <div class="seriesCard__info__left">
                        <div class="seriesCard__info__name txt">${series.name}</div>
                    </div>
                    <div class="seriesCard__info__right">
                        <div class="seriesCard__info__countGames txt"><span> Игр в серии:</span> ${series.games.length}</div>
                        <div class="seriesCard__info__buttons">
                            <div class="seriesCard__info__buttons__button _buttonFavorite">
                                <div class="seriesCard__info__buttons__button__forHover seriesCard__info__buttons__button__forHover_red absolute-zero"></div>
                                <img src="img/icons/main/like64.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </article>`
};

// --------  --------

const get_banner_html = (count, game_info, carousel_banner_list, discount) => {
    return `<div class = "carousel__banner" order = ${count} game_id = '${game_info.id}' style = "${count === 0 ? 'margin-left: 0' : ''};
                                                                                                    z-index: ${carousel_banner_list.length - count + 1};
                                                                                                    transform: scale(${1 - count * 0.05});
                                                                                                    filter: blur(${count}px);
                                                                                                    }">
                <div class="carousel__banner__imgBlock">
                <div class="carousel__banner__imgBlock__glass"></div>
                    <img src="${game_info.bigBanner}" alt="">
                </div>
                <div class="carousel__banner__interaction">
                    <div class="carousel__banner__interaction__info">
                        <a href="${game_info.link}" class="carousel__banner__interaction__info__link" style = "${count === 0 ? 'display: block' : 'display: none'}"></a>
                        <div class="carousel__banner__interaction__info__title txt">${game_info.name}</div>
                        <div class="carousel__banner__interaction__info__shopInfo">
                            <div class="carousel__banner__interaction__info__shopInfo__buttons">
                                <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_basket">
                                    <img src="img/icons/main/basket32.png" alt="">
                                </div>
                                <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_favorite">
                                    <img src="img/icons/main/heart32.png" alt="">
                                </div>
                            </div>
                            <div class="carousel__banner__interaction__info__shopInfo__priceTag">
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices">
                                    <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__oldPrice txt">${game_info.oldPrice} ₽</div>
                                    <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__newPrice txt">${game_info.newPrice} ₽</div>
                                </div>
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__discount flex-center txt">${discount}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

const get_banner_bg_html = (count, game_info) => {
    return `<div class="carousel__gridBG__bg ${count === 0 ? 'carousel__gridBG__bg_active' : ''}" order = "${count}">
                <img src="${game_info.bigBanner_blur}" alt="">
            </div>`
}

const get_carousel_game_html = (n, game, discount) => {
    return `<div class="banner__imgBlock absolute-zero">
                <img src="${game.bigBanner}" alt="">
            </div>
            <div class="banner__content">
                <div class="banner__content__info">
                    <div class="banner__content__info__gameName txt">${game.name}</div>
                    <div class="banner__content__info__priceBlock">
                        <div class="banner__content__info__priceBlock__buttonBasket flex-center">
                            <div class="banner__content__info__priceBlock__buttonBasket__forHover absolute-zero"></div>
                            <div class="banner__content__info__priceBlock__buttonBasket__text txt">В КОРЗИНУ</div>
                        </div>
                        <div class="banner__content__info__priceBlock__price txt">${game.newPrice}₽</div>
                        <div class="banner__content__info__priceBlock__percent flex-center txt">${discount}%</div>
                    </div>
                </div>
                <div class="banner__content__arrows">
                    <div class="banner__content__arrows__arrow banner__content__arrows__arrow_left flex-center" onclick = "makeCarousel_index(${n - 1})"><img src="img/icons/main/arrRight32.png" alt=""></div>
                    <div class="banner__content__arrows__arrow banner__content__arrows__arrow_right flex-center" onclick = "makeCarousel_index(${n + 1})"><img src="img/icons/main/arrRight32.png" alt=""></div>
                </div>
            </div>`
}

const get_banner_game_html = (game, discount) => {
    return `<div class="bannerSecond__imgBlock absolute-zero">
                <img src="${game.bigBanner}" alt="">
            </div>
            <div class="bannerSecond__info">
                <div class="bannerSecond__info__gameName txt">${game.name}</div>
                <div class="bannerSecond__info__priceBlock">
                    <div class="bannerSecond__info__priceBlock__buttonBasket flex-center">
                        <div class="bannerSecond__info__priceBlock__buttonBasket__forHover absolute-zero"></div>
                        <div class="bannerSecond__info__priceBlock__buttonBasket__text txt">В корзину</div>
                    </div>
                    <div class="bannerSecond__info__priceBlock__price txt">${game.newPrice}₽</div>
                    <div class="bannerSecond__info__priceBlock__percent flex-center txt">${discount}%</div>
                </div>
            </div>`
}

// -------- Game Page --------

const get_edition_game_html = (edition, discount) => {
    return `<a href="${edition.link}" class="edition">
                <div class="edition__imgBlock"><img src="${edition.img}" alt="${edition.title}"></div>
                <div class="edition__info">
                    <div class="edition__info__title txt">${edition.title}</div>
                    <div class="edition__info__price txt"><span>${edition.newPrice} ₽</span><div class="edition__info__price__percent">${discount}%</div></div>
                </div>
            </a>`
}

const get_dlc_html = (dlc) => {
    return `<div class="dlc txt">
                <div class="dlc__title">${dlc.title}</div>
                <div class="dlc__right">
                    <div class="dlc__right__prices">
                        <div class="dlc__right__prices__old">${dlc.oldPrice} ₽</div>
                        <div class="dlc__right__prices__new">${dlc.newPrice} ₽</div>
                    </div>
                    <div class="dlc__right__buttons">
                        <button type="button" class="dlc__right__buttons__button dlc__right__buttons__button_fav txt" onclick="" title="В избранное">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 19.7501C11.8012 19.7499 11.6105 19.6708 11.47 19.5301L4.70001 12.7401C3.78387 11.8054 3.27072 10.5488 3.27072 9.24006C3.27072 7.9313 3.78387 6.6747 4.70001 5.74006C5.6283 4.81186 6.88727 4.29042 8.20001 4.29042C9.51274 4.29042 10.7717 4.81186 11.7 5.74006L12 6.00006L12.28 5.72006C12.739 5.25606 13.2857 4.88801 13.8883 4.63736C14.4909 4.3867 15.1374 4.25845 15.79 4.26006C16.442 4.25714 17.088 4.38382 17.6906 4.63274C18.2931 4.88167 18.8402 5.24786 19.3 5.71006C20.2161 6.6447 20.7293 7.9013 20.7293 9.21006C20.7293 10.5188 20.2161 11.7754 19.3 12.7101L12.53 19.5001C12.463 19.5752 12.3815 19.636 12.2904 19.679C12.1994 19.7219 12.1006 19.7461 12 19.7501ZM8.21001 5.75006C7.75584 5.74675 7.30551 5.83342 6.885 6.00505C6.4645 6.17669 6.08215 6.42989 5.76001 6.75006C5.11088 7.40221 4.74646 8.28491 4.74646 9.20506C4.74646 10.1252 5.11088 11.0079 5.76001 11.6601L12 17.9401L18.23 11.6801C18.5526 11.3578 18.8086 10.9751 18.9832 10.5538C19.1578 10.1326 19.2477 9.68107 19.2477 9.22506C19.2477 8.76905 19.1578 8.31752 18.9832 7.89627C18.8086 7.47503 18.5526 7.09233 18.23 6.77006C17.9104 6.44929 17.5299 6.1956 17.1109 6.02387C16.6919 5.85215 16.2428 5.76586 15.79 5.77006C15.3358 5.76675 14.8855 5.85342 14.465 6.02505C14.0445 6.19669 13.6621 6.44989 13.34 6.77006L12.53 7.58006C12.3869 7.71581 12.1972 7.79149 12 7.79149C11.8028 7.79149 11.6131 7.71581 11.47 7.58006L10.66 6.77006C10.3395 6.44628 9.95791 6.18939 9.53733 6.01429C9.11675 5.83919 8.66558 5.74937 8.21001 5.75006Z" fill="#fff"/>
                            </svg>
                        </button>
                        <button type="button" class="dlc__right__buttons__button dlc__right__buttons__button_basket txt" onclick="" title="В корзину">
                            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-74.000000, -239.000000)">
                                        <g transform="translate(74.000000, 239.000000)">
                                            <rect x="0" y="0" width="24" height="24"></rect>
                                            <path d="M2.5,3.5 L4.57364,3.5 C4.81929,3.5 5.02855,3.67844 5.06736,3.921 L6.73058,14.3158 C6.88582,15.286 7.72287,15.9998 8.70546,15.9998 L17.3957,15.9998 C18.3331,15.9998 19.1447,15.3487 19.3481,14.4337 L20.7296,8.21674 C20.8684,7.59222 20.3932,6.9998 19.7534,6.9998 L5.83997,6.9998" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                            <circle  stroke="#fff" stroke-width="2" stroke-linecap="round" cx="9.5" cy="21" r="1"></circle>
                                            <circle stroke="#fff" stroke-width="2" stroke-linecap="round" cx="16.5" cy="21" r="1"></circle>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button type="button" class="dlc__right__buttons__button dlc__right__buttons__button_buy txt" onclick="">Купить</button>
                    </div>
                </div>
            </div>`
}

const get_info_game_html = (game, discount, categoriesHTML) => {
    return `<div>
                <div class="mainInfo__info__category">
                    ${categoriesHTML}
                </div>
                <div class="mainInfo__info__about">
                    <div class="mainInfo__info__about__point txt">
                        <div class="mainInfo__info__about__point__key">Дата выхода:</div>
                        <div class="mainInfo__info__about__point__value">15 авг. 2013 г.</div>
                    </div>
                    <div class="mainInfo__info__about__point txt">
                        <div class="mainInfo__info__about__point__key">Разработчик:</div>
                        <a href="#" class="mainInfo__info__about__point__value mainInfo__info__about__point__value_link txt">Gaijin Entertainment</a>
                    </div>
                    <div class="mainInfo__info__about__point txt">
                        <div class="mainInfo__info__about__point__key">Издатель:</div>
                        <a href="#" class="mainInfo__info__about__point__value mainInfo__info__about__point__value_link txt">Gaijin Network Ltd</a>
                    </div>
                </div>
            </div>`
}

const get_categories_game_html = (category) => {
    return `<a href="${category.link}" class="mainInfo__info__category__point txt">${category.name}</a>`
}

const get_basket_game_html = (game) => {
    return `<div class="basketContainer__gameList__games__game" gameId="${game.id}">
                <div class="basketContainer__gameList__games__game__forHover">
                    <div class="basketContainer__gameList__games__game__forHover__bg basketContainer__gameList__games__game__forHover__bg_blue" bgBlueId="${game.id}"></div>
                    <div class="basketContainer__gameList__games__game__forHover__bg basketContainer__gameList__games__game__forHover__bg_red" bgRedId="${game.id}"></div>
                </div>
                <div class="basketContainer__gameList__games__game__left">
                    <div class="basketContainer__gameList__games__game__left__imgBlock">
                        <img src="${game.imgH}" alt="${game.name}">
                    </div>
                    <div class="basketContainer__gameList__games__game__left__nameBlock">
                        <div class="basketContainer__gameList__games__game__left__nameBlock__name">

                            <a href="${game.link}" class="basketContainer__gameList__games__game__left__nameBlock__name__text txt">${game.name}</a>
                        </div>
                        <a href="${game.steamLink}" class="basketContainer__gameList__games__game__left__nameBlock__linkPlatform txt">
                            <span>Игра в Steam</span>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
                                <path style="fill:none;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;" d="M22,10h-9.5
                                    C9.468,10,7,12.468,7,15.5v20c0,3.032,2.468,5.5,5.5,5.5h20c3.032,0,5.5-2.468,5.5-5.5V26"/>
                                <line style="fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="24" y1="24" x2="41" y2="7"/>
                                <polyline style="fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
                                    28,7 41,7 41,20 "/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="basketContainer__gameList__games__game__right">
                    <div class="basketContainer__gameList__games__game__right__price txt">${game.newPrice} ₽<span>${game.oldPrice} ₽</span></div>
                    <div class="basketContainer__gameList__games__game__right__closeBlock" onclick="delete_game_basket(${game.id}, '${game.name}')" onmouseover="hover_close_basket(true, ${game.id})" onmouseout="hover_close_basket(false, ${game.id})">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>`
}

const get_games_section_head_series = () => {
    return `<div class="switch__head__point switch__head__point_active" data-title="similar" id="switch_point-similar" onclick="switch_section('similar', 'similar__grid_active')">
                <div class="switch__head__point__text txt">Похожие</div>
            </div>
            <div class="switch__head__point" data-title="series" id="switch_point-series" onclick="switch_section('series', 'similar__grid_active')">
                <div class="switch__head__point__text txt">Игры серии</div>
            </div>`;
}

const get_games_section_head_noSeries = () => {
    return `<h2 class="txt">Похожие</h2>`;
}

// -------------------

const get_header_basket_game = (game) => {
    return `<div class="header__basket__grid__game" gameId="${game.id}">
                <div class="header__basket__grid__game__top">
                    <a href="${game.link}" class="header__basket__grid__game__title txt">${game.name}</a>
                    <div type="button" class="header__basket__grid__game__delete flex-center" onclick="delete_game_basket(${game.id}, '${game.name}')">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="header__basket__grid__game__bottom">
                    <div class="header__basket__grid__game__prices txt">
                        <div class="header__basket__grid__game__prices__new">${game.newPrice} ₽</div>
                        <div class="header__basket__grid__game__prices__old">${game.oldPrice} ₽</div>
                    </div>
                    <a href="${game.steamLink}" class="header__basket__grid__game__bottom__link txt">
                        <span>Игра в Steam</span>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
                            <path style="fill:none;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;" d="M22,10h-9.5
                                C9.468,10,7,12.468,7,15.5v20c0,3.032,2.468,5.5,5.5,5.5h20c3.032,0,5.5-2.468,5.5-5.5V26"/>
                            <line style="fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="24" y1="24" x2="41" y2="7"/>
                            <polyline style="fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
                                28,7 41,7 41,20 "/>
                        </svg>
                    </a>
                </div>
            </div>`
}

const get_carousel_banner_html = (game, discount, cout) => {
    return `<div class="carousel__banner carousel__banner_${cout}">
                <div class="carousel__banner__imgBlock">
                    <img src="${game.bigBanner}" alt="">
                </div>
                <div class="carousel__banner__interaction">
                    <div class="carousel__banner__interaction__info">
                        <a href="${game.link}" class="carousel__banner__interaction__info__link"></a>
                        <div class="carousel__banner__interaction__info__title txt">${game.name}</div>
                        <div class="carousel__banner__interaction__info__shopInfo">
                            <div class="carousel__banner__interaction__info__shopInfo__buttons">
                                <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_basket">
                                    <img src="img/icons/main/basket32.png" alt="">
                                </div>
                                <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_favorite">
                                    <img src="img/icons/main/heart32.png" alt="">
                                </div>
                            </div>
                            <div class="carousel__banner__interaction__info__shopInfo__priceTag">
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices">
                                    <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__newPrice txt">${game.newPrice} ₽</div>
                                    <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__oldPrice txt">${game.oldPrice} ₽</div>
                                </div>
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__discount flex-center txt">${discount}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

const get_carousel_bg_html = (game, cout) => {
    return `<div class="carousel__bg carousel__bg_${cout}">
                <img src="${game.bigBanner}" alt="">
            </div>`
}

const get_favorite_game_html = (game, discount) => {
    return `<div class="catalog__grid__game profileContaier__info__grid__game">
                <a href="${game.link}" class="catalog__grid__game__banner profileContaier__info__grid__game__banner">
                    <img src="${game.imgW}" alt="">
                    <div class="profileContaier__info__grid__game__banner__discount">
                        <div class="profileContaier__info__grid__game__banner__discount__inner txt">${discount}%</div>
                    </div>
                </a>
                <div class="profileContaier__info__grid__game__info">
                    <div class="profileContaier__info__grid__game__info__buttons">
                        <div class="profileContaier__info__grid__game__info__buttons__button" onclick="add_game_basket(${game.id}, '${game.name}')">
                            <div class="profileContaier__info__grid__game__info__buttons__button__forHover profileContaier__info__grid__game__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/basket64.png" alt="">
                        </div>
                        <div class="profileContaier__info__grid__game__info__buttons__button" onclick="add_game_favorite(${game.id}, '${game.name}')">
                            <div class="profileContaier__info__grid__game__info__buttons__button__forHover profileContaier__info__grid__game__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/like64.png" alt="">
                        </div>
                    </div>
                    <div class="profileContaier__info__grid__game__info__name txt">${game.name}</div>
                    <div class="profileContaier__info__grid__game__info__price txt">${game.newPrice} ₽</div>
                </div>
            </div>`
}

const get_region_html = (region) => {
    return `<div class="settings__conf__regionInput__regions__inner__list__region" onclick="change_region('${region.full_title}', '${region.region_id}')">${region.full_title}</div>`
}


// ----------------------- notification ---------------------------------

// const get_notification_add_game_html = (game_name) => {
//     return `<div class="header__notification__grid__notification notification_addGame">
//                 <div class="header__notification__grid__notification__point txt">
//                     <div class="header__notification__grid__notification__point__circle"></div>
//                 </div>
//                 <div class="header__notification__grid__notification__text txt">Игра <span>${game_name}</span> добавлена в корзину</div>
//             </div>`
// }

// const get_notification_nothing_html = () => {
//     return `<div class="header__notification__grid__notification notification_nothing">
//                 <div class="header__notification__grid__notification__point txt">
//                     <div class="header__notification__grid__notification__point__circle header__notification__grid__notification__point__circle_nothing"></div>
//                 </div>
//                 <div class="header__notification__grid__notification__text txt">Нет новый уведомлений</div>
//             </div>`
// }

// const get_notification_error_html = () => {
//     return `<div class="header__notification__grid__notification notification_error">
//                 <div class="header__notification__grid__notification__point txt">
//                     <div class="header__notification__grid__notification__point__circle header__notification__grid__notification__point__circle_error"></div>
//                 </div>
//                 <div class="header__notification__grid__notification__text txt">Произошла ошибка</div>
//             </div>`
// }

const get_temp_notification_html = (status, message, id) => {
    return `<div class="header__notification_temporary__grid__notification notification_${status}" id="${id}">
                <div class="header__notification_temporary__grid__notification__point txt">
                    <div class="header__notification_temporary__grid__notification__point__circle header__notification_temporary__grid__notification__point__circle_${status}"></div>
                </div>
                <div class="header__notification_temporary__grid__notification__text txt">${message}</div>
            </div>`
}

const get_notification_html = (status, message, viewed, id) => {
    const class_view = viewed ? '' : 'header__notification__grid__notification_new';
    return `<div class="header__notification__grid__notification notification_${status} ${class_view}" data-id="${id}">
                <div class="header__notification__grid__notification__point txt">
                    <div class="header__notification__grid__notification__point__circle header__notification__grid__notification__point__circle_${status}"></div>
                </div>
                <div class="header__notification__grid__notification__text txt">${message}</div>
            </div>`
}

// -------- input list > point in list html -------- 

const get_inputList_point = (id, value, type_function, i) => {
    let checkBlock_html = type_function == 'checkbox' ? '<div class="inputList__list__body__points__point__checkBlock"></div>' : '';

    return `<div class="inputList__list__body__points__point inputList_point-${i}" onclick="change_value_list('${id}', '${value}', '${type_function}', ${i})">
                <span class="inputList__list__body__points__point__value">${value}</span>
                ${checkBlock_html}
            </div>`
}

const get_inputList_point_number = (values, i) => {
    // console.log(values);
    return `<div class="inputList__list__body__points__point inputList_point-${i}" onclick="change_number_value_list(${values.min}, ${values.max})">
                <span class="inputList__list__body__points__point__value">${values.min} - ${values.max} ₽</span>
            </div>`
}

// -------- header catalog navs -------- 

const get_genresNav_headerCatalog_html = (genre) => {
    return `<div class="header__catalog__navs__genres__list__genre header__catalog__navs__nav" id="header__catalog__nav-${genre.id}">
                <div class="header__catalog__navs__genres__list__genre__icon"><img src="img/icons/ganres/6.svg" alt=""></div>
                <div class="header__catalog__navs__genres__list__genre__title txt">${genre.title}</div>
                <div class="header__catalog__navs__indicator"></div>
                <div class="header__catalog__navs__clickBlock" onmouseover="change_game_category('${genre.id}')" onmouseout="stop_change_game_category()"></div>
            </div>`
}

const get_authorNav_headerCatalog_html = (author) => {
    return `<div class="header__catalog__navs__authors__list__author header__catalog__navs__nav" id="header__catalog__nav-${author.id}">
                <div class="header__catalog__navs__authors__list__author__img">
                    <img src="img/logos/authors/Activision.svg" alt="">
                </div>
                <div class="header__catalog__navs__authors__list__author__title txt">${author.title}</div>
                <div class="header__catalog__navs__indicator"></div>
                <div class="header__catalog__navs__clickBlock" onmouseover="change_game_category('${author.id}')" onmouseout="stop_change_game_category()"></div>
            </div>`
}

// -------- game card visual -------- 

const get_pic_gameCard_html = (link) => {
    return `<div class="mainInfo__banner__visual__imgBlock" style="background-image: url('${link}')"></div>`
}

const get_video_gameCard_html = (link) => {
    return `<video src="${link}" id="video" loop autoplay>
            </video>`
}

const get_media_screenshot = (link, id, n) => {
    return `<div class="mainInfo__banner__interface__bottom__medialist__media mainInfo__banner__interface__bottom__medialist__media_screenshot screenshot-${n}" id="media_block-${id}" onclick="change_media(false, ${n}, '${link}')">
                <div class="mainInfo__banner__interface__bottom__medialist__media__screenshot" style="background-image: url('${link}')"></div>
            </div>`
}

const get_media_video = (preview, id, n, video) => {
    return `<div class="mainInfo__banner__interface__bottom__medialist__media mainInfo__banner__interface__bottom__medialist__media_video video-${n}" 
                id="media_block-${id}" onclick="change_media(true, ${n}, '${video}')">
                <div class="mainInfo__banner__interface__bottom__medialist__media__playButton">
                    <div class="mainInfo__banner__interface__bottom__medialist__media__playButton__icon">
                        <svg viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-347.000000, -3766.000000)" fill="#fff">
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="mainInfo__banner__interface__bottom__medialist__media__preview" style="background-image: url('${preview}')"></div>
            </div>`
}

const get_fullScreen_button = (link) => {
    return `<button type="button" class="mainInfo__banner__interface__bottom__screenshotsIF__buttonFullScreenBlock__button" id="fullScreen_btn" title="full screen button" onclick="change_img_fullScreen('${link}')">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z" fill="#fff"/>
                    <path d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z" fill="#fff"/>
                    <path d="M4 21H8C8.55228 21 9 21.4477 9 22C9 22.5523 8.55228 23 8 23H4C2.34315 23 1 21.6569 1 20V16C1 15.4477 1.44772 15 2 15C2.55228 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21Z" fill="#fff"/>
                    <path d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8L3 4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z" fill="#fff"/>
                </svg>
            </button>`
}

// -------- authors -------- 

const get_author_html = (author) => {
    return `<a href="${author.link}" class="authors__grid__author">
                <div class="authors__grid__author__logo">
                    <img src="${author.logo}" alt="" crossorigin="anonymous">
                </div>
                <div class="authors__grid__author__info txt">
                    <div class="authors__grid__author__info__title">${author.title}</div>
                    <div class="authors__grid__author__info__count">${author.count_games} Игр</div>
                </div>
            </a>`
}