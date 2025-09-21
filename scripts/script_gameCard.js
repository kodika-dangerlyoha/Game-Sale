make_game_card_info();

const for_scroll = document.querySelector('.forScroll');
const header_center = document.querySelector('#centerHeader_gameCard');
const mini_game_card = document.querySelector('.miniGameCard');
const main_info = document.querySelector('.mainInfo');

window.addEventListener("scroll", function(){
    document.querySelector('.bigImgBlock').style.transform = "translateY(" + (this.scrollY) / 2 + "px)";
    for_scroll.style.opacity = (this.scrollY) / 300;
    for_scroll.style.transform = "translateY(" + (this.scrollY) / 2 + "px)";
    
    if (this.scrollY > 490) {
        if (!document.querySelector('.miniGameCard_show')) {
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
        return
    }

    if (document.querySelector('.miniGameCard_show')) {
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

function make_mediaList(game) {
    let mediaList_html = "";
    let i = 0;
    
    mediaList_html += get_media_screenshot(game.imgH, i);
    i++;
    game.screenshots.forEach(link => {
        mediaList_html += get_media_screenshot(link, i);
        i++;
    })
    document.querySelector(`#game_medialist`).innerHTML = mediaList_html;
}

make_mediaList(games[0]);

function change_media(this_treiler, id, link) {
    const active_block = document.querySelector('.mainInfo__banner__interface__bottom__medialist__media_active');
    if (active_block) {
        active_block.classList.remove('mainInfo__banner__interface__bottom__medialist__media_active');
    }
    document.querySelector(`#media_block-${id}`).classList.add('mainInfo__banner__interface__bottom__medialist__media_active');

    let game_visual_inner = "";

    if (this_treiler) {

    }
    else {
        game_visual_inner = get_pic_gameCard_html(link);
    }

    document.querySelector('#game_visual').innerHTML = game_visual_inner;
}