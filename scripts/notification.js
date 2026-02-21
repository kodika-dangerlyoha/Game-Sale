function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

let list_notifications = [];

function check_unviewed_count() {
    let i = 0;
    list_notifications.forEach(e => {
        if (!e.viewed) {
            i++;
        }
    });

    return i;
}

function init_notification() {
    if (!localStorage.notifications) {
        localStorage.setItem('notifications', '[]');
    }

    list_notifications = JSON.parse(localStorage.notifications);

    update_notification();
}

function update_notification() {
    // unviewed_count = 0;

    if (list_notifications.length === 0) {
        document.querySelector('#grid_notification').innerHTML = `<div class="header__notification__grid__nothing flex-center txt">
                                                                        <div>Нет уведомлений</div>
                                                                    </div>`;
        if (document.querySelector('#profile_notification_grid')) {
            document.querySelector('#profile_notification_grid').innerHTML = `<div class="header__notification__grid__nothing flex-center txt">
                                                                        <div>Нет уведомлений</div>
                                                                    </div>`;
        }
    }

    else {
        let notification_html = "";
        const list_notifications_small = list_notifications.slice(0, 10);

        list_notifications_small.forEach(elem => {
            notification_html += get_notification_html(elem.status, elem.message, elem.viewed, elem.id);
            // if (!elem.viewed) unviewed_count++;
        })

        document.querySelector('#grid_notification').innerHTML = notification_html;

        if (document.querySelector('#profile_notification')) {
            notification_html = "";
            list_notifications.slice(0, 10).forEach(elem => {
                notification_html += get_notification_html(elem.status, elem.message, elem.viewed, elem.id);
            })
            document.querySelector('#profile_notification_grid').innerHTML = notification_html;
            document.querySelector('.pNotification__header__counter').innerHTML = list_notifications.length;
        }
    }

    update_counter(check_unviewed_count(), 'notification');
}

function view_notification(el) {
    const id = el.dataset.id;
    list_notifications.forEach(el => {
        if (el.id === id) {
            el.viewed = true;
        }
    });
    // unviewed_count -= 1;
    update_counter(check_unviewed_count(), 'notification');
    localStorage.notifications = JSON.stringify(list_notifications);

    document.querySelectorAll(`[data-id="${id}"]`).forEach(e => {
        e.classList.remove('header__notification__grid__notification_new');
    })
    // el.classList.remove('header__notification__grid__notification_new');
}

function show_temp_notification(status, message, id_notification) {
    document.querySelector('#grid_temporary_notification').innerHTML = get_temp_notification_html(status, message, id_notification);

    setTimeout(() => {
        const temp_notification = document.querySelector(`#grid_temporary_notification #${id_notification}`);
        if (temp_notification) {
            temp_notification.remove();
        }
    }, 5000);
}

// function show_last_notification() {
//     const last_notification = list_notifications[0];

//     document.querySelector('#grid_temporary_notification').innerHTML = get_temp_notification_html(last_notification.status, last_notification.message, last_notification.id_notification);

//     setTimeout(() => {
//         const temp_notification = document.querySelector(`#grid_temporary_notification #${last_notification.id_notification}`);
//         if (temp_notification) {
//             temp_notification.remove();
//         }
//     }, 5000);
// }

function add_notification(message, status) {
    const id_notification = generateId();
    list_notifications.unshift({'id': id_notification, 'status': status, 'message': message, 'viewed': false});
    localStorage.notifications = JSON.stringify(list_notifications);
    update_notification();
    show_temp_notification(status, message, id_notification);
}

init_notification();

document.querySelector('#grid_notification').addEventListener('mouseover', function(evt) {
    if (evt.target.classList.contains('header__notification__grid__notification_new')) {
        view_notification(evt.target);
    }
});

// ------------- Подгрузка уведомлений 

const scroll_container = document.querySelector('#profile_notification_grid');

if (scroll_container) {
    let notification_items = document.querySelectorAll('#profile_notification_grid .header__notification__grid__notification');
    let last_notification_item = notification_items[notification_items.length - 1];

    scroll_container.addEventListener('mouseover', function(evt) {
        if (evt.target.classList.contains('header__notification__grid__notification_new')) {
            view_notification(evt.target);
        }
    });

    function update_last_item_notification() {
        if (last_notification_item) observer.unobserve(last_notification_item);

        last_notification_item = notification_items[notification_items.length - 1];

        if (last_notification_item) observer.observe(last_notification_item);
    }

    function load_more_notification() {
        let scroll_container_more_html = "";

        const list_notification_more = list_notifications.slice(notification_items.length, notification_items.length + 10);
        list_notification_more.forEach(elem => {
            scroll_container_more_html += get_notification_html(elem.status, elem.message, elem.viewed, elem.id);
        });

        scroll_container.innerHTML += scroll_container_more_html;
        notification_items = document.querySelectorAll('#profile_notification_grid .header__notification__grid__notification');
        
        if (notification_items.length < list_notifications.length) {
            update_last_item_notification();
        }
        else {
            observer.unobserve(last_notification_item);
            console.log('unobservee');
        }
    }

    const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log('!!!');
                load_more_notification();
            }
        },
        {
            root: scroll_container, // Наблюдаем внутри этого контейнера
            threshold: 0,
            rootMargin: '0px 0px 100px 0px' // Сработает за 100px до конца
        }
    );

    if (list_notifications.length > 10) {
        observer.observe(last_notification_item);
    }
}

// function show_temporary_notification() {
//     if (document.querySelector('.header__notification')) {
//         document.querySelector('.header__notification').classList.remove('header__notification_active');
//         document.getElementById('notification_button').classList.remove('navs__nav_active');
//         document.querySelector('.header__notification').style.display = "none";
//     }

//     const notification = document.querySelector('#temporary_notification');
//     const notification_grid_notification = document.querySelectorAll('#grid_temporary_notification .header__notification_temporary__grid__notification');


//     if (!document.querySelector('.header__notification_show')) {
//         notification.classList.add('header__notification_show');
//         notification_grid_notification.forEach(elem => elem.classList.add('header__notification_temporary__grid__notification_hidden'))
//         return
//     }
//     notification.classList.remove('header__notification_show');
//     notification.classList.add('header__notification_show');
//     notification_grid_notification.forEach(elem => elem.classList.add('header__notification_temporary__grid__notification_hidden'))
// }

// make_notification()