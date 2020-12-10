let drawingBoard = document.getElementById('drawingBoard');
drawingBoard.width = window.innerWidth;
drawingBoard.height = window.innerHeight;
let ctx = drawingBoard.getContext('2d');
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.lineCap = 'round';

let canDraw = false;
let previousPosition;

let isTouchDevice = 'ontouchstart' in document.documentElement;

console.log('isTouchDevice = ', isTouchDevice);

if (isTouchDevice) {
  drawingBoard.ontouchstart = (e) => {
    previousPosition = [e.touches[0].clientX, e.touches[0].clientY]
  }
  drawingBoard.ontouchmove = (e) => {
    drawLine(previousPosition[0], previousPosition[1], e.touches[0].clientX, e.touches[0].clientY);
  }
} else {
  drawingBoard.onmousedown = (e) => {
    console.log('begin');
    previousPosition = [e.clientX, e.clientY];
    canDraw = true;
  }
  drawingBoard.onmousemove = (e) => {
    if (canDraw) {
      drawLine(previousPosition[0], previousPosition[1], e.clientX, e.clientY);
    }
  }
  drawingBoard.onmouseup = (e) => {
    console.log('end');
    canDraw = false;
  }
}

function drawLine(previousX, previousY, currentX, currentY) {
  console.log('drawing...')
  ctx.beginPath();
  ctx.moveTo(previousX, previousY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  previousPosition = [currentX, currentY];
}