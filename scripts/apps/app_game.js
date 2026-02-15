make_game_card_info(games[0]);
set_top_img_paralax(550, 1);

function make_mediaList(game) {
    let screenshots_count = 0;
    let video_count = 0;
    // let this_count = 0;
    let mediaList_html = "";
    let i = 0;
    
    // mediaList_html += get_media_screenshot(game.imgH, i, screenshots_count);
    // i++;
    // screenshots_count++;

    game.trailers.forEach(e => {
        mediaList_html += get_media_video(e.preview, i, video_count, e.video);
        i++;
        video_count++;
    })

    game.screenshots.forEach(link => {
        mediaList_html += get_media_screenshot(link, i, screenshots_count);
        i++;
        screenshots_count++;
    })
    document.querySelector(`#game_medialist`).innerHTML = mediaList_html;

    // document.querySelectorAll('.mainInfo__banner__interface__bottom__medialist__media')[0].classList.add('mainInfo__banner__interface__bottom__medialist__media_active');
    
    const video_0 = document.querySelector('.video-0');
    const screenshot_0 = document.querySelector('.screenshot-0');
    
    if (video_0) {
        if (screenshot_0) {
            screenshot_0.click();
            document.querySelector('.mainInfo__banner__visual__imgBlock').style.backgroundImage = `url('${game.trailers[0].preview}')`;
            document.querySelector('.mainInfo__banner__interface__bottom__medialist__media_active').classList.remove('mainInfo__banner__interface__bottom__medialist__media_active');
        }
    }

    else if (screenshot_0) {
        screenshot_0.click();
    }
}

make_mediaList(games[0]);

// const for_scroll = document.querySelector('.forScroll');
const header_center = document.querySelector('#centerHeader_gameCard');
const mini_game_card = document.querySelector('.miniGameCard');
const main_info = document.querySelector('.mainInfo');

// function check_element_overflow(container, content) {
//     const container_rect = container.getBoundingClientRect();
//     const content_rect = content.getBoundingClientRect();
    
//     return {
//         top: content_rect.top < container_rect.top,
//         right: content_rect.right > container_rect.right,
//         bottom: content_rect.bottom > container_rect.bottom,
//         left: content_rect.left < container_rect.left
//     };
// }

const container = document.querySelector('#game_categories');
const content_right = container.querySelectorAll('a')[container.querySelectorAll('a').length - 1];
const content_left = container.querySelectorAll('a')[0];
const scroll_media_banner = document.querySelector('#interface_scroll_horizontal');
const scroll_categories = document.querySelector('#game_categories');

function update_scroll_shadows(element, overflow) {
    element.classList.remove('mainInfo__info__category_shadowLeft', 'mainInfo__info__category_shadowRight', 'mainInfo__info__category_shadowAll');
    
    if (overflow.right && overflow.left) {
        element.classList.remove('mainInfo__info__category_shadowLeft', 'mainInfo__info__category_shadowRight');
        element.classList.add('mainInfo__info__category_shadowAll');
    }
    else if (overflow.right && !overflow.left) {
        element.classList.remove('mainInfo__info__category_shadowRight', 'mainInfo__info__category_shadowAll');
        element.classList.add('mainInfo__info__category_shadowLeft');
    }
    else if (!overflow.right && overflow.left){
        element.classList.remove('mainInfo__info__category_shadowLeft', 'mainInfo__info__category_shadowAll');
        element.classList.add('mainInfo__info__category_shadowRight');
    }
}

function check_element_overflow_cat() {
    const container_rect = container.getBoundingClientRect();
    const content_rect_right = content_right.getBoundingClientRect();
    const content_rect_left = content_left.getBoundingClientRect();
    
    return {
        right: content_rect_right.right > container_rect.right,
        left: content_rect_left.left < container_rect.left
    };
}

function horizontal_scroll(evt) {
    evt.preventDefault();
    evt.currentTarget.scrollLeft += evt.deltaY;
}  

function horizontal_scroll_wShadow(evt) {
    evt.preventDefault();
    const elem = evt.currentTarget;
    elem.scrollLeft += evt.deltaY;

    setTimeout(() => {
        const overflow = check_element_overflow_cat();
        console.log(elem);
        update_scroll_shadows(elem, overflow);
    }, 500);
}

function add_horizontal_scroll(el) {
    const type = el.dataset.scrolltype;
    if (type == "shadow") {
        el.addEventListener('wheel', (evt) => horizontal_scroll_wShadow(evt));
    }
    else if (type == "def") {
        el.addEventListener('wheel', (evt) => horizontal_scroll(evt));
    }
}

