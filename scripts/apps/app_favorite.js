let favorite_list = get_favorite_list();
let basket_list = get_basket_list();
const basket_container = document.querySelector('.favorite__basket__block');
const global_container = document.querySelector('.favorite');

function update_favorite_basket() {
    basket_list = get_basket_list();
    if (basket_list.length === 0) { basket_container.classList.add('favorite__basket__block_empty'); return } 
    make_favorite_basket();
}

function make_favorite_basket() {
    if (basket_container.classList.contains('favorite__basket__block_empty')) { basket_container.classList.remove('favorite__basket__block_empty') }

    let inner_html = '';
    let full_price = 0;
    let total_price = 0;

    basket_list.forEach(game => {
        inner_html += get_small_game(game);
        full_price += game.oldPrice;
        total_price += game.newPrice;
    });

    document.querySelector('#full_price').innerHTML = `${full_price} ₽`;
    document.querySelector('#total_price').innerHTML = `${total_price} ₽`;
    document.querySelector('#discount').innerHTML = `${Math.round((full_price - total_price) / full_price * 100)}%`;
    document.querySelector('#basket').innerHTML = inner_html;
}

function update_favorite_games() {
    favorite_list = get_favorite_list();
    if (favorite_list.length === 0) { global_container.classList.add('favorite_empty'); return } 
    // make_favorite_games();
}

function make_favorite_games() {
    const grid = document.querySelector('#favorite_grid');
    grid.innerHTML += favorite_list.reduce((summ_game, game) => summ_game + get_lineGames_html(game, 'favorite'), "");
    update_buttons(grid, 'basket');
    init_hover(grid);
}

function make_favorite() {
    if (favorite_list.length === 0) return;

    global_container.classList.remove('favorite_empty');
    make_favorite_games();
    update_favorite_basket();
}

make_favorite();