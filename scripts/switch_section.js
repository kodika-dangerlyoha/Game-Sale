class Switch_Section {
    active_class = '';
    parent;
    init(parent) {
        parent.querySelector('.switch__head').addEventListener('click', evt => this.click(evt));
        this.active_class = `${parent.querySelectorAll('.switch__content')[0].classList[0]}_active`;
        this.parent = parent;
        // console.log(this.active_class, this.parent);
    }

    click(evt) {
        const trg = evt.target;
        if (trg.classList.contains('switch__head__point__click')) {
            const title = trg.dataset.section;
            this.parent.querySelector(`.${this.active_class}`)?.classList.remove(this.active_class);
            this.parent.querySelector('.switch__head__point_active').classList.remove('switch__head__point_active');

            this.parent.querySelector(`#switch_point-${title}`).classList.add('switch__head__point_active');
            this.parent.querySelector(`#switch_content-${title}`).classList.add(this.active_class);
        }
    }
}