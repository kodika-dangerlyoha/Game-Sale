function make_authors() {
    const authors_list = authors;
    let authors_html = "";
    authors_list.forEach(author => {
        authors_html += get_author_html(author);
    });

    document.querySelector('#authors_grid').innerHTML = authors_html;
}

make_authors();