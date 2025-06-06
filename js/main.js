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
