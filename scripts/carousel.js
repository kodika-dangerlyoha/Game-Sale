let carousel_banner_list = get_carousel_bannet_list_request();

function get_carousel_bannet_list_request() {
    return games_list.filter(game_info => game_info.carousel === true);
}

// function make_carousel() {
//     let cout = 0;

//     carousel_banner_list.forEach(game => {
//         cout++;
//         document.querySelector('#grid_banners').innerHTML += get_carousel_banner_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100), cout);
//         document.querySelector('#carousel_grid_bg').innerHTML += get_carousel_bg_html(game, cout);
//     })
    
//     document.querySelector('.carousel__bg_1').classList.add('carousel__bg_active');

//     // document.querySelector('#grid_banners').innerHTML += carousel_banner_list.reduce((summ_game, game) => {
//     //     cout += 1;
//     //     summ_game + get_carousel_banner_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100), cout)
//     // }, "");
// }

// make_carousel()


// let main_block = 0;

// function scroll_carousel(n) {
//     const blocks = document.querySelectorAll('.carousel__banner');

//     const blocks_lenght = blocks.length;
//     const button_left = document.getElementById('carousel_button_left');
//     const button_right = document.getElementById('carousel_button_right');

//     button_left.disabled = true;
//     button_right.disabled = true;
//     main_block += n;

//     document.querySelector('.carousel__bg_active').classList.remove('carousel__bg_active');
//     document.querySelector(`.carousel__bg_${main_block + 1}`).classList.add('carousel__bg_active');

//     for (let i = 0, n = 1; i < blocks_lenght; i++) {
//         if (i < main_block) {
//             blocks[i].classList = "carousel__banner";
//             blocks[i].classList.add('carousel__banner_0');
//             continue
//         }

//         blocks[i].classList = "carousel__banner";
//         blocks[i].classList.add(`carousel__banner_${n}`);
//         n++
//     }

//     document.querySelectorAll('.carousel__buttons__button_disactive').forEach(elem => elem.classList.remove('carousel__buttons__button_disactive'));

//     setTimeout(() => {
//         if (main_block == 0) {
//             button_left.classList.add('carousel__buttons__button_disactive');
//             button_left.disabled = true;
//             button_right.disabled = false;
//         }
//         else if (main_block == blocks_lenght - 1) {
//             button_right.classList.add('carousel__buttons__button_disactive');
//             button_right.disabled = true;
//             button_left.disabled = false;
//         }
//         else {
//             button_left.disabled = false;
//             button_right.disabled = false;
//         }
//     }, 505);
// }


// -----------------------------------------




let game_info = {
    'carusel': [
        {
            'id': 1,
        },
        {
            'id': 2,
        },
        {
            'id': 3,
        },
    ],
}

