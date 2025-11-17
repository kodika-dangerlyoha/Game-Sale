const MAX_PRICE = 99999;
const MIN_PRICE = 0;
const MAX_YEAR = 2030;
const MIN_YEAR = 1800;

const form_filter = document.forms.form_filter;
const inp_search_genres = form_filter.inp_search_genres;
const inp_search_sorting = form_filter.inp_search_sorting;
const inp_num_min_price = form_filter.inp_num_min_price;
const inp_num_max_price = form_filter.inp_num_max_price;
const inp_num_min_date = form_filter.inp_num_min_date;
const inp_num_max_date = form_filter.inp_num_max_date;

const points = [
    {
        'title': "genres",
        'type_function': "checkbox",
        'list': ['Шутер',
                'Хоррор',
                'Гонки',
                'Стратегии',
                'Симулятор',
                'Космос и полёты',
                'Приключения',
                'Военное',
                'Песочница',
                'Выживание',
                'Головоломка',
                'Строительство',]
    },
    {
        'title': "developers",
        'type_function': "checkbox",
        'list': ['Шутер',
                'Хоррор',
                'Гонки',
                'Стратегии',
                'Симулятор',
                'Космос и полёты',
                'Приключения',
                'Военное',
                'Песочница',
                'Выживание',
                'Головоломка',
                'Строительство',]
    },
    {
        'title': "sorting",
        'type_function': "radio",
        'list': ['По популярности',
                'По названию',
                'По цене',
                'По дате выхода',
                'По величине скидки',
                'По рейтингу']
    },
    {
        'title': "prices",
        'type_function': "number",
        'list': [
            {
                'min': 0,
                'max': 100
            },
            {
                'min': 100,
                'max': 500
            },
            {
                'min': 500,
                'max': 1000
            },
            {
                'min': 1000,
                'max': 2000
            },
            {
                'min': 2000,
                'max': 4000
            },
        ]
    }
]

// const arrT = points.find(item => item.title === 'prices');
// console.log(arrT.list[0]['max']);

let filter_values = {
    'sorting': "",
    'developers': [],
    'genres': [],
    'prices': {
        'min': MIN_PRICE,
        'max': MAX_PRICE
    },
    'date': {
        'min': MIN_YEAR,
        'max': MAX_YEAR
    }
}

function reset_filter_values() {
    filter_values = {
        'sorting': "",
        'developers': [],
        'genres': [],
    }
}

function make_input_list(id) {
    let points_html = '';

    const arr = points.find(item => item.title === id);
    const type_function = arr.type_function;

    let i = 0;
    arr.list.forEach(e => {
        points_html += get_inputList_point(id, e, type_function, i);
        i++;
    })

    document.querySelector(`#inputList_points-${id}`).innerHTML = points_html;
}

function make_input_list_number(id) {
    let points_html = '';

    const arr = points.find(item => item.title === id);
    // const type_function = arr.type_function;

    let i = 0;
    arr.list.forEach(e => {
        points_html += get_inputList_point_number(e, i);
        i++;
    })

    document.querySelector(`#inputList_points-${id}`).innerHTML = points_html;
}

make_input_list('sorting');
make_input_list('genres');
make_input_list('developers');
make_input_list_number('prices');

const inputList_sorting = new InputList('#inputList-sorting', 'checkbox');

inp_search_genres.addEventListener('input', () => search_point(inp_search_genres.value, 'genres'));
inp_search_sorting.addEventListener('input', () => search_point(inp_search_sorting.value, 'sorting'));
inp_num_min_price.addEventListener('input', change_price_min);
inp_num_max_price.addEventListener('input', change_price_max);
inp_num_min_date.addEventListener('input', change_date_min);
inp_num_max_date.addEventListener('input', change_date_max);

// -------- Переключение направления сортировки -------- 

let sort_dir_top_to_bottom = true;
const sorting_icon_svg = document.querySelector('.formFilters__sortingBlock__icon__svg');

function toggle_direction_sorting() {
    if (sort_dir_top_to_bottom) {
        sorting_icon_svg.classList.remove('formFilters__sortingBlock__icon__svg_topToBottom');
        sorting_icon_svg.classList.add('formFilters__sortingBlock__icon__svg_BottomToTop');
        sort_dir_top_to_bottom = false;
    }
    else {
        sorting_icon_svg.classList.remove('formFilters__sortingBlock__icon__svg_BottomToTop');
        sorting_icon_svg.classList.add('formFilters__sortingBlock__icon__svg_topToBottom');
        sort_dir_top_to_bottom = true;
    }
}

// -------- Откртие / закрытие второй строки фильтров -------- 

function toggle_subRow() {
    document.querySelector('.formFilters__row_sub').classList.toggle('formFilters__row_hidden');
    document.querySelector('.formFilters__menuButtons__allFilters').classList.toggle('formFilters__menuButtons__allFilters_active');
}