// import { init_lazyImg } from '../modules/img-observer.js';
// import { Input_list } from '../modules/modules.js';

// const IL = new Input_list;
const IL = new Input_list;
const ROCKET = new Rocket;

// --------------------- Получение паарметров из url 

// Получить все параметры
const urlParams = new URLSearchParams(window.location.search);

// Получить все параметры как объект
const params = Object.fromEntries(urlParams.entries());
console.log(params);

if (params.title) {
    search_input.value = params.title;
    set_filter_title(params.title);
}
else {
    search_input.value = '';
}

// params.title ? search_input.value = params.title : search_input.value;
// document.querySelector('#search-input').value = params.title;

////////////////// ----- 

function get_catalog_games(filters) {

}

function make_catalog_games(arr) {
    let inner_html = "";
    arr.forEach(el => {
        inner_html += get_horizont_game_html(el);
    });

    document.querySelector('#catalog_grid').innerHTML = inner_html;
    update_buttons(document);
    update_marks(document);
}

make_catalog_games(games);
init_lazyImg(document);
ROCKET.init(document.querySelector('#rocket'));

document.querySelectorAll('.inputList').forEach(el => {
    IL.init(el);
});

function reset_all() {
    IL.reset_all_filters(document.querySelector('.filters'));
}

// make_catalog_games(games);

// -------- Откртие / закрытие второй строки фильтров -------- 

function toggle_filters_row() {
    document.querySelector('.filters').classList.toggle('filters_all');
}