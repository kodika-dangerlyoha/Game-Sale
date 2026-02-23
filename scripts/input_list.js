class Input_list {
    init(el) {
        el.addEventListener('click', evt => this.click(evt));
        if (el.dataset.type == 'interval') {
            el.querySelector('button').addEventListener('click', evt => this.input(evt));
        }
        else {
            el.querySelector('input[data-type="search"]').addEventListener('input', evt => this.input(evt));
        }
    }

    point_actions = {
        'multiple': (parent, value, point) => this.change_multiple(parent, value, point),
        'single': (parent, value, point) => this.change_single(parent, value, point),
        'interval': (parent, value, point) => this.change_interval_point(parent, value, point)
    }

    input_actions = {
        'search': (parent) => this.search(parent),
        'interval': (parent) => this.change_interval_inputs(parent)
    }

    close(el) {
        el.classList.remove('inputList_open');
    }

    open(el) {
        el.classList.add('inputList_open');
    }

    toggle(el) {
        if (el.classList.contains('inputList_open')) {
            this.close(el);
        }
        else {
            this.open(el);
        }
    }

    change_multiple(parent, value, point) {
        const input = parent.querySelector('input[inp_type="value"]');
        const arr = input.value.split(', ');
        console.log(point);

        if (arr.includes(value)) {
            arr.splice(arr.indexOf(value), 1);
            point.classList.remove('inputList__body__list__point_active');
        }
        else {
            arr.unshift(value);
            point.classList.add('inputList__body__list__point_active');
        }

        input.value = arr.filter(el => el !== '').join(', ');
        parent.querySelector('.inputList__header__left__value').innerHTML = input.value;
    }

    change_single(parent, value, point) {
        parent.querySelector('input[inp_type="value"]').value = value;
        parent.querySelector('.inputList__header__left__value').innerHTML = value;

        const active_point = parent.querySelector('.inputList__body__list__point_active');
        if (active_point) {
            if (active_point == point) {
                parent.querySelector('input[inp_type="value"]').value = "";
                parent.querySelector('.inputList__header__left__value').innerHTML = "";
                active_point.classList.remove('inputList__body__list__point_active');
                return
            }
            active_point.classList.remove('inputList__body__list__point_active');
        }

        point.classList.add('inputList__body__list__point_active');
    }

    change_interval_point(parent, value, point) {
        const values = value.split('-');
        const active_point = parent.querySelector('.inputList__body__list__point_active');
        if (active_point) {
            if (active_point == point) {
                values[0] = "";
                values[1] = "";
                active_point.classList.remove('inputList__body__list__point_active');
                this.update_interval(parent, values);
                return
            }
            active_point.classList.remove('inputList__body__list__point_active');
        }
        this.update_interval(parent, values);
        point.classList.add('inputList__body__list__point_active');
    }

    change_interval_inputs(parent) {
        const min_inp = parent.querySelector('input[inp_type="min_interval"]');
        const max_inp = parent.querySelector('input[inp_type="max_interval"]');
        let values = [Number(min_inp.value), Number(max_inp.value)];

        if (values[0] < 0) values[0] = 0;
        if (values[1] < 0) values[1] = 0;

        if (values[0] == values[1]) {
            values[1]++;
        }
        else if (values[0] > values[1]) {
            const temp_0 = values[0];
            values[0] = values[1];
            values[1] = temp_0;
        }
        this.update_interval(parent, values);
    }

    update_interval(parent, values) {
        parent.querySelector('input[inp_type="min_interval"]').value = values[0];
        parent.querySelector('input[inp_type="max_interval"]').value = values[1];
        parent.querySelector('.inputList__header__left__value').innerHTML = values.filter(el => el !== '').join('-');
    }

    search(parent) {
        const value = parent.querySelector('input[data-type="search"]').value;
        parent.querySelectorAll('.inputList__body__list__point__title').forEach(el => {
            if (!el.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                el.parentElement.classList.add('inputList__body__list__point_hidden'); return
            }
            el.parentElement.classList.remove('inputList__body__list__point_hidden');
        });
    }

    click(evt) {
        const trg = evt.target;
        const parent = trg.closest('.inputList');
        if (trg.dataset.title == "header") {
            this.toggle(parent);
        }
        else if (trg.dataset.title == "point") {
            this.point_actions[parent.dataset.type](parent, trg.dataset.value, trg.closest('.inputList__body__list__point'));
        }
    }

    input(evt) {
        const trg = evt.target;
        this.input_actions[trg.dataset.type](trg.closest('.inputList'));
    }
}

// const toggle_list = (id) => {
//     const e_open = document.querySelector('.inputList_open');
//     const e_this = document.querySelector(`#inputList-${id}`);
    
//     if (e_open && e_open != e_this) {
//         e_open.classList.remove('inputList_open'); 
//     }
//     e_this.classList.toggle('inputList_open');
// }

// -------- Нажатия на point в выпадающем списке -------- 

