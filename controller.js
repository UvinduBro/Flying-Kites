const kiteForButton = document.getElementById('kite');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');

let angleForButton = 0;
let altitudeForButton = 0;

function updateKitePosition() {
    kiteForButton.style.transform = `translateX(-50%) rotate(${angleForButton}deg) translateY(-${altitudeForButton}px)`;
}

function handleButtonPress(direction) {
    if (direction === 'left') {
        angleForButton -= 10;
    } else if (direction === 'right') {
        angleForButton += 10;
    } else if (direction === 'up') {
        altitudeForButton += 10;
    } else if (direction === 'down') {
        altitudeForButton -= 10;
    }

    updateKitePosition();
}

leftButton.addEventListener('click', () => handleButtonPress('left'));
rightButton.addEventListener('click', () => handleButtonPress('right'));
upButton.addEventListener('click', () => handleButtonPress('up'));
downButton.addEventListener('click', () => handleButtonPress('down'));

updateKitePosition();