update_scroll_shadows(container, check_element_overflow_cat());
add_horizontal_scroll(scroll_media_banner);
add_horizontal_scroll(scroll_categories);


const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
        mini_game_card.style.display = "flex";
        header_center.classList.add('header__center_hidden');

        setTimeout(() => {
            header_center.style.display = "none";
        }, 50);
        
        setTimeout(() => {
            mini_game_card.classList.add('miniGameCard_show');
            main_info.classList.add('mainInfo_hidden');
        }, 60);
    } 
    else {
        header_center.style.display = "flex";
        mini_game_card.classList.remove('miniGameCard_show');
        main_info.classList.remove('mainInfo_hidden');
        
        setTimeout(() => {
            mini_game_card.style.display = "none";
        }, 200)

        setTimeout(() => {
            header_center.classList.remove('header__center_hidden');
        }, 210)
    }
}, {
    root: null, // отслеживаем относительно viewport
    threshold: 0, // срабатывает при любом пересечении
    rootMargin: '-100px 0px 0px 0px' // top, right, bottom, left
});

// Начинаем наблюдать за элементом
observer.observe(document.querySelector('#main_info'));

function change_media(this_treiler, id, link) {
    const active_block = document.querySelector('.mainInfo__banner__interface__bottom__medialist__media_active');
    if (active_block) {
        active_block.classList.remove('mainInfo__banner__interface__bottom__medialist__media_active');
    }

    let game_visual_inner = "";

    if (this_treiler) {
        game_visual_inner = get_video_gameCard_html(link);
        document.querySelector('.mainInfo__banner__interface__top').classList.add('mainInfo__banner__interface__top_hidden');
        document.querySelector(`.video-${id}`).classList.add('mainInfo__banner__interface__bottom__medialist__media_active');
        document.querySelector('.mainInfo__banner__interface__bottom__screenshotsIF').classList.add('mainInfo__banner__interface__bottom__screenshotsIF_hidden');
        document.querySelector('.videoIF').classList.remove('videoIF_hidden');
        
        document.querySelector('#game_visual').innerHTML = game_visual_inner;

        get_video();
        update_volume();
    }
    else {
        const videoIF__buttonTglScrList_closed = document.querySelector('.videoIF__buttonTglScrList_closed');
        if (videoIF__buttonTglScrList_closed) {
            videoIF__buttonTglScrList_closed.classList.remove('videoIF__buttonTglScrList_closed');
            document.querySelector('.mainInfo__banner__interface__bottom').classList.remove('mainInfo__banner__interface__bottom_hidden');
        }

        document.querySelector('.mainInfo__banner__interface__top').classList.remove('mainInfo__banner__interface__top_hidden');
        document.querySelector(`.screenshot-${id}`).classList.add('mainInfo__banner__interface__bottom__medialist__media_active');
        this_count = id;
        game_visual_inner = get_pic_gameCard_html(link);
        // change_img_fullScreen(link);
        document.querySelector('.mainInfo__banner__interface__bottom__screenshotsIF').classList.remove('mainInfo__banner__interface__bottom__screenshotsIF_hidden');
        document.querySelector('.videoIF').classList.add('videoIF_hidden');

        document.querySelector('#game_visual').innerHTML = game_visual_inner;
    }
}

function scroll_screenshots(n) {
    // document.querySelector('.mainInfo__banner__interface__bottom__medialist__media_active').classList.remove('mainInfo__banner__interface__bottom__medialist__media_active');
    this_count += n;
    
    if (this_count == screenshots_count) {
        this_count = 0;
        document.querySelector(`.screenshot-${this_count}`).click();
    }

    else if (this_count < 0) {
        this_count = screenshots_count - 1;
        document.querySelector(`.screenshot-${this_count}`).click();
    }

    else {
        document.querySelector(`.screenshot-${this_count}`).click();
    }
}

function toggle_screenshots_list() {
    document.querySelector('.videoIF__buttonTglScrList').classList.toggle('videoIF__buttonTglScrList_closed');
    document.querySelector('.mainInfo__banner__interface__bottom').classList.toggle('mainInfo__banner__interface__bottom_hidden');
}

// -------- Картинка во весь экран --------

const player = document.querySelector('#player');

async function toggle_fullScreen() {
    if (!document.fullscreenElement) {
        await player.requestFullscreen();
        player.classList.add('mainInfo__banner_fullscreen');
        return
    }
    document.exitFullscreen();
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        player.classList.remove('mainInfo__banner_fullscreen');
    }
});