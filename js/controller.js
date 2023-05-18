function parse_html(str, find) {
    if (find === 'all') {
        
    }
}

function load_page(page) {
    var current_elements = document.body.getElementsByTagName("*");

    fetch("../views/"+page+".html").then(function(response) {
        response.text().then(function(text) {
            console.log(text, typeof(text));
        });
    });
}