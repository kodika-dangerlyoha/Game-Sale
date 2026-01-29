make_game_card_info(games[0]);

const for_scroll = document.querySelector('.forScroll');
const header_center = document.querySelector('#centerHeader_gameCard');
const mini_game_card = document.querySelector('.miniGameCard');
const main_info = document.querySelector('.mainInfo');
let screenshots_count = 0;
let video_count = 0;
let this_count = 0;

const scroll_horizontal = document.querySelector('#interface_scroll_horizontal');

scroll_horizontal.addEventListener('wheel', (e) => {
    console.log('scroll');
    e.preventDefault(); // Отменяем вертикальный скролл
    scroll_horizontal.scrollLeft += e.deltaY; // deltaY - вертикальное движение колеса
    console.log(scroll_horizontal.scrollLeft);
});

// const scroll_horizontal = document.querySelector('#interface_scroll_horizontal');
// let target = scroll_horizontal.scrollLeft;

// const maxScroll = scroll_horizontal.scrollWidth - scroll_horizontal.clientWidth;
// const minScroll = 0;

// scroll_horizontal.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     target += e.deltaY;
//     if (target < minScroll) target = minScroll;
//     if (target > maxScroll) target = maxScroll;

//     console.log(target);
//     // Запускаем плавную прокрутку
//     smoothScrollTo(target);
// }, { passive: false });

// function smoothScrollTo(targetPosition) {
//     const start = scroll_horizontal.scrollLeft;
//     const change = targetPosition - start;
//     const duration = 100; // мс
//     let startTime = null;
    
//     function animate(currentTime) {
//         if (!startTime) startTime = currentTime;
//         const elapsed = currentTime - startTime;
//         const progress = Math.min(elapsed / duration, 1);
        
//         // Простая линейная анимация
//         // Для лучшего эффекта используйте ease-функции из примера 3
//         scroll_horizontal.scrollLeft = start + (change * progress);
        
//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         }
//     }
    
//     requestAnimationFrame(animate);
// }

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
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
    });
}, {
    root: null, // отслеживаем относительно viewport
    threshold: 0, // срабатывает при любом пересечении
    rootMargin: '-100px 0px 0px 0px' // top, right, bottom, left
});

// Начинаем наблюдать за элементом
observer.observe(document.querySelector('#main_info'));

window.addEventListener("scroll", function(){
    document.querySelector('.bigImgBlock').style.transform = "translateY(" + (this.scrollY) / 2 + "px)";
    for_scroll.style.opacity = (this.scrollY) / 300;
    for_scroll.style.transform = "translateY(" + (this.scrollY) / 2 + "px)";
});

function make_mediaList(game) {
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
        change_img_fullScreen(link);
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

function toggle_fullScreen() {
    const active = document.querySelector('.fullScreen_active');
    const block = document.querySelector('.fullScreen');
    if (active) {
        block.classList.remove('fullScreen_active');
        document.body.style.overflow = 'auto';
    }
    else {
        block.classList.add('fullScreen_active');
        document.body.style.overflow = 'hidden';
    }
}

function change_img_fullScreen(link) {
    document.querySelector('#fullScreen_img').src = link;
    document.querySelector('#game_banner').src = link;
}
