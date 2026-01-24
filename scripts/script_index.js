function getGames_for_salesHits() {
    return games.slice(0, 5);
}

function getGames_similar() {
    return games.slice(0, 6);
}

function get_game_banner() {
    return games[3];
}

make_index();
update_basket_button();

const colorThief = new ColorThief();
const imgs = document.querySelectorAll('.carousel__banner__imgBlock img');
// console.log(imgs);

imgs.forEach(img => {
    // Проверяем, загружено ли изображение
    if (img.complete) {
        const dominantColor = colorThief.getColor(img);
        // console.log(`RGB: ${dominantColor}`);
    } 
    else {
        img.addEventListener('load', function() {
            const dominantColor = colorThief.getColor(img);
            // console.log(`RGB: ${dominantColor}`);
        });
    }
});