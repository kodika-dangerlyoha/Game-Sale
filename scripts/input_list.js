class Input_list {
    init(el) {
        el.addEventListener('click', evt => this.click(evt));
        if (el.dataset.type == 'interval') {
            el.querySelector('button').addEventListener('click', evt => this.input(evt));
        }
        else {
            el.querySelector('input[data-type="search"]').addEventListener('input', evt => this.input(evt));
        }
    }

    // - 1 Без actions = {} 

    //- 2 
    // actions = {
    //     'header': (info) => this.toggle(info.parent),
    //     'point': (info) => this.point_actions[info.parent.dataset.type](info.parent, info.value, info.point),
    //     'reset': (info) => this.reset_actions[info.parent.dataset.type](info.parent)
    // }

    //- 3 
    actions = {
        'header': (parent, point, value) => this.toggle(parent),
        'point': (parent, point, value) => this.point_actions[parent.dataset.type](parent, value, point),
        'reset': (parent, point, value) => this.reset_actions[parent.dataset.type](parent)
    }

    point_actions = {
        'multiple': (parent, value, point) => this.change_multiple(parent, value, point),
        'single': (parent, value, point) => this.change_single(parent, value, point),
        'interval': (parent, value, point) => this.change_interval_point(parent, value, point)
    }

    input_actions = {
        'search': (parent) => this.search(parent),
        'interval': (parent) => this.change_interval_inputs(parent)
    }

    reset_actions = {
        'single': (parent) => this.reset_single(parent),
        'multiple': (parent) => this.reset_multiple(parent),
        'interval': (parent) => this.reset_interval(parent)
    }

    close(el) {
        el.classList.remove('inputList_open');
    }

    open(el) {
        el.classList.add('inputList_open');
    }

    toggle(el) {
        if (el.classList.contains('inputList_open')) {
            this.close(el);
        }
        else {
            this.open(el);
        }
    }

    reset_multiple(parent) {
        parent.querySelector('input[inp_type="value"]').value = [];
        parent.querySelector('.inputList__header__left__value').innerHTML = '';
        const active_points = parent.querySelectorAll('.inputList__body__list__point_active');
        if (active_points) {
            active_points.forEach(el => el.classList.remove('inputList__body__list__point_active'));
        }
    }

    reset_single(parent) {
        parent.querySelector('input[inp_type="value"]').value = '';
        parent.querySelector('.inputList__header__left__value').innerHTML = '';
        const active_point = parent.querySelector('.inputList__body__list__point_active');
        if (active_point) {
            active_point.classList.remove('inputList__body__list__point_active');
        }
    }

    reset_interval(parent) {
        this.update_interval(parent, ['', '']);
        const active_point = parent.querySelector('.inputList__body__list__point_active');
        if (active_point) {
            active_point.classList.remove('inputList__body__list__point_active');
        }
    }

    change_multiple(parent, value, point) {
        const input = parent.querySelector('input[inp_type="value"]');
        const arr = input.value.split(', ');
        console.log(point);

        if (arr.includes(value)) {
            arr.splice(arr.indexOf(value), 1);
            point.classList.remove('inputList__body__list__point_active');
        }
        else {
            arr.unshift(value);
            point.classList.add('inputList__body__list__point_active');
        }

        input.value = arr.filter(el => el !== '').join(', ');
        parent.querySelector('.inputList__header__left__value').innerHTML = input.value;
    }

    change_single(parent, value, point) {
        parent.querySelector('input[inp_type="value"]').value = value;
        parent.querySelector('.inputList__header__left__value').innerHTML = value;

        const active_point = parent.querySelector('.inputList__body__list__point_active');
        if (active_point) {
            if (active_point == point) {
                parent.querySelector('input[inp_type="value"]').value = "";
                parent.querySelector('.inputList__header__left__value').innerHTML = "";
                active_point.classList.remove('inputList__body__list__point_active');
                return
            }
            active_point.classList.remove('inputList__body__list__point_active');
        }

        point.classList.add('inputList__body__list__point_active');
    }

    change_interval_point(parent, value, point) {
        const values = value.split('-');
        const active_point = parent.querySelector('.inputList__body__list__point_active');
        if (active_point) {
            if (active_point == point) {
                values[0] = "";
                values[1] = "";
                active_point.classList.remove('inputList__body__list__point_active');
                this.update_interval(parent, values);
                return
            }
            active_point.classList.remove('inputList__body__list__point_active');
        }
        this.update_interval(parent, values);
        point.classList.add('inputList__body__list__point_active');
    }

    change_interval_inputs(parent) {
        const min_inp = parent.querySelector('input[inp_type="min_interval"]');
        const max_inp = parent.querySelector('input[inp_type="max_interval"]');
        let values = [Number(min_inp.value), Number(max_inp.value)];

        if (values[0] < 0) values[0] = 0;
        if (values[1] < 0) values[1] = 0;

        if (values[0] == values[1]) {
            values[1]++;
        }
        else if (values[0] > values[1]) {
            const temp_0 = values[0];
            values[0] = values[1];
            values[1] = temp_0;
        }
        this.update_interval(parent, values);
    }

    update_interval(parent, values) {
        parent.querySelector('input[inp_type="min_interval"]').value = values[0];
        parent.querySelector('input[inp_type="max_interval"]').value = values[1];
        parent.querySelector('.inputList__header__left__value').innerHTML = values.filter(el => el !== '').join('-');
    }

    search(parent) {
        const value = parent.querySelector('input[data-type="search"]').value;
        parent.querySelectorAll('.inputList__body__list__point__title').forEach(el => {
            if (!el.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                el.parentElement.classList.add('inputList__body__list__point_hidden'); return
            }
            el.parentElement.classList.remove('inputList__body__list__point_hidden');
        });
    }

    click(evt) {
        // - 3 
        const trg = evt.target;
        this.actions[trg.dataset.title](trg.closest('.inputList'), trg.closest('.inputList__body__list__point'), trg.dataset.value);

        // - 2 
        // const trg = evt.target;
        // const info = {
        //     'parent': trg.closest('.inputList'),
        //     'point': trg.closest('.inputList__body__list__point'),
        //     'value': trg.dataset.value,
        // }
        // this.actions[trg.dataset.title](info);

        // - 1 
        // const trg = evt.target;
        // const data = trg.dataset;
        // const parent = trg.closest('.inputList');
        // if (data.title == "header") {
        //     this.toggle(parent);
        // }
        // else if (data.title == "point") {
        //     this.point_actions[parent.dataset.type](parent, data.value, trg.closest('.inputList__body__list__point'));
        // }
        // else if (data.title == "reset") {
        //     this.reset_actions[parent.dataset.type](parent);
        // }
    }

    input(evt) {
        const trg = evt.target;
        this.input_actions[trg.dataset.type](trg.closest('.inputList'));
    }
}