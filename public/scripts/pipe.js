
class Pipe {
    constructor(posX) {
        this.posX = posX
        this.shift = randomShift((HEIGHT / 2) - (0.15 * HEIGHT));
        this.width = 64
        this.touching = false
        this.color = randomGradient()
    }

    getTop() {
        return {
            x: this.posX,
            y: 0,
            z: this.width,
            w: this.height
        }
    }

    getScoreBox() {
        return {
            x: this.posX + this.width,
            y: this.height,
            z: 1,
            w: PIPE_GAP
        }
    }

    getBottom() {
        return {
            x: this.posX,
            y: (HEIGHT - this.height) + this.shift * 2,
            z: this.width,
            w: this.height - this.shift * 2
        }
    }

    update() {
        this.posX -= pxsToFps(PIPES_SPEED)

        if (this.posX + this.width <= 0) {
            this.posX = WIDTH + this.width + PIPES_SPACING * 0.5
            this.shift = randomShift((HEIGHT / 2) - 100);
            this.color = randomGradient()
        }

        this.height = ((HEIGHT - PIPE_GAP) / 2) + this.shift
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.posX, 0, this.width, this.height)
        ctx.fillRect(this.posX, (HEIGHT - this.height) + this.shift * 2, this.width, this.height - this.shift * 2)
    }
}