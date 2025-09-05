const open_purchase = (id_purchase) => {
    document.querySelector(`#purchase-${id_purchase}`).classList.toggle('purchase_open');
}

const toggle_region_list = () => {
    document.querySelector('.settings__conf__regionInput').classList.toggle('settings__conf__regionInput_open');
}

const region_list = {
    'KZ': "KZ (Казахстан)",
    'LV': "LV (Латвия)",
    'RO': "RO (Румыния)",
    'TR': "TR (Турция)",
    'US': "US (США)",
    'EN': "EN (Англия)"
}

const change_region = (region) => {
    document.querySelector('#inp-region').value = region_list[region];
    toggle_region_list();
}