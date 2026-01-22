const bank_list = get_bank_list_request();
let buyForm = document.forms.buy;
let basket_list = get_basket_list_request();

function get_basket_list_request() {
    const basket_list = JSON.parse(document.cookie).basket_list;

    let basket_list_infos = [];
    games.forEach(info => {
        if (contains(basket_list, info.id)) {
            basket_list_infos[info.id] = info;
        }
    })
    return basket_list_infos;
}

function update_basket_list() {
    basket_list = get_basket_list_request();
}

function make_basket_info() {
    update_basket_list()
    const new_price = basket_list.reduce((b, a) => b + a.newPrice, 0);
    const old_price = basket_list.reduce((b, a) => b + a.oldPrice, 0);

    document.getElementById('basket_newPrice').innerText = `${new_price} ₽`;
    document.getElementById('basket_oldPrice').innerText = `${old_price} ₽`;
    document.getElementById('basket_discount').innerText = `${Math.round((old_price - new_price) / old_price * 100)}%`;

    if (document.querySelector('.basketContainer__info_hidden') && document.querySelector('.basketContainer_empty')) {
        document.querySelector('#basket_info').classList.remove('basketContainer__info_hidden');
        document.querySelector('#basket_container').classList.remove('basketContainer_empty');
    }
}

function make_basket() {
    // let gameListInfo = get_basket_game_list();

    if (!basket_list.length) {
        setTimeout(() => {
            document.querySelector('#gameList_emptyBlock').classList.add('basketContainer__gameList__games__empty_active');
            document.querySelector('#basket_info').classList.add('basketContainer__info_hidden');
            document.querySelector('#basket_container').classList.add('basketContainer_empty');
        }, 200)
        return
    }

    make_basket_info();
    document.querySelector('#basket_games_list').innerHTML += basket_list.reduce((summ_game, game) => summ_game + get_basket_game_html(game), "");
}

// function updateBasket() {
//     let basketGrid = document.getElementById("basketGrid");
//     let basket_list = JSON.parse(basket_list_string).basket_list;
//     if (basket_list.length == 0) {
//         priceInBasket.textContent = "0р";
//         amountGameInBasket.textContent = "0";
//         let noContentNotificationBasket = document.getElementById("noContentNotificationBasket");
//         noContentNotificationBasket.style.display = "flex";
//     }
//     else {
//         let summPrices = 0;
//         const gamesInfo = getInfoGames();
//         gamesInfo.forEach(function(gameInfo) {
//             noContentNotificationBasket.style.display = "none";
//             let blockGameHTML = `<div class="content__mainContent__category__flex__gameGeneretionAccount__inner">
//                                     <img src="${gameInfo.imgLink}" class="content__mainContent__category__flex__gameGeneretionAccount__inner__bg"></img>
//                                     <div class="content__mainContent__category__flex__gameGeneretionAccount__inner__bg_video"><video src="${gameInfo.trailerLink}" loop="loop" autoplay muted></video></div>
//                                     <div class="content__mainContent__category__flex__gameGeneretionAccount__inner__bottomInfo">
//                                         <div class="content__mainContent__category__flex__gameGeneretionAccount__inner__bottomInfo__left">
//                                             <div class="content__mainContent__category__flex__gameGeneretionAccount__inner__bottomInfo__left__priceNew txt">${gameInfo.newPrice}р</div>
//                                             <div class="content__mainContent__category__flex__gameGeneretionAccount__inner__bottomInfo__left__priceOld txt">${gameInfo.oldPrice}р</div>
//                                         </div>
//                                         <div class="content__mainContent__category__flex__gameGeneretionAccount__inner__bottomInfo__right">
//                                             <button class="content__mainContent__category__flex__gameGeneretionAccount__inner__bottomInfo__right__button" onclick="deleteGameInBasket(gameList[${gameInfo.id}])"><img src="img/icons/minus16.png" alt=""></button>
//                                             <a href="${gameInfo.gameLink}" class="content__mainContent__category__flex__gameGeneretionAccount__inner__bottomInfo__right__button"><img src="img/icons/link16.png" alt=""></a>
//                                         </div>
//                                     </div>
//                                 </div>`;
//             let div = document.createElement('div');
//             div.classList.add("content__mainContent__category__flex__gameGeneretionAccount");
//             div.innerHTML = blockGameHTML;
//             div.id = "gameInBasket" + gameInfo.id;


