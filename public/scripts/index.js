
const pipes = []
player.init(pipes)

for (let i = 0; i < 6; i++)
    pipes.push(new Pipe(WIDTH + (PIPES_SPACING * i)))

const gameLoop = () => {
    clearScreen()

    pipes.forEach(pipe => { pipe.update(); pipe.draw() })

    player.update()
    player.draw()

    if (player.died) {
        gameover()
    }
}

interval = setInterval(gameLoop, 16.7);