function set_top_img_paralax(max_height, max_opacity) {
    const img_block = document.querySelector('.topImgParalaxBlock');
    img_block.style.height = `${max_height}px`;
    img_block.style.opacity = `${max_opacity}`;

    window.addEventListener("scroll", function(){
        const page_scroll = window.scrollY;
        img_block.style.height = `${max_height - (page_scroll / 5)}px`;
        img_block.style.opacity = `${max_opacity - (page_scroll / 400)}`;
    });
}