//             basketGrid.append(div);
//             summPrices += gameInfo.newPrice;
//         })

//         priceInBasket.textContent = summPrices + "р";
//         amountGameInBasket.textContent = gameBasket.length.toString();
//     }
// }

function delete_basket_request(id) {
    // delete basketProducts[basketProducts.findIndex(game => game.id == id)];
    basketProducts.splice(basketProducts.findIndex(game => game.id == id), 1);
}

function delete_game_basket(game_id, game_name) {
    update_basket_list();
    delete_game_in_basket(game_id, game_name);
    delete_basket_request(game_id);
    make_basket_info();
    document.querySelector(`[gameId$="${game_id}"]`).classList.add('basketContainer__gameList__games__game_hidden');
    if (basket_list.length == 0) {
        make_basket();
    }
    // document.querySelectorAll('.basketContainer__gameList__games__game')[n].classList.add('basketContainer__gameList__games__game_hidden');
}

function open_alert(notification_list) {
    notification_list.forEach(error_info => {
        console.log(error_info.name);
        if (document.querySelector(`.for-input__notification_${error_info.name}`)) {
            document.querySelector(`.for-input__notification_${error_info.name}`).style.visibility = "visible";
            document.querySelector(`.for-input__notification_${error_info.name} .for-input__notification__heading`).innerHTML = error_info.message;
        }
    })
}

function open_notifacation_gray() {
    document.getElementById('notification_gray').style.visibility = "visible";
}

function close_notification(title) {
    document.querySelector(`.for-input__notification_${title}`).style.visibility = "hidden";
}

function goBuy() {
    function open_stepBuy(title) {
        let botName = "Yeat";
        const basket_info_h2 = document.querySelector('#basketInfo_h2');
        const dictionary_for_basketH2 = {
            'bot_inviting': "Бот добавляет вас в друзья", 
            'bot_profile': "Примите приглашение от ", 
            'bot_gifting': "Ожидайте подарок от бота", 
            'giftbox': "Примите подарок от бота", 
            'thx': "Спасибо за покупку"
        };

        document.querySelectorAll('.basketContainer__info__totalBlock__basketBlock').forEach(elem => {
            elem.style.display = "none";
        })
        document.querySelector(`[buyStepTitle$="step_${title}"]`).style.display = "flex";
        basket_info_h2.innerHTML = dictionary_for_basketH2[title];
        if (title == 'bot_profile') {
            basket_info_h2.innerHTML += botName;
        }
    }

    function check_promocode_request(promocode) {
        return {
            'status': false, // true or false
            'message': "Недействительный промокод" // error 
        }
    }

    let error_dict = [];

    
    if (!buyForm.input_tradeLink.value) {
        error_dict.push({
            'name': "trade_link",
            'message': "Укажите трейд ссылку" // text error
        });
    }
    if (!buyForm.input_email.value) {
        error_dict.push({
            'name': "email",
            'message': "Укажите Email" // text error
        });
    }
    if (!buyForm.bank_id.value) {
        error_dict.push({
            'name': "paymentMethod",
            'message': "Выберите способ оплаты" // text error
        });
    }
    if (buyForm.input_promocode.value) {
        let answer = check_promocode_request(String(buyForm.input_promocode.value));
        if (!answer.status) {
            error_dict.push({
            'name': "promocode",
            'message': answer.message // text error
        });
            
        }
    }

    if (!document.querySelector('.basketContainer__info__totalBlock__agreeBlock__checkBox_active')) {
        document.querySelector(`.basketContainer__info__totalBlock__agreeBlock`).classList.add('basketContainer__info__totalBlock__agreeBlock_notification');
        error_dict.push({
            'name': "checkBox",
            'message': "Согласитесь с Условиями и политикой конфиденциальности" // text error
        });
    }

    open_alert(error_dict);

    if (!error_dict.length) {
        open_stepBuy('bot_inviting');

        document.querySelectorAll('.basketContainer__gameList__games__game__right__closeBlock').forEach(elem => {
            elem.classList.add('basketContainer__gameList__games__game__right__closeBlock_hidden')
        });

        document.getElementById("exit_button").classList.add('basketContainer__info__exitButton_hidden');

        setTimeout(function() {
            open_stepBuy('bot_profile');
        }, 4000)
        setTimeout(function() {
            open_stepBuy('bot_gifting');
        }, 6000)
        setTimeout(function() {
            open_stepBuy('giftbox');
        }, 8000)
        setTimeout(function() {
            open_stepBuy('thx');

            document.querySelectorAll('.basketContainer__gameList__games__game__forHover').forEach(elem => {
                elem.style.opacity = "0";
            });

            document.getElementById("exit_button").classList.remove('basketContainer__info__exitButton_hidden');

            document.querySelector('#basket_games_list_bg').style.opacity = "1";
        }, 10000)
    }
}

