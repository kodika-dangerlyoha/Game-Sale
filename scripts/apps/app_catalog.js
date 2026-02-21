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
    el.addEventListener('click', evt => il.click(evt));
});

// make_catalog_games(games);

// -------- Откртие / закрытие второй строки фильтров -------- 

function toggle_subRow() {
    document.querySelector('.formFilters__row_sub').classList.toggle('formFilters__row_hidden');
    document.querySelector('.formFilters__menuButtons__allFilters').classList.toggle('formFilters__menuButtons__allFilters_active');
}