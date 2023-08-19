export class Player {
    constructor(game) {
        this.angle = 0;
        this.altitude = 0;
        this.angleChange = 0;
        this.altitudeChange = 0;
        this.kiteImage = new Image();
        this.game = game;
    }

    loadImage(imagePath) {
        this.kiteImage.src = imagePath;
    }

    update(input, deltaTime) {
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

        const jiggleAmount = 0.5;
        this.angle += Math.sin(Date.now() * 0.005) * jiggleAmount;
        this.angle += this.angleChange;
        this.altitude += this.altitudeChange;
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

        const initialSize = 1;
        const maxSize = 0.5;
        const size = initialSize - (initialSize - maxSize) * (this.altitude / 550);

        ctx.drawImage(
            this.kiteImage,
            -this.kiteImage.width * size / 1.9,
            -this.kiteImage.height * size / 1.9,
            this.kiteImage.width * size,
            this.kiteImage.height * size
        );

        ctx.restore();

        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}
