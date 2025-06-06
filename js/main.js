// Hotmart button
function importHotmart(){
    var imported = document.createElement('script');
    imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
    document.head.appendChild(imported);
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
    document.head.appendChild(link);
}
importHotmart();

function fillSection(htmlPage, section){
    fetch(htmlPage)
        .then(res => res.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;

            document.querySelectorAll('.accordion-button').forEach(button => {
                button.addEventListener('click', () => {
                    const item = button.parentElement;
                    item.classList.toggle('active');
                });
            });

        });
}