// const change_value_list = (id, value, type, i) => {
//     console.log(type);
//     if (type === 'radio') {
//         change_radio_value_list(id, value, i);
//         return
//     }
//     else if (type === 'checkbox') {
//         console.log("haha");
//         change_chekbox_value_list(id, i, value);
//     }
//     // else if (type == 'number') {
//     //     change_number_value_list(id, value);
//     // }
// }

// const change_chekbox_value_list = (id, i, value) => {
//     console.log("haha");
//     document.querySelector(`#inputList_points-${id} .inputList_point-${i}`).classList.toggle('inputList__list__body__points__point_check');
    
//     // ! КАК КОНСТ ПЕРЕМЕННАЯ МАССИВА МЕНЯЕТСЯ? И КАК МЕНЯЕТСЯ МАССИВ
//     const values = filter_values[id];

//     const e_index = values.indexOf(value);

//     if (e_index !== -1) {
//         values.splice(e_index, 1);
//     } 
//     else {
//         values.push(value);
//     }

//     // filter_values[id] = values;
//     console.log(values);
//     console.log(filter_values[id]);

//     const str = [...values].join(', ');
//     document.querySelector(`#inputList-${id} .inputList__list__header__values`).innerHTML = str;
// }

// const change_radio_value_list = (id, value, i) => {
//     filter_values[id] = value;
//     // console.log(filter_values[id]);
//     document.querySelector(`#inputList-${id} .inputList__list__header__title`).innerHTML = filter_values[id];

//     document.querySelector(`#inputList-${id} .inputList__list__body__points__point_active`)?.classList.remove('inputList__list__body__points__point_active');
//     document.querySelector(`#inputList-${id} .inputList_point-${i}`).classList.add('inputList__list__body__points__point_active');
// }

// const change_number_value_list = (value_min, value_max) => {
//     inp_num_min_price.value = value_min;
//     inp_num_max_price.value = value_max;
//     update_value_price();
// }

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

// -------- Поиск -------- 

// function search_point(value, id) {
//     document.querySelectorAll(`#inputList_points-${id} .inputList__list__body__points__point .inputList__list__body__points__point__value`).forEach(e => {
//         console.log(`${e.innerHTML} - ${value}`);
//         if (!e.innerHTML.toLowerCase().includes(value.toLowerCase())) {
//             e.parentElement.classList.add('inputList__list__body__points__point_hidden');
//         }

//         else {
//             e.parentElement.classList.remove('inputList__list__body__points__point_hidden');
//         }
//     })
// }

// -------- Значения "От - До" -------- 

// ~ Цена

// function check_value_price(value) {
//     value = Number(value);
//     if (value > MAX_PRICE) {
//         value = MAX_PRICE;
//     }
//     else if (value < MIN_PRICE) {
//         value = MIN_PRICE;
//     }
//     return value;
// }

// function update_value_price() {
//     filter_values['prices'].min = inp_num_min_price.value;
//     filter_values['prices'].max = inp_num_max_price.value;
//     document.querySelector(`#inputList-prices .inputList__list__header__values`).innerHTML = `${filter_values['prices'].min} - ${filter_values['prices'].max} ₽`;
// }

// function change_price_min() {
//     let value = check_value_price(inp_num_min_price.value);
//     inp_num_min_price.value = value;
//     if (value >= inp_num_max_price.value) {
//         inp_num_max_price.value = check_value_price(value + 1);
//     }
//     update_value_price();
// }

// function change_price_max() {
//     let value = check_value_price(inp_num_max_price.value);
//     inp_num_max_price.value = value;
//     if (value <= inp_num_min_price.value) {
//         inp_num_min_price.value = check_value_price(value - 1);
//     }
//     update_value_price();
// }

// ~ Дата

// function set_value_date() {
//     inp_num_max_date.value = check_value_date(inp_num_max_date.value);
//     inp_num_min_date.value = check_value_date(inp_num_min_date.value);
//     update_value_date();
// }

// function check_value_date(value) {
//     value = Number(value);
//     if (value > MAX_YEAR) {
//         value = MAX_YEAR;
//     }
//     else if (value < MIN_YEAR) {
//         value = MIN_YEAR;
//     }
//     return value;
// }

// function update_value_date() {
//     filter_values['date'].min = inp_num_min_date.value;
//     filter_values['date'].max = inp_num_max_date.value;
//     document.querySelector(`#inputList-date .inputList__list__header__values`).innerHTML = `${filter_values['date'].min} - ${filter_values['date'].max}`;
// }

// function change_date_min() {
//     let value = Number(inp_num_min_date.value);
//     if (value >= inp_num_max_date.value) {
//         inp_num_max_date.value = value + 1;
//     }
// }

// function change_date_max() {
//     let value = Number(inp_num_max_date.value);
//     if (value <= inp_num_min_date.value) {
//         inp_num_min_date.value = value - 1;
//     }
// }