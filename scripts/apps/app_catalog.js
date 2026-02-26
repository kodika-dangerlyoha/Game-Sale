// --------------------- Получение паарметров из url 

// Получить все параметры
const urlParams = new URLSearchParams(window.location.search);

// Получить все параметры как объект
const params = Object.fromEntries(urlParams.entries());
console.log(params);

params.title ? search_input.value = params.title : search_input.value = '';
// document.querySelector('#search-input').value = params.title;

function make_catalog_games(arr) {
    let inner_html = "";
    arr.forEach(el => {
        inner_html += get_horizont_game_html(el);
    });

    document.querySelector('#catalog_grid').innerHTML = inner_html;
}

const il = new Input_list;

document.querySelectorAll('.inputList').forEach(el => {
    il.init(el);
});

function reset_all() {
    il.reset_all_filters(document.querySelector('.filters'));
}

// make_catalog_games(games);

// -------- Откртие / закрытие второй строки фильтров -------- 

function toggle_filters_row() {
    document.querySelector('.filters').classList.toggle('filters_all');
}