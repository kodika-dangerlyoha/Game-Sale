function contains(arr, elem) {
    return arr.some((arrElem) => arrElem === elem)
}

// ----------------------- footer всегда снизу

document.querySelector('main').style.minHeight = `${window.innerHeight - 331}px`;

// ----- Адаптация 

if (window.innerWidth < 827) {
    document.querySelectorAll('.gameH__banner__videoBlock video source').forEach(el => {
        el.src = "";
    })
}

let resizeTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth < 827) {
            document.querySelectorAll('#salesHits_content article')[4].style.display = 'none';
        }
        else {
            document.querySelectorAll('#salesHits_content article')[4].style.display = 'block';
        }

        if (window.innerWidth < 551) {
            console.log(document.querySelectorAll('.carousel__banner__imgBlock img'));
            document.querySelectorAll('.carousel__banner__imgBlock img').forEach(img => {
                img.src = img.dataset.v;
            });
        }
        else {
            document.querySelectorAll('.carousel__banner__imgBlock img').forEach(img => {
                img.src = img.dataset.h;
            });
        }
        console.log('Ширина:', window.innerWidth);
        console.log('Высота:', window.innerHeight);
    }, 250);
});

// ----------------------- Смена категории игр в offers 

// const open_offers_games = (category) => {
//     document.querySelector('.offers__grid_active').classList.remove("offers__grid_active");
//     document.querySelector(`.offers__grid_${category}`).classList.add("offers__grid_active");

//     document.querySelector('.offers__head__nav_active').classList.remove(`offers__head__nav_active`);
//     document.querySelector(`#offers_nav-${category}`).classList.add('offers__head__nav_active');
// }