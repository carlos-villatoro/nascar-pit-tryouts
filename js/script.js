// DOM SELCTORS

//canvas element
const canvas = document.querySelector('#canvas')

// Timer

// CANVAS SETUP / GAME STATE

// set the rendering context of the canvas
const ctx = canvas.getContext('2d')

// set the canvas width and height to be same as page's w/h
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])


// CLASSES
class Nuts {
    constructor(x, y, color, width, height){
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.alive = true

    }

    render(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

    }
}

// nuts specific spawn
const nut0 = new Nuts(535, 150, 'yellow', 20, 20)
// const nut1 = new Nuts(485, 305, 'yellow', 20, 20)
// const nut2 = new Nuts(615, 210, 'yellow', 20, 20)
// const nut3 = new Nuts(455, 210, 'yellow', 20, 20)
// const nut4 = new Nuts(585, 305, 'yellow', 20, 20)
nut0.render()
// nut1.render()
// nut2.render()
// nut3.render()
// nut4.render()


// // nuts random spawn
// const randX = Math.floor(Math.random() * canvas.width)
// const randY = Math.floor(Math.random() * canvas.height)
// const nut0 = new Nuts(randX, randY, 'green', 75, 100)
// const nut1 = new Nuts(randX, randY, 'green', 75, 100)
// const nut2 = new Nuts(randX, randY, 'green', 75, 100)
// const nut3 = new Nuts(randX, randY, 'green', 75, 100)
// const nut4 = new Nuts(randX, randY, 'green', 75, 100)


// GAME FUNCTIONS
// resource: https://www.demo2s.com/javascript/javascript-canvas-make-the-circle-disappear-when-clicked.html
const nx = 545 // nut  value + .5size
const ny = 160 // nut y value + .5size
radius = 13

// hit-test the nut render
function mouseIsInsideCircle(mouseX, mouseY, nx, ny, radius) {
    let dx = mouseX - nx;
    let dy = mouseY - ny;
    return (dx * dx + dy * dy <= radius * radius);
} 
function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
canvas.addEventListener('mousemove', function (evt) {
    let mousePos = getMousePos(canvas, evt);
    let message = 'Mouse position: ' + parseInt(mousePos.x) + ',' + parseInt(mousePos.y);
    writeMessage(canvas, message);
}, false);
let mousePos;
function writeMessage(canvas, message) {
    ctx.clearRect(0, 0, canvas.width, 30);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 10, 25);
}
canvas.addEventListener('mousedown', function (evt) {
    let mousePos = getMousePos(canvas, evt);
    let mouseX = mousePos.x;
    let mouseY = mousePos.y;
    // if the mouse is inside the nut
    if (mouseIsInsideCircle(mouseX, mouseY, nx, ny, radius)) {
        // erase the canvas
        ctx.clearRect(0, 30, canvas.width, canvas.height);
    }
}, false);





