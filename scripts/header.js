const get_header_html = (page, check_auth_user) => {
    let game_in_header = '';
    let active_favorite = '';
    let active_profile = '';
    let button_profile = '';
    let currency_block = '';
    let header_bg_class = '';

    if (page == '/game.html') {
        game_in_header = `<div class="miniGameCard miniGameCard_loading loadingContent" id="miniGameCard">
                                <a href="#" class="miniGameCard__left">
                                    <div class="miniGameCard__left__imgBlock">
                                        <img src="" alt="" id="img_miniGameCard">
                                    </div>
                                    <div class="miniGameCard__left__info">
                                        <div class="miniGameCard__left__info__title txt" id="title_game"></div>
                                        <div class="miniGameCard__left__info__price txt" id="price_game"><span></span></div>
                                    </div>
                                </a>
                                <div class="miniGameCard__right">
                                    <div class="miniGameCard__right__button miniGameCard__right__button_favorite">
                                        <img src="img/icons/main/like64.png" alt="">
                                    </div>
                                    <div class="miniGameCard__right__button miniGameCard__right__button_basket">
                                        <img src="img/icons/main/basket64_2.png" alt="">
                                    </div>
                                    <div class="miniGameCard__right__buttonBuy txt">Купить</div>
                                </div>
                            </div>`;
    }
    else if (page == '/profile.html') {
        active_profile = 'header__nav__button_active';
        header_bg_class = 'header__bg_profile';
    }

    else if (page == '/favorite.html') {
        active_favorite = 'header__nav__button_active';
    }

    if (check_auth_user === false) {
        button_profile = `<button title="Профиль" type="button" class="header__nav__button header__nav__button_auth txt">
                                Войти через стим
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6599 0.674316C14.2629 0.674316 12.3072 2.67093 12.2887 5.13235L9.56635 9.15087C8.80691 9.08003 8.1519 9.24196 7.5729 9.60557L1.07325 6.39596C-0.392348 8.63835 1.07325 10.88 1.07325 10.88L6.04976 13.2063C6.36803 14.7171 7.68018 15.8549 9.23245 15.8549C10.9204 15.8549 12.3192 14.5197 12.4727 12.8195L16.6635 9.66557C19.0675 9.66557 21.0233 7.65811 21.0233 5.1685L21.0226 5.16777C21.0233 2.68972 19.0675 0.674316 16.6599 0.674316ZM9.23245 14.9607C8.31103 14.9607 7.5182 14.4272 7.11539 13.6487L8.29256 14.1308C9.27081 14.5458 10.3826 14.0513 10.7734 13.0436C10.9624 12.5622 10.957 12.0243 10.7582 11.5469C10.5594 11.0695 10.1834 10.6914 9.71198 10.4947L8.71455 10.0798C8.88445 10.0403 9.05818 10.0204 9.23245 10.0205C10.5631 10.0205 11.6287 11.1186 11.6287 12.4899C11.6287 13.8612 10.5631 14.96 9.23245 14.96V14.9607ZM16.6642 8.18076C15.0458 8.18076 13.7308 6.83692 13.7308 5.16922C13.7308 3.50875 15.0423 2.15768 16.6642 2.15768C18.2712 2.15768 19.5861 3.50947 19.5861 5.16922C19.5861 6.84125 18.2704 8.1851 16.6642 8.18076ZM16.672 2.75189C15.3797 2.75189 14.3333 3.83116 14.3333 5.16199C14.3333 6.49282 15.3762 7.57209 16.672 7.57209C17.9564 7.57209 19.0107 6.49716 19.0107 5.16199C19.0107 3.82682 17.9564 2.75189 16.672 2.75189Z" fill="white"/>
                                </svg>
                            </button>`;
    }

    else {
        button_profile = `<a href="profile.html" title="Профиль" class="header__nav__button ${active_profile}">
                                <img src="img/icons/main/user64.png" alt="">
                            </a>`;
        currency_block = `<div class="header__nav__region txt" id="header_valuta">
                                ${auth_user.currency}
                                <span>Валюта</span>
                            </div>`;
    }

    return `<div class="header__bg ${header_bg_class}" id="header__bg"></div>
                <div class="header__left">
                    <a href="index.html" class="header__logo">
                        <img src="img/logos/logo.png" alt="">
                    </a>
                </div>
                <div class="header__center" id="centerHeader_gameCard">
                    <button type="button" title="кнопка открыть закрыть каталог" class="header__buttonCatalog" onclick="open_catalogNavs()">
                        <svg viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-139.000000, -200.000000)" fill="#fff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M101.9,57.009 C101.9,57.56 101.38235,58 100.80275,58 L97.65275,58 C97.0742,58 96.65,57.56 96.65,57.009 L96.65,54.009 C96.65,53.458 97.0742,53 97.65275,53 L100.80275,53 C101.38235,53 101.9,53.458 101.9,54.009 L101.9,57.009 Z M100.80275,51 L97.65275,51 C95.9129,51 94.55,52.352 94.55,54.009 L94.55,57.009 C94.55,58.666 95.9129,60 97.65275,60 L100.80275,60 C102.5426,60 104,58.666 104,57.009 L104,54.009 C104,52.352 102.5426,51 100.80275,51 L100.80275,51 Z M90.35,57.009 C90.35,57.56 89.83235,58 89.25275,58 L86.10275,58 C85.5242,58 85.1,57.56 85.1,57.009 L85.1,54.009 C85.1,53.458 85.5242,53 86.10275,53 L89.25275,53 C89.83235,53 90.35,53.458 90.35,54.009 L90.35,57.009 Z M89.25275,51 L86.10275,51 C84.3629,51 83,52.352 83,54.009 L83,57.009 C83,58.666 84.3629,60 86.10275,60 L89.25275,60 C90.9926,60 92.45,58.666 92.45,57.009 L92.45,54.009 C92.45,52.352 90.9926,51 89.25275,51 L89.25275,51 Z M101.9,46.009 C101.9,46.56 101.38235,47 100.80275,47 L97.65275,47 C97.0742,47 96.65,46.56 96.65,46.009 L96.65,43.009 C96.65,42.458 97.0742,42 97.65275,42 L100.80275,42 C101.38235,42 101.9,42.458 101.9,43.009 L101.9,46.009 Z M100.80275,40 L97.65275,40 C95.9129,40 94.55,41.352 94.55,43.009 L94.55,46.009 C94.55,47.666 95.9129,49 97.65275,49 L100.80275,49 C102.5426,49 104,47.666 104,46.009 L104,43.009 C104,41.352 102.5426,40 100.80275,40 L100.80275,40 Z M90.35,46.009 C90.35,46.56 89.83235,47 89.25275,47 L86.10275,47 C85.5242,47 85.1,46.56 85.1,46.009 L85.1,43.009 C85.1,42.458 85.5242,42 86.10275,42 L89.25275,42 C89.83235,42 90.35,42.458 90.35,43.009 L90.35,46.009 Z M89.25275,40 L86.10275,40 C84.3629,40 83,41.352 83,43.009 L83,46.009 C83,47.666 84.3629,49 86.10275,49 L89.25275,49 C90.9926,49 92.45,47.666 92.45,46.009 L92.45,43.009 C92.45,41.352 90.9926,40 89.25275,40 L89.25275,40 Z" id="menu_navigation_grid-[#1528]">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <div class="header__searchBlock">
                        <!-- <div class="header__searchBlock__bg">
                            <div class="header__searchBlock__bg__top"></div>
                            <div class="header__searchBlock__bg__bottom"></div>
                        </div> -->
                        <input type="text" title="Поиск" id="search-input">
                        <button class="header__searchBlock__button" title="Поиск" type="button" id="search-button">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="header__right">
                    <nav class="header__nav">
                        ${currency_block}
                        ${button_profile}
                        <a href="favorite.html" title="Избранное" class="header__nav__button ${active_favorite}" id="header_favorite_button">
                            <img src="img/icons/main/like64.png" alt="">
                            <div class="header__nav__button__counter header__nav__button__counter_hidden" id="header_favorite_counter">
                                <div class="header__nav__button__counter__number txt">9+</div>
                            </div>
                        </a>
                        <button type="button" title="Уведомления" class="header__nav__button" id="header_button_notification" onclick="toggle_notifications()">
                            <img src="img/icons/main/bell64.png" alt="">
                            <div class="header__nav__button__counter header__nav__button__counter_hidden" id="header_notification_counter">
                                <div class="header__nav__button__counter__number txt"></div>
                            </div>
                        </button>
                        <button type="button" title="Корзина" class="header__nav__buttonBasket header__nav__buttonBasket_closed" id="header_basket_button" onclick="toggle_header_basket()">
                            <img src="img/icons/main/basket64.png" alt="">
                            <div class="header__nav__buttonBasket__info txt">
                                <div class="header__nav__buttonBasket__info__value" id="header_basket_price">0 ₽</div>
                                <div class="header__nav__buttonBasket__info__value" id="header_basket_counter">0 Игр</div>
                            </div>
                        </button>
                    </nav>
                </div>
                <div class="header__catalog">
                    <div class="inner inner_main">
                        <div class="header__catalog__navs">
                            <div class="header__catalog__navs__genres">
                                <div class="header__catalog__head txt">
                                    <div class="header__catalog__head__title">Жанры</div>
                                    <div class="header__catalog__head__more">Показать все</div>
                                </div>
                                <div class="header__catalog__navs__genres__list" id="list_genres_HC">
                                </div>
                            </div>
                            <div class="header__catalog__navs__authors">
                                <div class="header__catalog__head txt">
                                    <div class="header__catalog__head__title">Издатели и разработчики</div>
                                    <a href="authors.html" class="header__catalog__head__more txt">Показать все</a>
                                </div>
                                <div class="header__catalog__navs__authors__list" id="list_authors_HC">
                                </div>
                            </div>
                        </div>
                        <div class="header__catalog__gamelist" id="catalog_game_list">
                            <article class="gameH gameH_headerCatalog">
                                <a href="game.html" class="gameH__banner">
                                    <div class="gameH__banner__glass"></div>
                                    <div class="gameH__banner__imgBlock"><img src="img/banners/farmsim.png" alt="Call Of Duty: Cold War 2"></div>
                                    <div class="gameH__banner__videoBlock">
                                        <video src="video/50.MP4" autoplay="" loop="" muted="">
                                    </video></div>
                                    <div class="gameH__banner__info txt">
                                        <div class="gameH__banner__info__left">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more gameH__banner__info__point_preOrder"><span>Предзаказ</span>03.04.2026</div>
                                        </div>
                                        <div class="gameH__banner__info__right">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more">DLC</div>
                                            <div class="gameH__banner__info__point gameH__banner__info__point_discount">10%</div>
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
                                    <div class="gameH__info__name txt">Call Of Duty: Cold War 2</div>
                                    <div class="gameH__info__price txt">4599₽</div>
                                </div>
                            </article>
                            <article class="gameH gameH_headerCatalog">
                                <a href="game.html" class="gameH__banner">
                                    <div class="gameH__banner__glass"></div>
                                    <div class="gameH__banner__imgBlock"><img src="img/banners/farmsim.png" alt="Call Of Duty: Cold War 2"></div>
                                    <div class="gameH__banner__videoBlock">
                                        <video src="video/50.MP4" autoplay="" loop="" muted="">
                                    </video></div>
                                    <div class="gameH__banner__info txt">
                                        <div class="gameH__banner__info__left">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more gameH__banner__info__point_preOrder"><span>Предзаказ</span>03.04.2026</div>
                                        </div>
                                        <div class="gameH__banner__info__right">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more">DLC</div>
                                            <div class="gameH__banner__info__point gameH__banner__info__point_discount">10%</div>
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
                                    <div class="gameH__info__name txt">Call Of Duty: Cold War 2</div>
                                    <div class="gameH__info__price txt">4599₽</div>
                                </div>
                            </article>
                            <article class="gameH gameH_headerCatalog">
                                <a href="game.html" class="gameH__banner">
                                    <div class="gameH__banner__glass"></div>
                                    <div class="gameH__banner__imgBlock"><img src="img/banners/farmsim.png" alt="Call Of Duty: Cold War 2"></div>
                                    <div class="gameH__banner__videoBlock">
                                        <video src="video/50.MP4" autoplay="" loop="" muted="">
                                    </video></div>
                                    <div class="gameH__banner__info txt">
                                        <div class="gameH__banner__info__left">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more gameH__banner__info__point_preOrder"><span>Предзаказ</span>03.04.2026</div>
                                        </div>
                                        <div class="gameH__banner__info__right">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more">DLC</div>
                                            <div class="gameH__banner__info__point gameH__banner__info__point_discount">10%</div>
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
                                    <div class="gameH__info__name txt">Call Of Duty: Cold War 2</div>
                                    <div class="gameH__info__price txt">4599₽</div>
                                </div>
                            </article>
                            <article class="gameH gameH_headerCatalog">
                                <a href="game.html" class="gameH__banner">
                                    <div class="gameH__banner__glass"></div>
                                    <div class="gameH__banner__imgBlock"><img src="img/banners/farmsim.png" alt="Call Of Duty: Cold War 2"></div>
                                    <div class="gameH__banner__videoBlock">
                                        <video src="video/50.MP4" autoplay="" loop="" muted="">
                                    </video></div>
                                    <div class="gameH__banner__info txt">
                                        <div class="gameH__banner__info__left">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more gameH__banner__info__point_preOrder"><span>Предзаказ</span>03.04.2026</div>
                                        </div>
                                        <div class="gameH__banner__info__right">
                                            <div class="gameH__banner__info__point gameH__banner__info__point_more">DLC</div>
                                            <div class="gameH__banner__info__point gameH__banner__info__point_discount">10%</div>
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
                                    <div class="gameH__info__name txt">Call Of Duty: Cold War 2</div>
                                    <div class="gameH__info__price txt">4599₽</div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                ${game_in_header}
                <div class="header__basket">
                    <div class="header__basket__head txt">
                        <div class="header__basket__head__title">Корзина</div>
                        <a href="basket.html" class="header__basket__head__link">К оплате</a>
                    </div>
                    <div class="header__basket__grid" id="header_basket_grid">
                        <!-- <div class="header__basket__grid__nothing">
                            <div>Тут пусто</div>
                        </div> -->
                        <div class="header__basket__grid__game">
                            <div class="header__basket__grid__game__top">
                                <a href="#" class="header__basket__grid__game__title txt">Title game 3</a>
                                <div class="header__basket__grid__game__delete flex-center">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="header__basket__grid__game__bottom">
                                <div class="header__basket__grid__game__prices txt">
                                    <div class="header__basket__grid__game__prices__new">1240 ₽</div>
                                    <div class="header__basket__grid__game__prices__old">1440 ₽</div>
                                </div>
                                <a href="#" class="header__basket__grid__game__bottom__link txt">
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
                    </div>
                </div>

                <div class="header__notification">
                    <div class="header__notification__header">
                        <div class="header__notification__header__title txt">Уведомления</div>
                        <a href="profile.html" class="header__notification__header__link txt">Показать все</a>
                    </div>
                    <div class="header__notification__grid" id="grid_notification">
                        <div class="header__notification__grid__notification notification_nothing">
                            <div class="header__notification__grid__notification__point txt">
                                <div class="header__notification__grid__notification__point__circle header__notification__grid__notification__point__circle_nothing"></div>
                            </div>
                            <div class="header__notification__grid__notification__text txt">Нет новый уведомлений</div>
                        </div>
                        <div class="header__notification__grid__notification notification_addGame">
                            <div class="header__notification__grid__notification__point txt">
                                <div class="header__notification__grid__notification__point__circle"></div>
                            </div>
                            <div class="header__notification__grid__notification__text txt">Игра <span>FPV Kamikadze Drone</span> добавлена в корзину</div>
                        </div>
                        <div class="header__notification__grid__notification notification_addGame">
                            <div class="header__notification__grid__notification__point txt">
                                <div class="header__notification__grid__notification__point__circle"></div>
                            </div>
                            <div class="header__notification__grid__notification__text txt">Игра <span>FPV Kamikadze Drone</span> добавлена в избранное</div>
                        </div>
                        <div class="header__notification__grid__notification notification_error">
                            <div class="header__notification__grid__notification__point txt">
                                <div class="header__notification__grid__notification__point__circle header__notification__grid__notification__point__circle_error"></div>
                            </div>
                            <div class="header__notification__grid__notification__text txt">Произошла ошибка</div>
                        </div>

                        <!-- <div class="header__notification__grid__nothing">
                            <div class="header__notification__grid__nothing__text txt">Тут пусто :(</div>
                        </div> -->
                    </div>
                </div>
                <div class="header__notification_temporary" id="temporary_notification">
                    <div class="header__notification_temporary__grid" id="grid_temporary_notification">
                    </div>
                </div>`;
}

function make_header() {
    const page = window.location.pathname;

    document.querySelector('header').innerHTML = get_header_html(page, true);
}

make_header();