const kite = document.getElementById('kite');
let angle = 0;
let altitude = 0;

function updateKitePosition() {
    kite.style.transform = `translateX(-50%) rotate(${angle}deg) translateY(-${altitude}px)`;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        angle -= 10;
    } else if (event.key === 'ArrowRight') {
        angle += 10;
    } else if (event.key === 'ArrowUp') {
        altitude += 10;
    } else if (event.key === 'ArrowDown') {
        altitude -= 10;
    }

    updateKitePosition();
});

updateKitePosition();
