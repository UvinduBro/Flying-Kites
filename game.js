import { Player } from './player.js';
import { InputHandler } from './input.js';
import { kite1 } from './backgroundkites.js';


window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Game {
        constructor(width, height) {
            this.height = height;
            this.width = width;
            this.speed = 0;
            this.maxSpeed = 6;
            this.player = new Player(this);
            this.inputHandler = new InputHandler(this);
            this.backgroundKites = [];

            this.backgroundKiteTimer = 0;
            this.backgroundKiteInterval = 1000;

            this.player.loadImage('images/kite1.png'); // Replace with the path
        }

        update(deltaTime) {
            this.player.update(this.inputHandler.keys, deltaTime);

            if (this.backgroundKiteTimer > this.backgroundKiteInterval) {
                this.addbackgroundKite();
                this.backgroundKiteTimer = 0;
            } else {
                this.backgroundKiteTimer += deltaTime;
            }
            this.backgroundKites.forEach(backgroundKite => {
                backgroundKite.update(deltaTime);
            });


            this.backgroundKites = this.backgroundKites.filter(enemy => !enemy.markedForDeletion);
        }

        draw(ctx) {
            this.player.draw(ctx);

            this.backgroundKites.forEach(backgroundKite => {
                backgroundKite.draw(ctx);
            });

        }
        addbackgroundKite() {
            if (Math.random() < 0.5)
                this.backgroundKites.push(new kite1(this));
        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        console.log(deltaTime);
        requestAnimationFrame(animate);
    }
    animate(0);


})
