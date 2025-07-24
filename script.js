const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const rowsArray = [];
const colsArray = [];
const usedPositions = [];
let quizActive = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.font = '30px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';


window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const cellWidth = canvas.width / 14;
const cellHeight = canvas.height / 14;
const borderWidth = 3;

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    
});

class ColBorder {
    constructor (xValue) {
        this.x = xValue;
        this.y = cellHeight / 2;
    }

    draw () {
        ctx.lineWidth = borderWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, canvas.height - this.y);
        ctx.stroke();
    }
}

class RowBorder {
    constructor (yValue) {
        this.x = cellWidth / 2;
        this.y = yValue;
    }

    draw () {
        ctx.lineWidth = borderWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(canvas.width - this.x, this.y);
        ctx.stroke();
    }
}

function drawCircle (x, y) {
    ctx.fillStyle = '#0066ff';
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
}

function populateCell (text, x, y, color="#ffffff") {
    ctx.fillText(text, (x + 1) * cellWidth, (y + 1) * cellHeight);
}

function drawTable () {
    ctx.strokeStyle = '#ffffff';
    for (let i = 0; i < rowsArray.length; i++) {
        rowsArray[i].draw();
    }
    for (let i = 0; i < colsArray.length; i++) {
        colsArray[i].draw();
    }
    ctx.fillStyle = '#ffffff';
    for (let i = 1; i < 13; i++) {
        populateCell(i, i, 0);
        populateCell(i, 0, i);
    }
    ctx.fillStyle = '#abc7ffff';
}

function init () {
    let colBorderX = cellWidth * 0.5;
    let rowBorderY = cellHeight * 0.5;
    for (let i = 0; i < 14; i++) {
        rowsArray.push(new RowBorder(rowBorderY));
        rowBorderY += cellHeight;
    }
    for (let i = 0; i < 14; i++) {
        colsArray.push(new ColBorder(colBorderX));
        colBorderX += cellWidth;
    }
    drawTable();
}

canvas.addEventListener('click', function (event) {
    mouse.x = Math.floor((event.x - cellWidth / 2) / cellWidth);
    mouse.y = Math.floor((event.y - cellHeight / 2) / cellHeight);
    populateCell(mouse.x * mouse.y, mouse.x, mouse.y);
    console.log({ x: mouse.x, y: mouse.y });
});

init();