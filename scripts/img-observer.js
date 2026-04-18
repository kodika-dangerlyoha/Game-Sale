const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const trg = entry.target;
        if (entry.isIntersecting) { trg.src = trg.dataset.lazy_src; }
        else { trg.src = ''; }
    });
}, {
    rootMargin: '200px 0px 100px 0px',
    threshold: 0 
});

function init_lazyImg(imgs) {
    imgs.forEach(img => { imgObserver.observe(img) });
}

function delete_lazyImg(imgs) {
    imgs.forEach(img => { imgObserver.unobserve(img) });
}

function update_lazyImg(imgs) {
    delete_lazyImg(imgs);
    init_lazyImg(imgs);
}