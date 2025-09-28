const toggle_list = (id) => {
    const e_open = document.querySelector('.inputList_open');
    const e_this = document.querySelector(`#inputList-${id}`);
    
    if (e_open && e_open != e_this) {
        e_open.classList.remove('inputList_open'); 
    }
    e_this.classList.toggle('inputList_open');
}

const change_value_list = (id, value, type, i) => {
    if (type == 'radio') {
        change_radio_value_list(id, value);
        return
    }
    change_chekbox_value_list(id, i, value);
}

const change_chekbox_value_list = (id, i, value) => {
    document.querySelector(`#inputList_points-${id} .inputList_point-${i}`).classList.toggle('inputList__list__body__points__point_check');
    
    // ! КАК КОНСТ ПЕРЕМЕННАЯ МАССИВА МЕНЯЕТСЯ? И КАК МЕНЯЕТСЯ МАССИВ
    const values = filter_values[id];

    const e_index = values.indexOf(value);

    if (e_index !== -1) {
        values.splice(e_index, 1);
    } 
    else {
        values.push(value);
    }

    // filter_values[id] = values;
    console.log(values);
    console.log(filter_values[id]);

    const str = [...values].join(', ');
    document.querySelector(`#inputList-${id} .inputList__list__header__values`).innerHTML = str;
}

const change_radio_value_list = (id, value) => {
    filter_values[id] = value;
    // console.log(filter_values[id]);
    document.querySelector(`#inputList-${id} .inputList__list__header__title`).innerHTML = filter_values[id];
}

// function toggle_element(array, element) {
//     const e_index = array.indexOf(element);

//     if (e_index !== -1) {
//         array.splice(e_index, 1);
//         console.log(array);
//     } 
//     else {
//         array.push(element);
//         console.log(array);
//     }
// } inp_search_region.addEventListener('input', () => make_regions_list(selected_region, inp_search_region.value));

// e.full_title.toLowerCase().includes(str.toLowerCase())

function search_point(value, id) {
    document.querySelectorAll(`#inputList_points-${id} .inputList__list__body__points__point .inputList__list__body__points__point__value`).forEach(e => {
        console.log(`${e.innerHTML} - ${value}`);
        if (!e.innerHTML.toLowerCase().includes(value.toLowerCase())) {
            e.parentElement.classList.add('inputList__list__body__points__point_hidden');
        }

        else {
            e.parentElement.classList.remove('inputList__list__body__points__point_hidden');
        }
    })
}