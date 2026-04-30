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
        currency_block = `<div class="header__nav__region txt" id="header_valuta_mobile">
                                ${auth_user.currency}
                                <span>Валюта</span>
                            </div>`;
    }

    return `<div class="header__bg ${header_bg_class}" id="header__bg"></div>
                <div class="header__mobile">
                    <div class="header__mobile__main header__mobile__section header__mobile__section_open">
                        <div class="header__mobile__main__left">
                            <a href="index.html" class="header__logo">
                                <img src="img/logos/logo.png" alt="">
                            </a>
                        </div>
                        <div class="header__mobile__main__right">
                            <input type="text" title="Поиск" id="search-input-mobile_second">
                            <button title="search_button" class="header__nav__button" type="button" onclick="open_section('search')">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button title="burger_button" class="header__nav__button" type="button" onclick="open_section('navs')">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="header__mobile__navs header__mobile__section">
                        ${currency_block}
                        ${button_profile}
                        <a href="favorite.html" title="Избранное" class="header__nav__button ${active_favorite}" id="header_favorite_button_mobile">
                            <img src="img/icons/main/like64.png" alt="">
                            <div class="header__nav__button__counter header__nav__button__counter_hidden" id="header_favorite_counter_mobile">
                                <div class="header__nav__button__counter__number txt">9+</div>
                            </div>
                        </a>
                        <button type="button" title="Уведомления" class="header__nav__button" id="header_button_notification_mobile" onclick="toggle_notifications()">
                            <img src="img/icons/main/bell64.png" alt="">
                            <div class="header__nav__button__counter header__nav__button__counter_hidden" id="header_notification_counter_mobile">
                                <div class="header__nav__button__counter__number txt"></div>
                            </div>
                        </button>
                        <button type="button" title="Корзина" class="header__nav__buttonBasket header__nav__buttonBasket_closed" id="header_basket_button_mobile" onclick="toggle_header_basket()">
                            <img src="img/icons/main/basket64.png" alt="">
                            <div class="header__nav__buttonBasket__info txt">
                                <div class="header__nav__buttonBasket__info__value" id="header_basket_price">0 ₽</div>
                                <div class="header__nav__buttonBasket__info__value" id="header_basket_counter">0 Игр</div>
                            </div>
                        </button>
                        <button type="button" title="close" class="header__nav__button" onclick="close_section()">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="header__mobile__search header__mobile__section">
                        <input type="text" title="Поиск" id="search-input-mobile">
                        <button class="header__nav__button" title="Поиск" type="button" id="search-button-mobile">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button type="button" title="close" class="header__nav__button" onclick="close_section()">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="header__pc">
                </div>
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
    document.querySelector('header').innerHTML = get_header_html(LO_pathname, true);
    update_header_basket(LO_pathname);
    update_favorite_counter_header();
}

make_header();

// ----------------------- Изменение фона шапки при скролле 
document.addEventListener('DOMContentLoaded', function() {
    const header_bg = document.querySelector('#header__bg');

    let header_bg_visible = false;

    function update_header_opacity() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(window.pageYOffset, document.documentElement.scrollTop);
        
        if (scrollTop <= 0) {
            header_bg.classList.remove('header__bg_noTransparent');
            header_bg_visible = false;
        } 
        else {
            header_bg.classList.add('header__bg_noTransparent');
            header_bg_visible = true;
        }
        
        // Для iPhone — проверка в консоли
        console.log('ScrollTop:', scrollTop, 'Opacity:', header_bg.style.opacity);
    }

    window.addEventListener('scroll', update_header_opacity);

    // Дополнительно для iOS Safari (из-за инерции)
    window.addEventListener('touchmove', update_header_opacity, { passive: true });
    window.addEventListener('touchend', function() {
        setTimeout(update_header_opacity, 50);
    });

    // Также на всякий случай при загрузке
    window.addEventListener('load', update_header_opacity);
})


// window.addEventListener('scroll', function() {
//     scrollTop = window.pageYOffset;
//     if (scrollTop == 0) {
//         header_bg.style.opacity = "0";
//         header_bg_visible = false;
//     }
//     else {
//         header_bg.style.opacity = "1";
//         header_bg_visible = true;
//     }
// });

// --------- mobile 

function open_section(title) {
    const open_section = document.querySelector('.header__mobile__section_open');
    if (open_section) { open_section.classList.remove('header__mobile__section_open'); }
    
    document.querySelector(`.header__mobile__${title}`).classList.add('header__mobile__section_open');
}

function close_section() {
    document.querySelector('.header__mobile__section_open').classList.remove('header__mobile__section_open'); 
    document.querySelector('.header__mobile__main').classList.add('header__mobile__section_open');
}

// --------- basket + notification 

function update_favorite_counter_header() {
    let cookie = JSON.parse(document.cookie);
    let favorite_list = cookie.favorite_list;
    // let length_list = favorite_list.length;
    update_counter(favorite_list.length, 'favorite');
    // const counter = document.querySelector('#header_favorite_counter');
    // // const number = counter.querySelector('.header__nav__button__counter__number');

    // console.log(length_list);
    
    // if (length_list === 0) {
    //     if (!document.querySelector('#header_favorite_counter.header__nav__button__counter_hidden')) {
    //         counter.classList.add('header__nav__button__counter_hidden');
    //     }
    // }
    // else if (length_list > 9) {
    //     if (document.querySelector('#header_favorite_counter.header__nav__button__counter_hidden')) {
    //         counter.classList.remove('header__nav__button__counter_hidden');
    //     }
    //     counter.innerHTML = '<div class="header__nav__button__counter__number txt">9+</div>';
    // }
    // else {
    //     if (document.querySelector('#header_favorite_counter.header__nav__button__counter_hidden')) {
    //         counter.classList.remove('header__nav__button__counter_hidden');
    //     }
    //     counter.innerHTML = `<div class="header__nav__button__counter__number txt">${length_list}</div>`;
    // }
}

function update_counter(value, title) {
    const counter = document.querySelector(`#header_${title}_counter`);
    const counter_hidden = document.querySelector(`#header_${title}_counter.header__nav__button__counter_hidden`);
    // const number = counter.querySelector('.header__nav__button__counter__number');
    
    if (value === 0) {
        if (!counter_hidden) {
            counter.classList.add('header__nav__button__counter_hidden');
        }
    }
    else if (value > 9) {
        if (counter_hidden) {
            counter.classList.remove('header__nav__button__counter_hidden');
        }
        counter.innerHTML = '<div class="header__nav__button__counter__number txt">9+</div>';
    }
    else {
        if (counter_hidden) {
            counter.classList.remove('header__nav__button__counter_hidden');
        }
        counter.innerHTML = `<div class="header__nav__button__counter__number txt">${value}</div>`;
    }
}

