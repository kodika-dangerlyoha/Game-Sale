const toggle_list = (id) => {
    const e_open = document.querySelector('.inputList_open');
    const e_this = document.querySelector(`#inputList-${id}`);
    
    if (e_open && e_open != e_this) {
        e_open.classList.remove('inputList_open'); 
    }
    e_this.classList.toggle('inputList_open');
}