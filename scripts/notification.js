// let notification_list = get_notification_list_request();

// function get_notification_list_request() {
//     const notification_list = JSON.parse(document.cookie).notification_list;

//     return notification_list.reduce((summ_notification, notification_info) => summ_notification + get_notification_html(notification_info.type, notification_info.value), "");;
// }

// function create_new_notification() {
//     make_notification()
// }

// function set_notifacation_request(type, value) {
//     let cookie = JSON.parse(document.cookie);
//     let notifacation_info = {
//         'type': type,
//         'value': value,
//     }
//     cookie.notification_list.push(notifacation_info);
//     document.cookie = JSON.stringify(cookie);
//     console.log(document.cookie);

//     notification_list = get_notification_list_request();
//     make_notification();
// }

// function make_notification() {
//     if (notification_list == "") {
//         notification_list = `<div class="header__notification__grid__notification notification_nothing">
//                                 <div class="header__notification__grid__notification__point txt">
//                                     <div class="header__notification__grid__notification__point__smile">:(</div>
//                                 </div>
//                                 <div class="header__notification__grid__notification__text txt">Нет новый уведомлений</div>
//                             </div>`
//     }
//     document.querySelector('#grid_notification').innerHTML = notification_list;
// }

let list_notifications = [];

function update_notification() {
    let notification_html = "";
    list_notifications.forEach(elem => {
        notification_html += get_notification_html(elem.status, elem.message);
    })
    document.querySelector('#grid_notification').innerHTML = notification_html;
}

function open_notifications() {
    const temp_notification = document.querySelector('#temporary_notification');
    const notification = document.querySelector('.header__notification');
    const notification_button = document.getElementById('header_button_notification');
    if (!document.querySelector('.header__notification_active')) {
        temp_notification.style.right = '330px';
        notification.style.display = "block";
        notification_button.classList.add('header__nav__button_active');
        setTimeout(() => notification.classList.add('header__notification_active'), 10);
        return
    }
    notification.classList.remove('header__notification_active');
    notification_button.classList.remove('header__nav__button_active');
    temp_notification.style.right = '15px';
    setTimeout(() => notification.style.display = "none", 160);
}

function add_notification(message, status) {
    list_notifications.unshift({'status': status, 'message': message});
    update_notification();

    const notification_id = `notification${document.querySelectorAll('.header__notification_temporary__grid__notification').length}`;
    document.querySelector('#grid_temporary_notification').innerHTML += get_temp_notification_html(status, message, notification_id);
    setTimeout(() => {
        document.querySelector(`#grid_temporary_notification #${notification_id}`).remove();
    }, 5000)
    // show_temporary_notification();
}

function show_temporary_notification() {
    if (document.querySelector('.header__notification')) {
        document.querySelector('.header__notification').classList.remove('header__notification_active');
        document.getElementById('notification_button').classList.remove('navs__nav_active');
        document.querySelector('.header__notification').style.display = "none";
    }

    const notification = document.querySelector('#temporary_notification');
    const notification_grid_notification = document.querySelectorAll('#grid_temporary_notification .header__notification_temporary__grid__notification');

    console.log(notification_grid_notification)

    if (!document.querySelector('.header__notification_show')) {
        notification.classList.add('header__notification_show');
        notification_grid_notification.forEach(elem => elem.classList.add('header__notification_temporary__grid__notification_hidden'))
        return
    }
    notification.classList.remove('header__notification_show');
    notification.classList.add('header__notification_show');
    notification_grid_notification.forEach(elem => elem.classList.add('header__notification_temporary__grid__notification_hidden'))
}

// make_notification()