function remove_game(el) {
    el.classList.add('lineGames__game_removed');
    setTimeout(() => {
        el.remove();
    }, 301);
}

function init_hover(list) {
    let button;
    list.querySelectorAll('.lineGames__game').forEach(parent => {
        button = parent.querySelector('button[main_button]');
        console.log(parent);
        button.addEventListener('mouseenter', () => hover_red(parent));
        button.addEventListener('mouseleave', () => unhover_red(parent));
        button.addEventListener('click', () => remove_game(parent));
    })
}

function hover_red(parent) {
    console.log(parent);
    parent.querySelector('.lineGames__game__forHover__bg_blue').style.opacity = "0";
    parent.querySelector('.lineGames__game__forHover__bg_red').style.opacity = "1";
}

function unhover_red(parent) { 
    console.log(parent);
    parent.querySelector('.lineGames__game__forHover__bg_blue').style.opacity = "1";
    parent.querySelector('.lineGames__game__forHover__bg_red').style.opacity = "0";
}