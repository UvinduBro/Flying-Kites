class Kite {
    constructor() {
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;

    }
    update(deltaTime) {
        this.x += this.speedX;
        this.y -= this.speedY + 2;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }

        if (this.y + this.height < 0) this.markedForDeletion = true;


    }
    draw(context) {
        context.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

}

export class kite1 extends Kite {
    constructor(game) {
        super();
        this.game = game;
        this.width = 145;
        this.height = 200;
        this.x = Math.random() * this.game.width;
        this.y = this.game.height + Math.random() * this.game.height * 0.5;
        this.speedX = 0;
        this.speedY = Math.random() + 1;
        this.image = document.getElementById('kite2');
        this.angle = 0;
        this.va = Math.random() * 0.1 + 0.1;
    }
    update(deltaTime) {
        super.update(deltaTime);
        this.angle += this.va;
        this.x += Math.sin(this.angle);

        const initialSize = 0.5; // Initial size when close
        const minSize = 1; // Smallest size when high up
        const size = initialSize - (initialSize - minSize) * (this.y / this.game.height);

        this.width = 145 * size;
        this.height = 200 * size;
    }

}