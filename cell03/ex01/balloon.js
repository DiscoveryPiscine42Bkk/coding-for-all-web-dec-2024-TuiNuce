const balloon = document.getElementById('balloon');

let currentSize = 200;
let currentColorIndex = 0;
const colors = ['red', 'green', 'blue'];

balloon.addEventListener('click', () => {
    currentSize += 10;
    if (currentSize > 420) {
        currentSize = 200;
    }

    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';

    currentColorIndex = (currentColorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[currentColorIndex];
});

balloon.addEventListener('mouseenter', () => {
    if (currentSize > 200) {
        currentSize -= 5;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';

        currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
        balloon.style.backgroundColor = colors[currentColorIndex];
    }
});

balloon.addEventListener('mouseleave', () => {
    if (currentSize > 200) {
        currentSize -= 5;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';

        currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
        balloon.style.backgroundColor = colors[currentColorIndex];
    }
});