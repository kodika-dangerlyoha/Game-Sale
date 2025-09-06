// ------------------ Список регионов
const form_profile = document.forms.form_profile;
const inp_search_region = form_profile.inp_search_region;

let selected_region = 'RU';
make_regions_list(selected_region, '');

const toggle_region_list = () => {
    document.querySelector('.settings__conf__regionInput').classList.toggle('settings__conf__regionInput_open');
}

const change_region = (full_title, region_id) => {
    document.querySelector('#inp-region').value = full_title;
    selected_region = region_id;
    toggle_region_list();
    make_regions_list(selected_region, '');
    inp_search_region.value = '';
}

inp_search_region.addEventListener('input', () => make_regions_list(selected_region, inp_search_region.value));

// ------------------ Открытие \ закрытие заказов

const open_purchase = (id_purchase) => {
    document.querySelector(`#purchase-${id_purchase}`).classList.toggle('purchase_open');
}