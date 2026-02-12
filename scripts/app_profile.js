// ------------------ Список регионов
const form_profile = document.forms.form_profile;
const inp_search_region = form_profile.inp_search_region;

let selected_region = 'RU';

// ------------------ Открытие \ закрытие заказов

const open_purchase = (id_purchase) => {
    document.querySelector(`#purchase-${id_purchase}`).classList.toggle('purchase_open');
}