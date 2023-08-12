const kite = document.getElementById('kite');
const kiteImg = document.getElementById('kiteImg');
const kite1 = document.getElementById('kite1');
const kite2 = document.getElementById('kite2');
const kite3 = document.getElementById('kite3');
let angle = 0;
let altitude = 0;

function updateKitePosition() {
    kite.style.transform = `translateX(-50%) rotate(${angle}deg) translateY(-${altitude}px)`;
    console.log("object");
}

window.addEventListener('keydown', (event) => {
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
kite1.addEventListener('click', () => kiteImg.src = './images/kite1.png');
kite2.addEventListener('click', () => kiteImg.src = './images/kite2.png');
kite3.addEventListener('click', () => kiteImg.src = './images/kite3.png');

updateKitePosition();