function get_bank_list_request() {
    return {
        "00001": "Мир",
        "00002": "Visa",
        "00003": "Kiwi",
        "00004": "Ю Касса",
        "00005": "Mastercard",
    };
}
// от n избавляться
function choose_bank(bank_id) {
    document.querySelectorAll('.basketContainer__info__totalBlock__paymentMethods__body__bank_active').forEach(elem => {
        elem.classList.remove('basketContainer__info__totalBlock__paymentMethods__body__bank_active');
    })
    document.querySelector(`#bank_${bank_id}`).classList.add('basketContainer__info__totalBlock__paymentMethods__body__bank_active');
    
    buyForm.bank_id.value = bank_id;
    close_notification('paymentMethod');

    open_payment_methods_handler();
    document.getElementById("text_pay_method").textContent = bank_list[bank_id];
}

function basket_checkBox_click() {
    const checkMark = document.querySelector('.basketContainer__info__totalBlock__agreeBlock__checkBox');
    if (document.querySelector('.basketContainer__info__totalBlock__agreeBlock__checkBox_active')) {
        checkMark.classList.remove('basketContainer__info__totalBlock__agreeBlock__checkBox_active');
        return
    }

    document.querySelector(`.basketContainer__info__totalBlock__agreeBlock`).classList.remove('basketContainer__info__totalBlock__agreeBlock_notification');
    checkMark.classList.add('basketContainer__info__totalBlock__agreeBlock__checkBox_active');
}

// сделать с id вместо n
function hover_close_basket(status, game_id) { 
    if (status) {
        document.querySelector(`[bgBlueId$="${game_id}"]`).style.opacity = "0";
        document.querySelector(`[bgRedId$="${game_id}"]`).style.opacity = "1";
        return
    }
    document.querySelector(`[bgBlueId$="${game_id}"]`).style.opacity = "1";
    document.querySelector(`[bgRedId$="${game_id}"]`).style.opacity = "0";
}

function open_payment_methods_handler() {
    // const active_nav = document.querySelector('.basketContainer__info__totalBlock__nav_active');
    // if (active_nav) {
    //     active_nav.classList.remove('basketContainer__info__totalBlock__nav_active');
    //     return
    // }

    // document.querySelector('.basketContainer__info__totalBlock__nav').classList.add('basketContainer__info__totalBlock__nav_active');
    document.querySelector('.basketContainer__info__totalBlock__paymentMethods').classList.toggle('basketContainer__info__totalBlock__paymentMethods_active');
}

make_basket();