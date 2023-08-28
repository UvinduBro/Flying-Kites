export class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = [];

        window.addEventListener('keydown', (e) => {
            if (
                ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key) &&
                this.keys.indexOf(e.key) === -1
            ) {
                this.keys.push(e.key);
            }
        });

        window.addEventListener('keyup', (e) => {
            if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}
