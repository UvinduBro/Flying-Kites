import { Player } from './player.js';
import { InputHandler } from './input.js';
import { BackgroundKite } from './backgroundkites.js';

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Game {
        constructor(width, height) {
            this.height = height;
            this.width = width;
            this.player = new Player();
            this.inputHandler = new InputHandler(this);
            this.backgroundKites = []; // Array to hold background kites
            // this.kyte = new BackgroundKite('images/kite1.png', this.width, this.height);

            this.player.loadImage('images/kite1.png'); // Replace with the actual path
            this.loadBackgroundKites(); // Load background kites
        }

        loadBackgroundKites() {
            const numKites = 5; // Adjust the number of background kites
            const kiteImagePath = 'images/kite1.png'; // Replace with the actual path

            for (let i = 0; i < numKites; i++) {
                const backgroundKite = new BackgroundKite(kiteImagePath, this);
                this.backgroundKites.push(backgroundKite);

            }
        }

        update() {
            this.player.update(this.inputHandler.keys);

            // Update background kites
            for (const backgroundKite of this.backgroundKites) {
                backgroundKite.update(this.player.altitude, this.player.angle, this.width, this.height);
            }
        }

        draw(ctx) {
            this.player.draw(ctx);

            // Draw background kites
            for (const backgroundKite of this.backgroundKites) {
                backgroundKite.draw(ctx);
            }
        }
    }

    const game = new Game(canvas.width, canvas.height);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();


})
