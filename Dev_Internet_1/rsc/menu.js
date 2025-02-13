window.onload = function() {
    fetch('Menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-contenedor').innerHTML = data;
    });
};