const bank_list = get_bank_list_request();
let buyForm = document.forms.buy;
let basket_list = get_basket_list();
const container = document.querySelector('.basketContainer');

function update_basket_info() {
    basket_list = get_basket_list();
    if (basket_list.length === 0) { container.classList.add('basketContainer_empty'); return } 
    make_basket_info();
}

function make_basket_info() {
    const new_price = basket_list.reduce((acc, game) => acc + game.newPrice, 0);
    const old_price = basket_list.reduce((acc, game) => acc + game.oldPrice, 0);
    container.querySelector('#basket_newPrice').innerText = `${new_price} ₽`;
    container.querySelector('#basket_oldPrice').innerText = `${old_price} ₽`;
    container.querySelector('#basket_discount').innerText = `${Math.round((old_price - new_price) / old_price * 100)}%`;
}

function make_basket() {
    if (basket_list.length === 0) {
        if (container.classList.contains('basketContainer_empty')) { return }
        container.classList.add('basketContainer_empty'); return
    }
    if (container.classList.contains('basketContainer_empty')) container.classList.remove('basketContainer_empty');
    make_basket_info();
    container.querySelector('#basket_games_list').innerHTML += basket_list.reduce((summ_game, game) => summ_game + get_lineGames_html(game, 'basket'), "");
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
init_hover(document.querySelector('#basket_games_list'));