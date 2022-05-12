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

// // nuts specific spawn
// const nut0 = new Nuts(535, 150, 'yellow', 20, 20)
// const nut1 = new Nuts(485, 305, 'yellow', 20, 20)
// const nut2 = new Nuts(615, 210, 'yellow', 20, 20)
// const nut3 = new Nuts(455, 210, 'yellow', 20, 20)
// const nut4 = new Nuts(585, 305, 'yellow', 20, 20)
// nut0.render()
// nut1.render()
// nut2.render()
// nut3.render()
// nut4.render()


// // nuts random spawn
// const randX = Math.floor(Math.random() * canvas.width - 20)
// const randY = Math.floor(Math.random() * canvas.height - 20)
// const nutR0 = new Nuts(randX, randY, 'yellow', 20, 20)
// const nutR1 = new Nuts(randX, randY, 'yellow', 20, 20)
// const nutR2 = new Nuts(randX, randY, 'yellow', 20, 20)
// const nutR3 = new Nuts(randX, randY, 'yellow', 20, 20)
// const nutR4 = new Nuts(randX, randY, 'yellow', 20, 20)


// GAME FUNCTIONS
// const gameLoopInterval = setInterval(gameLoop, 60)
//timer


//  // hit-test the nut render
//  function mouseIsInsideCircle(mouseX, mouseY, n0x, n0y, radius) {
//     let dx = mouseX - n0x;
//     let dy = mouseY - n0y;
//     return (dx * dx + dy * dy <= radius * radius); // checks if area of click is == to area of square location
// } 

// function getMousePos(canvas, e) {
//     let rect = canvas.getBoundingClientRect();
//     return {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//     }; // gets coordinates for the mouse click
// }

// start game on first click
canvas.addEventListener('click', startGame)


// function startGame(){
//     canvas.removeEventListener('click', startGame) // wont start game over and over
//     timer = setInterval(function(){ // going to take a sec off timer each second
//     countdown--;
//     console.log('end start', countdown, timer)
//     ctx.fillText('Time Remaining: ' + countdown, 10, 50);
//     if (countdown <= 0) {
//     clearInterval(timer)
//     }
//     }, 1000)
//     // console.log('start')
    
//     let n0x = 545 // nut  value + .5size
//     let n0y = 160// nut y value + .5size
//     radius = 15


//     // hit-test the nut render
//    mouseIsInsideCircle()

//     function getMousePos(canvas, e) {
//         let rect = canvas.getBoundingClientRect();
//         return {
//             x: e.clientX - rect.left,
//             y: e.clientY - rect.top
//         }; // gets coordinates for the mouse click
//     }

//     canvas.addEventListener('mousemove', function (e) {
//         let mousePos = getMousePos(canvas, e);
//         let message = 'Mouse position: ' + parseInt(mousePos.x) + ',' + parseInt(mousePos.y);
//         writeMessage(canvas, message);
//     }, false); //tracks location of mouse in canvas

//     let mousePos;
//     function writeMessage(canvas, message) {
//         ctx.clearRect(0, 0, canvas.width, 30);
//         ctx.font = '18pt Calibri';
//         ctx.fillStyle = 'black';
//         ctx.fillText(message, 10, 25);
//     } // shows above

//     canvas.addEventListener('click', function (e) {
//         if (nut0.alive = true){
//         e.preventDefault()
//         let mousePos = getMousePos(canvas, e);
//         let mouseX = mousePos.x;
//         let mouseY = mousePos.y;

//         if (mouseIsInsideCircle(mouseX, mouseY, n0x, n0y, radius)) {
//             // erase the canvas
//             ctx.clearRect(535, 150, 20, 20); // clears that certain square 
//             let randX = Math.floor(Math.random() * canvas.width - 20)
//             let randY = Math.floor(Math.random() * canvas.height - 20)
//             const nutR0 = new Nuts(randX, randY, 'yellow', 20, 20)
//             nutR0.render()
//         }
//         }
        
//     }
//     , false)
//     // canvas.removeEventListener('click', (e))
    



//     // want to figure out how to do this with an array of the differet x and ys of the squares
//     // need it to recieve each combo at each instance = array and for loop
//     //update cant figure out about will do these for each nut

//     const n1x = 495 // nut  value + .5size
//     const n1y = 315// nut y value + .5size


//     // hit-test the nut render
//    mouseIsInsideCircle()

