// Script per cambiare il testo del saluto e il colore
document.addEventListener('DOMContentLoaded', function () {
    const greeting = document.getElementById('greeting');
    const colorButton = document.querySelector('.color-button');

    // Saluto personalizzato
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
        greeting.textContent = `Hallo, ${name}!`;
    }

    // Cambia colore al clic sul pulsante
    colorButton.addEventListener('click', function () {
        const colors = ['red', 'blue', 'green', 'purple', 'orange'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        greeting.style.color = randomColor;
    });
});