export class Player {
    constructor(game) {
        this.angle = 0;
        this.altitude = 0;
        this.angleChange = 0;
        this.altitudeChange = 0;
        this.kiteImage = new Image();
        this.game = game;

        this.touchStartPosition = { x: 0, y: 0 };
        this.touchCurrentPosition = { x: 0, y: 0 };

    }

    loadImage(imagePath) {
        this.kiteImage.src = imagePath;
    }

    update(input, deltaTime) {
        if (this.game.touchJoystickActive) {

            this.angleChange = this.game.angleDegrees;
            this.altitudeChange = this.game.distance;
            console.log("gg");
        }





        else {
            if (input.includes('ArrowLeft')) {
                this.angleChange = -5;
            } else if (input.includes('ArrowRight')) {
                this.angleChange = 5;
            } else {
                this.angleChange = 0;
            }

            if (input.includes('ArrowUp')) {
                this.altitudeChange = 5;
            } else if (input.includes('ArrowDown')) {
                this.altitudeChange = -5;
            } else {
                this.altitudeChange = 0;
            }
        }



        const jiggleAmount = 0.5;
        this.angle += Math.sin(Date.now() * 0.005) * jiggleAmount;
        this.angle += this.angleChange;
        this.altitude += this.altitudeChange;

        const initialSize = 1;
        const maxSize = 0.55;
        this.size = initialSize - (initialSize - maxSize) * (this.altitude / 550);
        this.x = -this.kiteImage.width * this.size / 1.9;
        this.y = -this.kiteImage.height * this.size / 1.9;

        // if (this.x < 0) this.x = 0;
        // if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        // if (this.y < 0) this.y = 0;
        // if (this.y > this.game.height - this.height) this.y = this.game.height - this.height;
    }

    draw(ctx) {
        const radians = (this.angle * Math.PI) / 180;
        const dx = Math.sin(radians) * this.altitude;
        const dy = Math.cos(radians) * this.altitude;

        const centerX = ctx.canvas.width / 2 + dx;
        const centerY = ctx.canvas.height - dy;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(radians);



        ctx.drawImage(
            this.kiteImage,
            this.x,
            this.y,
            this.kiteImage.width * this.size,
            this.kiteImage.height * this.size
        );

        ctx.restore();

        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}
