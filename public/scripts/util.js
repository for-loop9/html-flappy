const ctx = document.getElementById('canvas').getContext('2d')
const GRAVITY = 16
const WIDTH = window.screen.width
const HEIGHT = window.screen.height * 0.83
const PIPES_SPEED = 200
const PIPE_GAP = HEIGHT / 4
const PIPES_SPACING = 250
let interval = null

const gameover = () => {
    clearInterval(interval)
    clearScreen()

    ctx.font = `100px Consolas`;
    ctx.fillStyle = 'rgb(127, 218, 252)'
    ctx.fillText(`Score: ${player.score}`, WIDTH / 3, HEIGHT / 2);

    setTimeout(() => { location.reload() }, 2000)
}

const pxsToFps = (pxs) => {
    return pxs / 60
}

const clearScreen = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
}

const randomShift = (range) => { 
    const negative = Math.random() >= 0.5 ? 1 : -1
    return Math.floor(Math.random() * range) * negative
}

const randomGradient = () => {
    const val = 110 + randomShift(30)
    return `rgb(${val}, ${val}, ${val})`
}
