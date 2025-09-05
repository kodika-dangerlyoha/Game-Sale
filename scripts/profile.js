const open_purchase = (id_purchase) => {
    document.querySelector(`#purchase-${id_purchase}`).classList.toggle('purchase_open');
}

const toggle_region_list = () => {
    document.querySelector('.settings__conf__regionInput').classList.toggle('settings__conf__regionInput_open');
}