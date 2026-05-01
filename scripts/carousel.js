let carousel_banner_list = get_carousel_bannet_list_request();

// const colorThief = new ColorThief();

// function dominant_color(img) {
//     img.crossOrigin = 'Anonymous';
//     img.addEventListener('load', function() {
//         // Получаем доминирующий цвет [R, G, B]
//         const dominantColor = colorThief.getColor(img);
//         console.log('Самый частый цвет (RGB):', dominantColor);
//     });
//     return dominantColor;
// }

function get_carousel_bannet_list_request() {
    return games_list.filter(game_info => game_info.carousel === true);
}

// let game_info = {
//     'carusel': [
//         {
//             'id': 1,
//         },
//         {
//             'id': 2,
//         },
//         {
//             'id': 3,
//         },
//     ],
// }

function make_carousel() {
    let carusel_html = document.querySelector('#grid_banners');
    let list_html = "";
    // let carousel_bg_html = document.querySelector('#carousel_grid_bg');
    let count = 0;

    carousel_banner_list.forEach(game_info => {
        list_html += get_banner_html(count, game_info, carousel_banner_list);
        // carousel_bg_html.innerHTML += get_banner_bg_html(count, game_info);
        count += 1;
    });

    document.querySelector('#grid_banners').innerHTML = list_html;

    if (window.innerWidth < 551) {
        document.querySelectorAll('.carousel__banner__imgBlock img').forEach(img => {
            img.src = img.dataset.v;
        });
    }
    else {
        document.querySelectorAll('.carousel__banner__imgBlock img').forEach(img => {
            img.src = img.dataset.h;
        });
    }
}

make_carousel();

// document.querySelectorAll('.carousel__banner__imgBlock img').forEach(img => {
//     img.crossOrigin = 'Anonymous';
//     img.addEventListener('load', function() {
//         // Получаем доминирующий цвет [R, G, B]
//         const dominantColor = colorThief.getColor(img);
//         img.closest('.carousel__banner__imgBlock').style.boxShadow = `0 0 150px -50px rgba(${dominantColor}, 1)`;
//         console.log('Самый частый цвет (RGB):', dominantColor);
//     });
// })

function scroll_carousel(bool) {
    let carusel_items = document.querySelectorAll('.carousel__banner');
    // let carusel_bg = document.querySelectorAll('.carousel__gridBG__bg');

    let btl = document.querySelector('#carousel_button_left');
    let btr = document.querySelector('#carousel_button_right');

    btl.disabled = true;
    btr.disabled = true;

    // document.querySelector('.carousel__gridBG__bg_active').classList.remove('carousel__gridBG__bg_active');

    if (bool) {
        let i = 0;
        carusel_items.forEach(html_elem => {
            const count = Number(html_elem.getAttribute('order')) - 1;
            html_elem.setAttribute('order', count);
            html_elem.style = count < 0 ? 
                `z-index: ${carusel_items.length + 2};
                transform: scale(1.1) translateX(80%);
                opacity: 0;
                visibility: hidden;` :

                `${count === 0 ? 'margin-left: 0' : ''};
                z-index: ${carousel_banner_list.length - count + 1};
                transform: scale(${1 - count * 0.05});
                }`;
            html_elem.getElementsByTagName('a')[0].style = `${count === 0 ? 'display: block' : 'display: none'}`;

            // carusel_bg[i].setAttribute('order', count);
            // if (count == 0) {
            //     carusel_bg[i].classList.add('carousel__gridBG__bg_active');
            // }
            i++;
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
                opacity: 0;
                visibility: hidden;` :

                `${count === 0 ? 'margin-left: 0' : ''};
                z-index: ${carousel_banner_list.length - count + 1};
                transform: scale(${1 - count * 0.05});
                }`;
            html_elem.getElementsByTagName('a')[0].style = `${count === 0 ? 'display: block' : 'display: none'}`;


            // carusel_bg[i].setAttribute('order', count);
            // if (count == 0) {
            //     carusel_bg[i].classList.add('carousel__gridBG__bg_active');
            // }
            i++;
        })
    } 
    
    //Стиль неактивной кнопки меняется в ксс, там можно сделать проверку на disabled
    document.querySelectorAll('.carousel__buttons__button_disactive').forEach(elem => elem.classList.remove('carousel__buttons__button_disactive'));
    // console.log(Number(carusel_items[0].getAttribute('order')));

    setTimeout(() => {
        if (Number(carusel_items[0].getAttribute('order')) >= 0){
            btl.disabled = true;
            btr.disabled = false;
            btl.classList.add('carousel__buttons__button_disactive');
        } else if (Number(carusel_items[carusel_items.length - 1].getAttribute('order')) === 0){
            btl.disabled = false;
            btr.disabled = true;
            btr.classList.add('carousel__buttons__button_disactive');
        }
        else {
            btl.disabled = false;
            btr.disabled = false;
        }
    }, 505);
}