function update_header_basket(LO_pathname) {
    let cookie = JSON.parse(document.cookie);
    let basket_list = cookie.basket_list;

    let count_game = basket_list.length;
    const header_basket_button = document.querySelector('#header_basket_button');

    let games_html = "";
    let basket_list_infos = [];
    let price = 0;

    games.forEach(info => {
        if (contains(basket_list, info.id)) {
            basket_list_infos[info.id] = info;
        }
    });

    basket_list_infos.forEach(game => {
        games_html += get_small_game(game, LO_pathname);
        price += game.newPrice;
    })

    document.querySelector('#header_basket_grid').innerHTML = games_html;

    if (count_game === 0) {
        document.querySelector('#header_basket_grid').innerHTML = `<div class="header__basket__grid__nothing flex-center txt">
                                                                        <div>Нет игр в корзине</div>
                                                                    </div>`;
        header_basket_button.querySelector('#header_basket_price').innerHTML = "0 ₽";
        header_basket_button.querySelector('#header_basket_counter').innerHTML = "0 Игр";
        header_basket_button.classList.add('header__nav__buttonBasket_closed');
    }

    else {
        header_basket_button.querySelector('#header_basket_price').innerHTML = `${price} ₽`;
        header_basket_button.querySelector('#header_basket_counter').innerHTML = `${count_game} Игр`;
        if (header_basket_button.classList.contains('header__nav__buttonBasket_closed')) {
            header_basket_button.classList.remove('header__nav__buttonBasket_closed');
        }
    }
}

function open_header_basket() {
    close_header_blocks();
    // if (document.querySelector('.header__notification_active')) {
    //     const notification = document.querySelector('.header__notification');
    //     notification.classList.remove('header__notification_active');
    //     document.getElementById('header_button_notification').classList.remove('header__nav__button_active');
    //     setTimeout(() => notification.style.display = "none", 160);
    // }
    // document.querySelector('#temporary_notification').style.right = '330px';
    // document.querySelector('#temporary_notification').style.display = 'none';
    const header_basket = document.querySelector('.header__basket');
    header_basket.style.display = "block";
    document.querySelector('#header_basket_button').classList.add('header__nav__buttonBasket_active');
    setTimeout(() => header_basket.classList.add('header__basket_active'), 10);
}
function close_header_basket() {
    if (!document.querySelector('.header__basket_active')) return;

    const header_basket = document.querySelector('.header__basket');
    header_basket.classList.remove('header__basket_active');
    document.querySelector('#header_basket_button').classList.remove('header__nav__buttonBasket_active');
    setTimeout(() => header_basket.style.display = "none", 160);
    // document.querySelector('#temporary_notification').style.right = '15px';
    // document.querySelector('#temporary_notification').style.display = 'block';
    open_temp_notification();
}
function toggle_header_basket() {
    if (document.querySelector('.header__basket').classList.contains('header__basket_active')) {
        close_header_basket();
    }
    else {
        open_header_basket();
    }
}

function close_temp_notification() {
    document.querySelector('#temporary_notification').style.visibility = 'hidden';
}
function open_temp_notification() {
    document.querySelector('#temporary_notification').style.visibility = 'visible';
}

