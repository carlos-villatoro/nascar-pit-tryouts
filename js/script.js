// DOM SELCTORS

//canvas element
const canvas = document.querySelector('#canvas')

// Timer
let countdown = 20
let timer
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

// // nuts specific spawn

let nut0 = new Nuts(535, 150, 'yellow', 20, 20)
let nut1 = new Nuts(485, 305, 'yellow', 20, 20)
let nut2 = new Nuts(615, 210, 'yellow', 20, 20)
let nut3 = new Nuts(455, 210, 'yellow', 20, 20)
let nut4 = new Nuts(585, 305, 'yellow', 20, 20)
// nut0.render()
// nut1.render()
// nut2.render()
// nut3.render()
// nut4.render()


// // nuts random spawn
// const randX = Math.floor(Math.random() * canvas.width - 20)
// const randY = Math.floor(Math.random() * canvas.height - 20)
let nutR0
let nutR1
let nutR2
let nutR3
let nutR4


// GAME FUNCTIONS
// const gameLoopInterval = setInterval(gameLoop, 60)
//timer


 // hit-test the nut render
 function mouseIsInsideCircle(mouseX, mouseY, n0x, n0y, radius) {
    let dx = mouseX - n0x;
    let dy = mouseY - n0y;
    return (dx * dx + dy * dy <= radius * radius); // checks if area of click is == to area of square location
} 

function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }; // gets coordinates for the mouse click
}

// start game on first click
function start(){
    document.querySelector('#btm-left').innerText = 'CLICK TO START'
    canvas.addEventListener('click', startGame)

}

function endgame(){
    countdown = 20
    clearInterval(timer)
}


function startGame(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    document.querySelector('#btm-left').innerText = 'COLLECT THE NUTS'

    canvas.removeEventListener('click', startGame) // wont start game over and over

    timer = setInterval(function(){ // going to take a sec off timer each second
        countdown--;
        console.log('end start', countdown, timer)

        document.querySelector('#top-right').innerText = 'Time Remaining: ' + countdown
        if (countdown <= 0) {
        clearInterval(timer)
    }
    }, 1000)

    // let nut0 = new Nuts(535, 150, 'yellow', 20, 20)
    // let nut1 = new Nuts(485, 305, 'yellow', 20, 20)
    // let nut2 = new Nuts(615, 210, 'yellow', 20, 20)
    // let nut3 = new Nuts(455, 210, 'yellow', 20, 20)
    // let nut4 = new Nuts(585, 305, 'yellow', 20, 20)

    // console.log('start')
    nut0.render()   
    nut1.render()
    nut2.render()
    nut3.render()
    nut4.render()
    
    let n0x = 545 // nut  value + .5size
    let n0y = 160// nut y value + .5size
    radius = 17


    // hit-test the nut render
   mouseIsInsideCircle()

    function getMousePos(canvas, e) {
        let rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }; // gets coordinates for the mouse click
    }

    canvas.addEventListener('mousemove', function (e) {
        let mousePos = getMousePos(canvas, e);
    }, false); //tracks location of mouse in canvas

    
    let rand0x = Math.floor(Math.random() * canvas.width - 20)
    let rand0y = Math.floor(Math.random() * canvas.height -20 )
    let nutR0 = new Nuts(rand0x, rand0y, 'yellow', 20, 20)
    canvas.addEventListener('mousedown', function (e) {
        
        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y;
        
        if ( nut0.alive === true && mouseIsInsideCircle(mouseX, mouseY, n0x, n0y, radius)) {
            // erase the canvas
            ctx.clearRect(535, 150, 20, 20); // clears that certain square 
            nutR0.render()
            } 
    }, false)
    canvas.addEventListener('mousedown', function (e) {
        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y
        if (mouseIsInsideCircle(mouseX, mouseY, nutR0.x, nutR0.y, radius)){
            ctx.clearRect(nutR0.x, nutR0.y, 20, 20)
            nut0.render()
            nut0.alive = false
            console.log('nut0', nut0.alive)
        } 
    }, false)

    // want to figure out how to do this with an array of the differet x and ys of the squares
    // need it to recieve each combo at each instance = array and for loop
    //update cant figure out about will do these for each nut
/////////////////////////////////////////////////////////////////
    const n1x = 495 // nut  value + .5size
    const n1y = 315// nut y value + .5size


    // hit-test the nut render
   mouseIsInsideCircle()

    let rand1x = Math.floor(Math.random() * canvas.width - 20)
    let rand1y = Math.floor(Math.random() * canvas.height - 20)
    const nutR1 = new Nuts(rand1x, rand1y, 'yellow', 20, 20)
    canvas.addEventListener('mousedown', function (e) {

        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y;
        
        // if the mouse is inside the nut
        if (nut1.alive === true && mouseIsInsideCircle(mouseX, mouseY, n1x, n1y, radius)) {
            // erase the canvas
            ctx.clearRect(485, 305, 20, 20); // clears that certain square 
            nutR1.render()
        }
    }, false);
    canvas.addEventListener('mousedown', function (e){
        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y
        if (mouseIsInsideCircle(mouseX, mouseY, nutR1.x, nutR1.y, radius)){
            ctx.clearRect(nutR1.x, nutR1.y, 20, 20)
            nut1.render()
            nut1.alive = false
            console.log('nut1', nut1.alive)
        } 
    }, false)
    
