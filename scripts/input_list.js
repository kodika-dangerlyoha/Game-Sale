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
        radio_value_list(id, value);
        return
    }
    chekbox_value_list(id, i);
}

const chekbox_value_list = (id, i) => {
    document.querySelector(`#inputList_points-${id} .inputList_point-${i}`).classList.toggle('inputList__list__body__points__point_check');
}

const radio_value_list = (id, value) => {
    document.querySelector(`#inp-${id}`).value = value;
}