//     canvas.addEventListener('mousedown', function (e) {
//         let mousePos = getMousePos(canvas, e);
//         let mouseX = mousePos.x;
//         let mouseY = mousePos.y;
//         // if the mouse is inside the nut
//         if (mouseIsInsideCircle(mouseX, mouseY, n1x, n1y, radius)) {
//             // erase the canvas
//             ctx.clearRect(485, 305, 20, 20); // clears that certain square 
//             let randX = Math.floor(Math.random() * canvas.width - 20)
//             let randY = Math.floor(Math.random() * canvas.height - 20)
//             const nutR1 = new Nuts(randX, randY, 'yellow', 20, 20)
//             nutR1.render()
//             canvas.e
//             // if (mouseIsInsideCircle(mouseX, mouseY, randX, randY, radius)) {
//             //     ctx.clearRect(randX, randY, 20, 20)
//             //     nut1.render()
//             // }
//         }

//     }, false);


//     const n2x = 625 // nut  value + .5size
//     const n2y = 220// nut y value + .5size


//     mouseIsInsideCircle()

//     canvas.addEventListener('mousedown', function (e) {
//         let mousePos = getMousePos(canvas, e);
//         let mouseX = mousePos.x;
//         let mouseY = mousePos.y;
//         // if the mouse is inside the nut
//         if (mouseIsInsideCircle(mouseX, mouseY, n2x, n2y, radius)) {
//             // erase the canvas
//             ctx.clearRect(615, 210, 20, 20); // clears that certain square 
//             let randX = Math.floor(Math.random() * canvas.width - 20)
//             let randY = Math.floor(Math.random() * canvas.height - 20)
//             const nutR2 = new Nuts(randX, randY, 'yellow', 20, 20)
//             nutR2.render()
//         }

//     }, false);

//     const n3x = 465 // nut  value + .5size
//     const n3y = 220// nut y value + .5size


//     // hit-test the nut render
//     mouseIsInsideCircle()

//     canvas.addEventListener('mousedown', function (e) {
//         let mousePos = getMousePos(canvas, e);
//         let mouseX = mousePos.x;
//         let mouseY = mousePos.y;
//         // if the mouse is inside the nut
//         if (mouseIsInsideCircle(mouseX, mouseY, n3x, n3y, radius)) {
//             // erase the canvas
//             ctx.clearRect(455, 210, 20, 20); // clears that certain square 
//             let randX = Math.floor(Math.random() * canvas.width - 20)
//             let randY = Math.floor(Math.random() * canvas.height - 20)
//             const nutR3 = new Nuts(randX, randY, 'yellow', 20, 20)
//             nutR3.render()
//         }

//     }, false);

//     const n4x = 595 // nut  value + .5size
//     const n4y = 315// nut y value + .5size


//     // hit-test the nut render
//     mouseIsInsideCircle()

//     canvas.addEventListener('mousedown', function (e) {
//         let mousePos = getMousePos(canvas, e);
//         let mouseX = mousePos.x;
//         let mouseY = mousePos.y;
//         // if the mouse is inside the nut
//         if (mouseIsInsideCircle(mouseX, mouseY, n4x, n4y, radius)) {
//             // erase the canvas
//             ctx.clearRect(585, 305, 20, 20); // clears that certain square 
//             let randX = Math.floor(Math.random() * canvas.width - 20)
//             let randY = Math.floor(Math.random() * canvas.height - 20)
//             const nutR4 = new Nuts(randX, randY, 'yellow', 20, 20)
//             nutR4.render()
//         }
        
//     }, false);
    
// }
let countdown = 11
let timer 

let nutArr = [
    new Nuts(535, 150, 'yellow', 20, 20),
    // new Nuts(485, 305, 'yellow', 20, 20),
    // new Nuts(615, 210, 'yellow', 20, 20),
    // new Nuts(455, 210, 'yellow', 20, 20),
    // new Nuts(585, 305, 'yellow', 20, 20)
]

let handleClick = function(mouse){
    if(Nuts.x < mouse.x &&
       Nuts.x + Nuts.width > mouse.x &&
       Nuts.y < mouse.y &&
       Nuts.y + Nuts.height > mouse.y){
           return true
       }
       return false
}

canvas.addEventListener('click', function(e) {
    let rect = canvas.getBoundingClientRect();
    let mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
    for (let i=0; i < nutArr.length; i++) {
        nutArr[i].handleClick();
    }
});




function startGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.removeEventListener('click', startGame)
    timer = setInterval(function(){ // going to take a sec off timer each second
        //     countdown--;
            ctx.fillText('Time Remaining: ' + countdown, 10, 50);
            if (countdown <= 0) {
            clearInterval(timer)
            }
            }, 1000)
    for( let i = 0; i < nutArr.length; i++){
        nutArr[i].render()
    }

}