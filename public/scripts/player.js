
const player = {
    velX: 0,
    velY: 0,
    posX: WIDTH / 2,
    posY: HEIGHT / 2,
    size: 32,
    jumpForce: 450,
    score: 0,
    died: false,

    init: function(pipes) {
        document.addEventListener('keypress', (e) => {
            if (e.key == ' ')
                this.velY = -this.jumpForce
        })

        this.pipes = pipes
    },

    update: function() {
        this.posX += pxsToFps(this.velX)
        this.posY += pxsToFps(this.velY)

        this.velY += GRAVITY

        if (this.posY <= 0)
            this.posY = 0

        if (this.posY >= HEIGHT - this.size) {
            this.posY = HEIGHT - this.size
            this.died = true
        }

        for (const pipe of this.pipes) {
            if (this.collision(pipe.getScoreBox()) && !pipe.touching) {
                this.score++
                pipe.touching = true
            } else if (!this.collision(pipe.getScoreBox()))
                pipe.touching = false

            if (this.collision(pipe.getTop()) || this.collision(pipe.getBottom()))
                this.died = true
        }
    },

    collision: function(box) {
        return (this.posX + this.size >= box.x &&
            box.x + box.z >= this.posX &&
            this.posY + this.size >= box.y &&
            box.y + box.w >= this.posY)
    },

    draw: function() {
        ctx.fillStyle = 'rgb(127, 218, 252)'
        ctx.fillRect(this.posX, this.posY, this.size, this.size)
    }
}