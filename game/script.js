const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const player = new Image();
player.src = 'kite.png';

let playerWidth = player.width * 0.15;
let playerHeight = player.height * 0.15;
let x = (width - playerWidth) / 2;
let y = (height - playerHeight) / 2;


let tiltAngle = 0;
const tiltFactor = 3; //  more pronounced
const smoothingFactor = 0.6; // smoothing level

canvas.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX - canvas.getBoundingClientRect().left;
    const mouseXCentered = mouseX - x - playerWidth / 2;
    const targetTiltAngle = Math.atan2(mouseXCentered, playerHeight) * (180 / Math.PI) * tiltFactor;

    tiltAngle += (targetTiltAngle - tiltAngle) * smoothingFactor;

    x = mouseX - playerWidth / 2;
    y = e.clientY - canvas.getBoundingClientRect().top - playerHeight / 4;
});

function drawPlayer() {
    ctx.clearRect(0, 0, width, height);


    ctx.save();

    // Translate to the player's center
    ctx.translate(x + playerWidth / 2, y + playerHeight / 2);


    ctx.rotate((Math.PI / 180) * tiltAngle);


    ctx.drawImage(player, -playerWidth / 2, -playerHeight / 2, playerWidth, playerHeight);

    // Restore the previous drawing state
    ctx.restore();
}

function animate() {
    drawPlayer();
    requestAnimationFrame(animate);
}

animate();