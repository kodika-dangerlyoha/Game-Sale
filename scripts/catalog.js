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
        'title': "sorting",
        'type_function': "radio",
        'list': ['По популярности',
                'По названию',
                'Сначала дешёвые',
                'Сначала Дорогие',
                'По дате выхода',
                'По величине скидки',
                'По рейтингу']
    }
]



function make_input_list_genres(id) {
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

make_input_list_genres('sorting');
make_input_list_genres('genres');