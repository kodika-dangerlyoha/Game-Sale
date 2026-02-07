function switch_section(title, active_class) {
    document.querySelector(`.${active_class}`)?.classList.remove(active_class);
    document.querySelector('.switch__head__point_active')?.classList.remove('switch__head__point_active');

    document.querySelector(`#switch_point-${title}`).classList.add('switch__head__point_active');
    document.querySelector(`#switch_content-${title}`).classList.add(active_class);
}

// class Switch_section {
//     constructor() {

//     }
//     init() {

//     }
//     switch_section(title, active_class) {
//         document.querySelector(`.${active_class}`)?.classList.remove(active_class);
//         document.querySelector('.switch__head__point_active')?.classList.remove('switch__head__point_active');

//         document.querySelector(`#switch_point-${title}`).classList.add('switch__head__point_active');
//         document.querySelector(`#switch_content-${title}`).classList.add(active_class);
//     }
// }