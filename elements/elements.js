const get_horizont_game_html = (game, discount) => {
    let preOrder_html = "";
    let dls_html = "";

    if (game.preOrder != "") {
        preOrder_html = `<div class="gameH__banner__info__point gameH__banner__info__point_more gameH__banner__info__point_preOrder"><span>Предзаказ</span>${game.preOrder}</div>`;
    }

    if (game.dls) {
        dls_html = `<div class="gameH__banner__info__point gameH__banner__info__point_more">DLC</div>`;
    }

    return `<article class = "gameH">
                <a href = "${game.link}" class="gameH__banner">
                    <div class="gameH__banner__glass"></div>
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
                    <div class="gameH__info__buttons">
                        <div class="gameH__info__buttons__button">
                            <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/main/basket64.png" alt="">
                        </div>
                        <div class="gameH__info__buttons__button">
                            <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/main/like64.png" alt="">
                        </div>
                    </div>
                    <div class="gameH__info__name txt">${game.name}</div>
                    <div class="gameH__info__price txt">${game.newPrice}₽</div>
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
                    <div class="gameH__banner__glass"></div>
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
                    <div class="gameH__info__buttons">
                        <div class="gameH__info__buttons__button">
                            <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/main/basket64.png" alt="">
                        </div>
                        <div class="gameH__info__buttons__button">
                            <div class="gameH__info__buttons__button__forHover gameH__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/main/like64.png" alt="">
                        </div>
                    </div>
                    <div class="gameH__info__name txt">${game.name}</div>
                    <div class="gameH__info__price txt">${game.newPrice}₽</div>
                </div>
            </article>`
};

const get_vertical_game_html = (game, discount) => {
    return `<article class = "gameV">
                <a href = "${game.link}" class="gameV__banner">
                    <div class="gameV__banner__glass"></div>
                    <img src="${game.imgW}" alt="${game.name}">
                    <div class="gameV__banner__discount txt">${discount}%</div>
                </a>
                <div class="gameV__info">
                    <div class="gameV__info__buttons">
                        <div class="gameV__info__buttons__button" onclick="add_game_basket(${game.id}, '${game.name}')">
                            <div class="gameV__info__buttons__button__forHover gameV__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/main/basket64.png" alt="">
                        </div>
                        <div class="gameV__info__buttons__button" onclick="add_game_favorite(${game.id}, '${game.name}')">
                            <div class="gameV__info__buttons__button__forHover gameV__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/main/like64.png" alt="">
                        </div>
                    </div>
                    <div class="gameV__info__name txt">${game.name}</div>
                    <div class="gameV__info__price txt">${game.newPrice} ₽</div>
                </div>
            </article>`
}

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
    return `<div class="carousel__bg ${count === 0 ? 'carousel__bg_active' : ''}" order = "${count}">
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

const get_edition_game_html = (edition, discount) => {
    return `<a href="${edition.link}" class="editions__grid__edition">
                <div class="editions__grid__edition__imgBlock"><img src="${edition.img}" alt="${edition.title}"></div>
                <div class="editions__grid__edition__info">
                    <div class="editions__grid__edition__info__title txt">${edition.title}</div>
                    <div class="editions__grid__edition__info__price txt"><span>${edition.newPrice} ₽</span><div class="editions__grid__edition__info__price__percent">${discount}%</div></div>
                </div>
            </a>`
}

const get_info_game_html = (game, discount, categoriesHTML) => {
    return `<div>
                <div class="mainInfo__info__title txt">${game.name}</div>
                <div class="mainInfo__info__category">
                    ${categoriesHTML}
                </div>
            </div>
            <div class="mainInfo__info__interactions">
                <div class="mainInfo__info__interactions__top">
                    <div class="mainInfo__info__interactions__percent">
                        <div class="mainInfo__info__interactions__percent__valueRow">
                            <div class="mainInfo__info__interactions__percent__valueRow__race">
                                <div class="mainInfo__info__interactions__percent__valueRow__race__point"></div>
                            </div>
                        </div>
                        <div class="mainInfo__info__interactions__percent__valueNamber txt">${discount}%</div>
                    </div>
                    <div class="mainInfo__info__interactions__price txt">${game.newPrice} ₽ <span>/</span><span>${game.oldPrice} ₽</span></div>
                    <div class="mainInfo__info__interactions__button mainInfo__info__interactions__button_favorite mainInfo__info__interactions__button_active" onclick="addInFavorite(${game.id})">
                        <img src="img/icons/main/like64.png" alt="">
                    </div>
                </div>
                <div class="mainInfo__info__interactions__bottom">
                    <div class="mainInfo__info__interactions__buttonBuy">
                        <div class="-text txt">Купить</div>
                        <div class="-forHover absolute-zero"></div>
                    </div>
                    <div class="mainInfo__info__interactions__button mainInfo__info__interactions__button_basket" onclick="addInBasket(${game.id})">
                        <img src="img/icons/main/basket64_2.png" alt="">
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
                        <a href="${game.steamLink}" class="basketContainer__gameList__games__game__left__nameBlock__linkPlatform txt">Игра в Steam</a>
                    </div>
                </div>
                <div class="basketContainer__gameList__games__game__right">
                    <div class="basketContainer__gameList__games__game__right__price txt">${game.newPrice} ₽<span>${game.oldPrice} ₽</span></div>
                    <div class="basketContainer__gameList__games__game__right__closeBlock" onclick="delete_game_basket(${game.id}, '${game.name}')" onmouseover="hover_close_basket(true, ${game.id})" onmouseout="hover_close_basket(false, ${game.id})">
                        <img src="img/icons/cross2_32.png" alt="">
                    </div>
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

const get_notification_html = (status, message, id) => {
    return `<div class="header__notification_temporary__grid__notification notification_${status}" id="${id}">
                <div class="header__notification_temporary__grid__notification__point txt">
                    <div class="header__notification_temporary__grid__notification__point__circle header__notification_temporary__grid__notification__point__circle_${status}"></div>
                </div>
                <div class="header__notification_temporary__grid__notification__text txt">${message}</div>
            </div>`
}

// export {get_horizont_game_html}