function toggle_notifications() {
    if (!document.querySelector('.header__notification_active')) {
        open_notifications();
        return;
    }
    close_notifications();
}
function open_notifications() {
    close_header_blocks();
    const notification = document.querySelector('.header__notification');
    // const notification_button = document.getElementById('header_button_notification');
    
    notification.style.display = "block";
    document.getElementById('header_button_notification').classList.add('header__nav__button_active');
    setTimeout(() => notification.classList.add('header__notification_active'), 10);
}
function close_notifications() {
    if (!document.querySelector('.header__notification_active')) return;

    const notification = document.querySelector('.header__notification');
    // const notification_button = document.getElementById('header_button_notification');

    notification.classList.remove('header__notification_active');
    document.getElementById('header_button_notification').classList.remove('header__nav__button_active');
    open_temp_notification();
    setTimeout(() => notification.style.display = "none", 160);
}

function close_header_blocks() {
    close_header_basket();
    close_notifications();
    close_temp_notification();
}

// update_header_basket();
// update_favorite_counter_header();

// ----------------------- Поиск get post 

const search_input = document.querySelector('#search-input');
const search_button = document.querySelector('#search-button');

function search_to_catalog(value) {
    // Создание параметров
    const params = new URLSearchParams();
    params.append('title', `${value}`);

    // Создание полного URL
    const base_url = 'catalog.html';
    const url_w_params = `${base_url}?${params.toString()}`;
    window.location.href = url_w_params;
}

search_input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter' && evt.target.value !== '') {
        search_to_catalog(evt.target.value);
    }
});

search_button.addEventListener('click', () => search_to_catalog(search_input.value));

// ----------- catalog navs 

function make_catalog_navs() {
    let list_genres_HC_html = "";
    let list_authors_HC_html = "";
    // let list_authors_HC = document.querySelector('#list_authors_HC').innerHTML;

    genres.forEach(e => {
        list_genres_HC_html += get_genresNav_headerCatalog_html(e);
    })
    document.querySelector('#list_genres_HC').innerHTML = list_genres_HC_html;

    authors.forEach(e => {
        list_authors_HC_html += get_authorNav_headerCatalog_html(e);
    })
    document.querySelector('#list_authors_HC').innerHTML = list_authors_HC_html;
}

make_catalog_navs();

// ~ Открытиие меню каталога в шапке 

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

const open_catalogNavs = () => {
    const header = document.querySelector('.header');
    document.querySelector('.header__buttonCatalog').classList.toggle('header__buttonCatalog_active');
    document.querySelector('.blackoutBlock').classList.toggle('blackoutBlock_active');
    // document.querySelector('.header__catalogNavs').classList.toggle('header__catalogNavs_hidden');
    document.querySelector('.header__catalog').classList.toggle('header__catalog_open');
    header.classList.toggle('header_open');

    scrollTop = window.pageYOffset;
    if (document.querySelector('.header_open')) {
        header_bg.style.opacity = "1";
        header_bg_visible = true;
        const w = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${w}px`;
        header.style.paddingRight = `${w + 15}px`;
    }
    else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        header.style.paddingRight = '15px';
        if (window.pageYOffset == 0) {
            header_bg.style.opacity = "0";
            header_bg_visible = false;
        }
        else {
            header_bg.style.opacity = "1";
            header_bg_visible = true;
        }
    }
}

// ~ Выбор категории 

let onmouse = false;
let old_category = "";

function get_games_for_header_games(category) {
    let array = games.filter(game => 
        game.genres?.includes(category) || game.publisher?.includes(category) || game.developer?.includes(category)
    ).slice(0, 5);
    return array;
}

function make_game_list_header(category) {
    const game_grid = document.querySelector('#catalog_game_list');
    const game_list_header = get_games_for_header_games(category);
    let game_list_html = "";
    game_list_header.forEach(e => { game_list_html += get_horizont_game_headerCatalog_html(e, Math.round((e.oldPrice - e.newPrice) / e.oldPrice * 100)); });
    game_grid.innerHTML = game_list_html;
    update_buttons(game_grid);
    update_marks(game_grid)

    if (document.querySelector('.header__catalog__navs__nav_active')) {
        document.querySelector('.header__catalog__navs__nav_active').classList.remove('header__catalog__navs__nav_active');
    }
    document.querySelector(`#header__catalog__nav-${category}`).classList.add('header__catalog__navs__nav_active');

    setTimeout(function() {
        document.querySelectorAll('.gameH_headerCatalog').forEach(e => { e.classList.add('gameH_open') });
    }, 50)
}

function stop_change_game_category() { onmouse = false; }

function change_game_category(category) {
    onmouse = true;
    if (old_category != category) {
        old_category = category;
        setTimeout(function() {
            if (old_category == category && onmouse) {
                make_game_list_header(category);
            }
        }, 601);
    }
}

make_game_list_header('shooter');

// document.querySelectorAll('.header__catalog__navs__genres__list__genre').forEach(e => {
//     e.addEventListener("mouseover", () => change_game_category('shooter'))
// });