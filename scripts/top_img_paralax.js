function set_top_img_paralax(max_height) {
    const img_block = document.querySelector('.topImgParalaxBlock');
    img_block.style.height = `${max_height}px`;

    window.addEventListener("scroll", function(){
        const page_scroll = window.scrollY;
        img_block.style.height = `${max_height - (page_scroll / 5)}px`;
        img_block.style.opacity = `${1 - (page_scroll / 400)}`;
    });
}
