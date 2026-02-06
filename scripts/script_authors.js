const colorThief = new ColorThief();

function make_authors() {
    const authors_list = authors;
    let authors_html = "";
    authors_list.forEach(author => {
        authors_html += get_author_html(author);
    })

    document.querySelector('#authors_grid').innerHTML = authors_html;

    document.querySelectorAll('.authors__grid__author').forEach(author => {
        // Проверяем, загружено ли изображение
        const img = author.querySelector('img');
        if (img.complete) {
            const dominantColor = colorThief.getColor(img);
            author.style.backgroundColor = `rgba(${dominantColor}, .5)`;
            return
        }
        img.addEventListener('load', function() {
            const dominantColor = colorThief.getColor(img);
            author.style.backgroundColor = `rgba(${dominantColor}, .5)`;
        });
    });
}

make_authors();