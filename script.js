function setUpCanvas() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    ctx.translate(0.5, 0.5);
  
    // Set display size (vw/vh).
    var sizeWidth = 100 * window.innerWidth / 100,
      sizeHeight = 87 * window.innerHeight / 100 || 766;
  
    //Setting the canvas site and width to be responsive 
    canvas.width = sizeWidth;
    canvas.height = sizeHeight;
    canvas.style.width = sizeWidth;
    canvas.style.height = sizeHeight;
  }
  
  window.onload = setUpCanvas();

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})


canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
         const x2 = e.offsetX
         const y2 = e.offsetY

        
        drawLine (x, y, x2, y2)
        x = x2
        y = y2
    }
    
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke()
}

increaseBtn.addEventListener('click', () => {
    size +=5

    if(size > 50) {
        size = 50
    }
    updateSizeOnScreen() 
})

decreaseBtn.addEventListener('click', () => {
    size -=5
    if(size < 5) {
        size = 5
    }
    updateSizeOnScreen() 
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})