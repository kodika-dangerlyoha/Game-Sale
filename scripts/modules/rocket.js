class Rocket {
    rocket;
    init(el) {
        if (!el) { console.log(`Элемент не найден [${el}]`); return}
        el.addEventListener('click', this.click);
        this.rocket = el;
        window.addEventListener('scroll', (evt) => this.win_check(evt));
    }
    win_check(evt) {
        if (window.pageYOffset > 100) {
            this.rocket.classList.add('rocket_show');
        }
        else {
            this.rocket.classList.remove('rocket_show');
        }
    }
    destroy(el) {
        if (!el) { console.log(`Элемент не найден [${el}]`); return}
        el.removeEventListener('click', this.click);
    }
    click() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // плавная прокрутка
        });
    }
}