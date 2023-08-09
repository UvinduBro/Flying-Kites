const kite = document.getElementById('kite');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');

let angle = 0;
let altitude = 0;

function updateKitePosition() {
    kite.style.transform = `translateX(-50%) rotate(${angle}deg) translateY(-${altitude}px)`;
}

function handleButtonPress(direction) {
    if (direction === 'left') {
        angle -= 10;
    } else if (direction === 'right') {
        angle += 10;
    } else if (direction === 'up') {
        altitude += 10;
    } else if (direction === 'down') {
        altitude -= 10;
    }
    
    updateKitePosition();
}

leftButton.addEventListener('click', () => handleButtonPress('left'));
rightButton.addEventListener('click', () => handleButtonPress('right'));
upButton.addEventListener('click', () => handleButtonPress('up'));
downButton.addEventListener('click', () => handleButtonPress('down'));

updateKitePosition();
