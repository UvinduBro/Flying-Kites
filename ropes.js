// export class Rope {
//     constructor(game, ctx) { // Pass the game and canvas context
//         this.game = game;
//         this.ctx = ctx;
//         this.ropes = [];

//         // Create ropes for background kites
//         for (let i = 0; i < 10; i++) {
//             const kite = this.game.backgroundKites[i];
//             const rope = {
//                 startX: kite.x + kite.width / 2,
//                 startY: kite.y + kite.height,
//                 endX: Math.random() * this.game.width,
//                 endY: this.game.height,
//             };
//             this.ropes.push(rope);
//         }
//     }

//     update(deltaTime) {
//         // Update the ropes if needed
//         // ...

//     }

//     draw(ctx) {
//         this.ctx.strokeStyle = 'black'; // Rope color
//         this.ctx.lineWidth = 10; // Rope thickness

//         for (let i = 0; i < this.ropes.length; i++) {
//             const rope = this.ropes[i];
//             this.ctx.beginPath();
//             this.ctx.moveTo(100, 100);
//             this.ctx.lineTo(0, 0);
//             this.ctx.stroke();
//         }
//     }
// }