///////////////////////////////////////////////////////////////////
    const n2x = 625 // nut  value + .5size
    const n2y = 220// nut y value + .5size

    mouseIsInsideCircle()

    let rand2x = Math.floor(Math.random() * canvas.width - 20)
    let rand2y = Math.floor(Math.random() * canvas.height - 20)
    const nutR2 = new Nuts(rand2x, rand2y, 'yellow', 20, 20)
    canvas.addEventListener('mousedown', function (e) {
        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y;
        // if the mouse is inside the nut
        if (nut2.alive === true && mouseIsInsideCircle(mouseX, mouseY, n2x, n2y, radius)) {
            // erase the canvas
            ctx.clearRect(615, 210, 20, 20); // clears that certain square 
            nutR2.render()
        }
    }, false);
    canvas.addEventListener('mousedown', function (e){
        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y
        if (mouseIsInsideCircle(mouseX, mouseY, nutR2.x, nutR2.y, radius)){
            ctx.clearRect(nutR2.x, nutR2.y, 20, 20)
            nut2.render()
            nut2.alive = false
            console.log('nut2', nut2.alive)
        }  
    }, false)


////////////////////////////////////////////////////////////////////
    const n3x = 465 // nut  value + .5size
    const n3y = 220// nut y value + .5size


    // hit-test the nut render
    mouseIsInsideCircle()

    let rand3x = Math.floor(Math.random() * canvas.width - 20)
    let rand3y = Math.floor(Math.random() * canvas.height - 20)
    const nutR3 = new Nuts(rand3x, rand3y, 'yellow', 20, 20)
    canvas.addEventListener('mousedown', function (e) {
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y;
        // if the mouse is inside the nut
        if (nut3.alive === true && mouseIsInsideCircle(mouseX, mouseY, n3x, n3y, radius)) {
            // erase the canvas
            ctx.clearRect(455, 210, 20, 20); // clears that certain square  
            nutR3.render()
        }
    }, false);
    canvas.addEventListener('mousedown', function (e){
        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y
        if (mouseIsInsideCircle(mouseX, mouseY, nutR3.x, nutR3.y, radius)){
            ctx.clearRect(nutR3.x, nutR3.y, 20, 20)
            nut3.render()
            nut3.alive = false
            console.log('nut3', nut3.alive)
        }  
    }, false)


/////////////////////////////////////////////////////////////////////    
    const n4x = 595 // nut  value + .5size
    const n4y = 315// nut y value + .5size


    // hit-test the nut render
    mouseIsInsideCircle()

    let rand4x = Math.floor(Math.random() * canvas.width - 20)
    let rand4y = Math.floor(Math.random() * canvas.height - 20)
    const nutR4 = new Nuts(rand4x, rand4y, 'yellow', 20, 20)
    canvas.addEventListener('mousedown', function (e) {
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y;
        // if the mouse is inside the nut
        if (nut4.alive === true && mouseIsInsideCircle(mouseX, mouseY, n4x, n4y, radius)) {
            // erase the canvas
            ctx.clearRect(585, 305, 20, 20); // clears that certain square 
            nutR4.render()
        }
    }, false);
    canvas.addEventListener('mousedown', function (e){
        e.preventDefault()
        let mousePos = getMousePos(canvas, e);
        let mouseX = mousePos.x;
        let mouseY = mousePos.y
        if (mouseIsInsideCircle(mouseX, mouseY, nutR4.x, nutR4.y, radius)){
            ctx.clearRect(nutR4.x, nutR4.y, 20, 20)
            nut4.render()
            nut4.alive = false
            console.log('nut4', nut4.alive)
            console.log(nut0.alive, nut1.alive, nut2.alive, nut3.alive, nut4.alive)
        }  
    }, false)

}

///////////////////////////////////////////////////////////////////
function gameLoop(){
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    start()
    console.log(nut0.alive, nut1.alive, nut2.alive, nut3.alive, nut4.alive)
    canvas.addEventListener('click', function (e) {
        if(nut0.alive === false &&
            nut1.alive === false &&
            nut2.alive === false &&
            nut3.alive === false &&
            nut4.alive === false 
            ){
                endgame()
                document.querySelector('#btm-right').innerText = "YOU DID IT! YOU'RE IN!!"
                console.log(nut0.alive, nut1.alive, nut2.alive, nut3.alive, nut4.alive)
        } else if(countdown <= 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            document.querySelector('#btm-right').innerText = "SORRY KID! TOO SLOW"
        }
    }), false

}


document.getElementById('restart').addEventListener('click', function(){
    document.querySelector('#btm-right').innerText = ''
    document.querySelector('#top-right').innerText = ''
    gameLoop()
    countdown = 20
    clearInterval(timer)
    console.log(nut0)
    

    // let nut0
    // let nut1
    // let nut2
    // let nut3
    // let nut4
})

gameLoop()