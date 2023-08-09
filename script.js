const kite = document.getElementById('kite');
const kiteSelect = document.getElementById('kite-select');
let angle = 0;
let altitude = 0;

function updateKitePosition() {
    kite.style.transform = `translateX(-50%) rotate(${angle}deg) translateY(-${altitude}px)`;
}

kiteSelect.addEventListener('change', (event) => {
    const selectedKite = event.target.value;
    kite.src = selectedKite;
});

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
