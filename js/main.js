function fillSection(htmlPage, section){
    fetch(htmlPage)
        .then(res => res.text())
        .then(data => {
            const container = document.getElementById(section);
            container.innerHTML = data;
            if (container.querySelectorAll('.accordion-button') !== null) {
                container.querySelectorAll('.accordion-button').forEach(button => {
                    button.addEventListener('click', () => {
                        const item = button.parentElement;
                        item.classList.toggle('active');
                    });
                });
            }

        });
}
