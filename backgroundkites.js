export class BackgroundKite {
    constructor(imagePath, game) {
        this.image = new Image();
        this.image.src = imagePath;
        this.game = game;



        // Set initial x position to the right edge of the canvas
        this.x = this.game.width;

        // Randomize initial y position within canvas height
        this.y = Math.random() * this.game.height;

        // Initialize altitude and angle changes
        this.altitudeChange = 0;
        this.angleChange = 0;

        // Randomize the speed and initial angles
        this.speed = Math.random() + 1;
        this.angle = Math.random() * 360; // Random initial angle

        // Calculate the torques based on the torque equation
        this.calculateTorques();

        // Use the calculated torques to set initial altitude and angle changes
        this.altitudeChange = this.torqueY / 10; // Adjust the scaling factor as needed
        this.angleChange = this.torqueX / 50; // Adjust the scaling factor as needed

        this.wind = { x: 0.1, y: 0 }; // Adjust wind force as needed
        this.speed = Math.random() + 0.5; // Slower speed between 0.5 and 1.5
    }

    update(playerAltitude, playerAngle) {
        // Move the kite to the left
        this.x -= this.speed;

        // Apply wind force to the kite's movement
        this.x -= this.wind.x;

        // Update kite's altitude and angle based on torques
        this.altitudeChange += this.torqueY / 1000 + this.wind.y; // Include wind effect
        this.angleChange += this.torqueX / 5000;

        // Update kite's altitude and angle
        this.y += this.altitudeChange;
        this.angle += this.angleChange;

        // Reset the kite's position when it goes off-screen horizontally
        if (this.x + this.image.width < 0) {
            this.resetPosition();
        }
    }

    calculateTorques() {
        // Calculate the torques based on the torque equation
        const cp = this.image.width / 2; // Center of pressure (assumption)
        const cg = this.image.width / 2; // Center of gravity (assumption)
        const xb = this.x + this.image.width / 2; // Bridle point X
        const yb = this.y + this.image.height / 2; // Bridle point Y
        const a = this.angle * (Math.PI / 180); // Convert angle to radians

        this.torqueX =
            -this.image.height * Math.sin(a) * (yb - cp) +
            this.image.width * Math.cos(a) * xb;

        this.torqueY =
            -this.image.height * Math.cos(a) * (yb - cp) -
            this.image.width * Math.sin(a) * xb;
    }

    resetPosition() {
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height - this.image.height); // Randomize y position within canvas height
        this.altitudeChange = (Math.random() - 0.5) * 5; // Randomize altitude change
        this.angleChange = (Math.random() - 0.5) * 2; // Randomize angle change
        this.speed = Math.random() + 0.5; // Slower speed between 0.5 and 1.5
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        ctx.restore();
    }
}
