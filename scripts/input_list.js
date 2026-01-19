class Form_il {
    all_inputList = [];

    constructor(selector) {
        this.form_il = document.querySelector(selector);
    }

    register(inputList) {
        this.all_inputList.push(inputList);
    }

    close_all_except(current_inputList) {
        this.all_inputList.forEach(inputList => {
            if (inputList !== current_inputList) {
                inputList.close();
            }
        });
    }
}   

class InputList {
    constructor(selector, type, form_il) {
        this.$inputList = document.querySelector(selector);
        this.type = type;
        this.init();
        this.form_il = form_il;

        this.form_il.register(this);
    }

    init() {
        this.$inputList.querySelector('.inputList__list__header').addEventListener('click', () => this.toggle());
        if (this.type === 'radio') {
            this.$inputList.querySelectorAll('.inputList__list__body__points__point').forEach(point => {
                point.addEventListener('click', () => this.change_value_radio());
            })
        }
        else if (this.type === 'checkbox') {
            this.$inputList.querySelectorAll('.inputList__list__body__points__point').forEach(point => {
                point.addEventListener('click', () => this.change_value_checkbox());
            })
        }
    }

    toggle() {
        console.log('toggle');
        this.form_il.close_all_except(this);
        if(this.$inputList.classList.contains('inputList_open')) {
            this.close();
        }
        else {
            this.open();
        }
    }

    open() {
        this.$inputList.classList.add('inputList_open');
        console.log('open');
    }

    close() {
        this.$inputList.classList.remove('inputList_open');
        console.log('close');
    }

    change_value_checkbox() {

    }
    change_value_radio() {

    }
}

class InputList_point {

    change_value() {

    }
}


const toggle_list = (id) => {
    const e_open = document.querySelector('.inputList_open');
    const e_this = document.querySelector(`#inputList-${id}`);
    
    if (e_open && e_open != e_this) {
        e_open.classList.remove('inputList_open'); 
    }
    e_this.classList.toggle('inputList_open');
}

// -------- Нажатия на point в выпадающем списке -------- 

const change_value_list = (id, value, type, i) => {
    console.log(type);
    if (type === 'radio') {
        change_radio_value_list(id, value, i);
        return
    }
    else if (type === 'checkbox') {
        console.log("haha");
        change_chekbox_value_list(id, i, value);
    }
    // else if (type == 'number') {
    //     change_number_value_list(id, value);
    // }
}

const change_chekbox_value_list = (id, i, value) => {
    console.log("haha");
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

const change_radio_value_list = (id, value, i) => {
    filter_values[id] = value;
    // console.log(filter_values[id]);
    document.querySelector(`#inputList-${id} .inputList__list__header__title`).innerHTML = filter_values[id];

    document.querySelector(`#inputList-${id} .inputList__list__body__points__point_active`)?.classList.remove('inputList__list__body__points__point_active');
    document.querySelector(`#inputList-${id} .inputList_point-${i}`).classList.add('inputList__list__body__points__point_active');
}

const change_number_value_list = (value_min, value_max) => {
    inp_num_min_price.value = value_min;
    inp_num_max_price.value = value_max;
    update_value_price();
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

// -------- Поиск -------- 

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

// -------- Значения "От - До" -------- 

// ~ Цена

function check_value_price(value) {
    value = Number(value);
    if (value > MAX_PRICE) {
        value = MAX_PRICE;
    }
    else if (value < MIN_PRICE) {
        value = MIN_PRICE;
    }
    return value;
}

function update_value_price() {
    filter_values['prices'].min = inp_num_min_price.value;
    filter_values['prices'].max = inp_num_max_price.value;
    document.querySelector(`#inputList-prices .inputList__list__header__values`).innerHTML = `${filter_values['prices'].min} - ${filter_values['prices'].max} ₽`;
}

function change_price_min() {
    let value = check_value_price(inp_num_min_price.value);
    inp_num_min_price.value = value;
    if (value >= inp_num_max_price.value) {
        inp_num_max_price.value = check_value_price(value + 1);
    }
    update_value_price();
}

function change_price_max() {
    let value = check_value_price(inp_num_max_price.value);
    inp_num_max_price.value = value;
    if (value <= inp_num_min_price.value) {
        inp_num_min_price.value = check_value_price(value - 1);
    }
    update_value_price();
}

// ~ Дата

function set_value_date() {
    inp_num_max_date.value = check_value_date(inp_num_max_date.value);
    inp_num_min_date.value = check_value_date(inp_num_min_date.value);
    update_value_date();
}

function check_value_date(value) {
    value = Number(value);
    if (value > MAX_YEAR) {
        value = MAX_YEAR;
    }
    else if (value < MIN_YEAR) {
        value = MIN_YEAR;
    }
    return value;
}

function update_value_date() {
    filter_values['date'].min = inp_num_min_date.value;
    filter_values['date'].max = inp_num_max_date.value;
    document.querySelector(`#inputList-date .inputList__list__header__values`).innerHTML = `${filter_values['date'].min} - ${filter_values['date'].max}`;
}

function change_date_min() {
    let value = Number(inp_num_min_date.value);
    if (value >= inp_num_max_date.value) {
        inp_num_max_date.value = value + 1;
    }
}

function change_date_max() {
    let value = Number(inp_num_max_date.value);
    if (value <= inp_num_min_date.value) {
        inp_num_min_date.value = value - 1;
    }
}