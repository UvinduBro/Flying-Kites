const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
let x = canvas.height / 2;
let y = canvas.width / 2;

window.addEventListener('resize', () => {
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
})

const player = new Image();
player.src = 'kite.png';

canvas.addEventListener("mousemove", (e) => {
    x = e.x;
    y = e.y;
    console.log(x, y);

})

function drawPlayer() {
    const width = player.width * 0.15;
    const height = player.height * 0.15;
    ctx.clearRect(0, 0, width, height);
    ctx.translate(x - width / 2, y - height);
    ctx.drawImage(player, 0, 0, width, height);
    ctx.translate(-x + width / 2, -y + height);
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    drawPlayer();
    requestAnimationFrame(animate);
}
animate();