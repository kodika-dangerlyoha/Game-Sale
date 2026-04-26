let catalog_games = [];

let filter = {
    'title': "",
    'sorting': [true, 'not_selected'],
    'filters': {
        'genres': [],
        'themes': [],
        'developers': [],
        'publishers': [],
        'way_game': [],
        'series': [],
        'prices': [0, 99999],
        'years': [0, 2027],
    }
}

const action_change_filter = {
    'title': (data) => set_filter_title(data),
    'sorting': (data) => change_filter_sorting(data),
    'filters': (data) => change_filter_filters(data),
}

const action_set_filter = {
    'title': (value) => set_filter_title(value),
    'sorting': (value) => set_filter_sorting(value),
    'filters': (key, value) => set_filter_filters(key, value),
}

function change_filter(type, data) {
    action_change_filter[type](data);
}

function change_filter_title(data) {
    filter['title'] = data;
    console.log(filter);
}

function change_filter_sorting(data) {
    
}

function set_filter(type, key, value) {
    console.log(type);
    action_set_filter[type](key, value);
}

function set_filter_title(value) {
    filter.title = value;
    console.log(filter);
}
function set_filter_filters(key, value) {
    filter.filters[key] = value;
    console.log(filter);
}
function set_filter_sorting(value) {
    filter.sorting = value;
    console.log(filter);
}

function change_filter_filters(data) {
    const info = data[0];
    
    Object.keys(info).forEach(key => {
        filter.filters[key] = info[key];

    });
    console.log(filter);
}

// let test_filters = [
//     {
//         'developer': ['Activision', 'Gaijin'],
//         'author': ['Gaijin'],
//     }
// ]

// change_filter('filters', test_filters);