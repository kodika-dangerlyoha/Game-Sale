const form_filter = document.forms.form_filter;
const inp_search_genres = form_filter.inp_search_genres;
const inp_search_sorting = form_filter.inp_search_sorting;

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
    }
]

let filter_values = {
    'sorting': "",
    'developers': [],
    'genres': [],
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

make_input_list('sorting');
make_input_list('genres');
make_input_list('developers');

inp_search_genres.addEventListener('input', () => search_point(inp_search_genres.value, 'genres'));
inp_search_sorting.addEventListener('input', () => search_point(inp_search_sorting.value, 'sorting'));

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

function toggle_subRow() {
    document.querySelector('.formFilters__row_sub').classList.toggle('formFilters__row_hidden');
    document.querySelector('.formFilters__menuButtons__allFilters').classList.toggle('formFilters__menuButtons__allFilters_active');
}