function make_carousel() {
    let carusel_html = document.querySelector('#grid_banners');
    let carousel_gd_html = document.querySelector('#carousel_grid_bg');
    let count = 0;

    carousel_banner_list.forEach(game_info => {
        const discount = Math.round((game_info.oldPrice - game_info.newPrice) / game_info.oldPrice * 100)
        carusel_html.innerHTML += `
        <div class = "carousel__banner" order = ${count} game_id = '${game_info.id}' style = "${count === 0 ? 'margin-left: 0' : ''};
                                                                                                z-index: ${carousel_banner_list.length - count + 1};
                                                                                                transform: scale(${1 - count * 0.05});
                                                                                                filter: blur(${count}px);
                                                                                                }">
            <div class="carousel__banner__imgBlock">
                <img src="${game_info.bigBanner}" alt="">
            </div>
            <div class="carousel__banner__interaction">
                <div class="carousel__banner__interaction__info">
                    <a href="${game_info.link}" class="carousel__banner__interaction__info__link" style = "${count === 0 ? 'display: block' : 'display: none'}"></a>
                    <div class="carousel__banner__interaction__info__title txt">${game_info.name}</div>
                    <div class="carousel__banner__interaction__info__shopInfo">
                        <div class="carousel__banner__interaction__info__shopInfo__buttons">
                            <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_basket">
                                <img src="img/icons/basket32.png" alt="">
                            </div>
                            <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_favorite">
                                <img src="img/icons/heart32.png" alt="">
                            </div>
                        </div>
                        <div class="carousel__banner__interaction__info__shopInfo__priceTag">
                            <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices">
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__newPrice txt">${game_info.newPrice} ₽</div>
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__oldPrice txt">${game_info.oldPrice} ₽</div>
                            </div>
                            <div class="carousel__banner__interaction__info__shopInfo__priceTag__discount flex-center txt">${discount}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        carousel_gd_html.innerHTML += `<div class="carousel__bg ${count === 0 ? 'carousel__bg_active' : ''}" order = "${count}">
                                            <img src="${game_info.bigBanner}" alt="">
                                        </div>`
        count += 1;
    });
}

make_carousel()

function scroll_carousel(bool) {
    let carusel_items = document.querySelectorAll('.carousel__banner');
    let carusel_bg = document.querySelectorAll('.carousel__bg');

    let btl = document.querySelector('#carousel_button_left')
    let btr = document.querySelector('#carousel_button_right')

    btl.disabled = true
    btr.disabled = true

    document.querySelector('.carousel__bg_active').classList.remove('carousel__bg_active');

    if (bool) {
        let i = 0;
        carusel_items.forEach(html_elem => {
            const count = Number(html_elem.getAttribute('order')) - 1;
            html_elem.setAttribute('order', count);
            html_elem.style = count < 0 ? 
                `z-index: ${carusel_items.length + 2};
                transform: scale(1.1) translateX(80%);
                filter: blur(10px);
                opacity: 0;
                visibility: hidden;` :

                `${count === 0 ? 'margin-left: 0' : ''};
                z-index: ${carousel_banner_list.length - count + 1};
                transform: scale(${1 - count * 0.05});
                filter: blur(${count}px);
                }`
            html_elem.getElementsByTagName('a')[0].style = `${count === 0 ? 'display: block' : 'display: none'}`;

            carusel_bg[i].setAttribute('order', count);
            if (count == 0) {
                carusel_bg[i].classList.add('carousel__bg_active');
            }
            i++
        })
    }

    else {
        let i = 0;
        carusel_items.forEach(html_elem => {
            console.log(html_elem.getAttribute('order'));
            const count = Number(html_elem.getAttribute('order')) + 1;
            html_elem.setAttribute('order', count);
            html_elem.style = count < 0 ? 
                `z-index: ${carusel_items.length + 2};
                transform: scale(1.1) translateX(80%);
                filter: blur(10px);
                opacity: 0;
                visibility: hidden;` :

                `${count === 0 ? 'margin-left: 0' : ''};
                z-index: ${carousel_banner_list.length - count + 1};
                transform: scale(${1 - count * 0.05});
                filter: blur(${count}px);
                }`
            html_elem.getElementsByTagName('a')[0].style = `${count === 0 ? 'display: block' : 'display: none'}`;


            carusel_bg[i].setAttribute('order', count);
            if (count == 0) {
                carusel_bg[i].classList.add('carousel__bg_active');
            }
            i++
        })
    } 
    
    //Стиль неактивной кнопки меняется в ксс, там можно сделать проверку на disabled
    document.querySelectorAll('.carousel__buttons__button_disactive').forEach(elem => elem.classList.remove('carousel__buttons__button_disactive'));
    // console.log(Number(carusel_items[0].getAttribute('order')));

    setTimeout(() => {
        if (Number(carusel_items[0].getAttribute('order')) >= 0){
            btl.disabled = true
            btr.disabled = false
            btl.classList.add('carousel__buttons__button_disactive');
        } else if (Number(carusel_items[carusel_items.length - 1].getAttribute('order')) === 0){
            btl.disabled = false
            btr.disabled = true
            btr.classList.add('carousel__buttons__button_disactive');
        }
        else {
            btl.disabled = false
            btr.disabled = false
        }
    }, 505)
}
