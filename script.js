const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const rowsArray = [];
const colsArray = [];
const usedPositions = [];

const colorLightness = 68;
const lineLightness = 30;
const frequencies = [
    '#000000', //
    `hsl(300, 100%, ${colorLightness}%`, // 1
    `hsl(0, 100%, ${colorLightness}%`, // 2
    `hsl(0, 100%, ${colorLightness}%`, // 3
    `hsl(60, 100%, ${colorLightness}%`, // 4
    `hsl(0, 100%, ${colorLightness}%`, // 5
    `hsl(120, 100%, ${colorLightness}%`, // 6
    `hsl(0, 100%, ${colorLightness}%`, // 7
    `hsl(120, 100%, ${colorLightness}%`, // 8
    `hsl(60, 100%, ${colorLightness}%`, // 9
    `hsl(120, 100%, ${colorLightness}%`, // 10
    `hsl(0, 100%, ${colorLightness}%`, // 11
    `hsl(240, 100%, ${colorLightness}%`, // 12
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 14
    `hsl(0, 100%, ${colorLightness}%`, // 15
    `hsl(300, 100%, ${colorLightness}%`, // 16
    '#000000', //
    `hsl(120, 100%, ${colorLightness}%`, // 18
    '#000000', //
    `hsl(120, 100%, ${colorLightness}%`, // 20
    `hsl(0, 100%, ${colorLightness}%`, // 21
    `hsl(0, 100%, ${colorLightness}%`, // 22
    '#000000', //
    `hsl(240, 100%, ${colorLightness}%`, // 24
    `hsl(300, 100%, ${colorLightness}%`, // 25
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 27
    `hsl(0, 100%, ${colorLightness}%`, // 28
    '#000000', //
    `hsl(120, 100%, ${colorLightness}%`, // 30
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 32
    `hsl(0, 100%, ${colorLightness}%`, // 33
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 35
    `hsl(180, 100%, ${colorLightness}%`, // 36
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(120, 100%, ${colorLightness}%`, // 40
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 44
    `hsl(0, 100%, ${colorLightness}%`, // 45
    '#000000', //
    '#000000', //
    `hsl(120, 100%, ${colorLightness}%`, // 48
    `hsl(300, 100%, ${colorLightness}%`, // 49
    `hsl(0, 100%, ${colorLightness}%`, // 50
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 54
    `hsl(0, 100%, ${colorLightness}%`, // 55
    `hsl(0, 100%, ${colorLightness}%`, // 56
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(120, 100%, ${colorLightness}%`, // 60
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 63
    `hsl(300, 100%, ${colorLightness}%`, // 64
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 66
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 70
    '#000000', //
    `hsl(120, 100%, ${colorLightness}%`, // 72
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 77
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 80
    `hsl(300, 100%, ${colorLightness}%`, // 81
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 84
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 88
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 90
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 96
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 99
    `hsl(300, 100%, ${colorLightness}%`, // 100
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 108
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 110
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 120
    `hsl(300, 100%, ${colorLightness}%`, // 121
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(0, 100%, ${colorLightness}%`, // 132
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    `hsl(300, 100%, ${colorLightness}%` // 144
];

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

function populateCell (text, x, y, color) {
    if (text !== 0) {
        if (!color) {
            ctx.fillStyle = frequencies[parseInt(text)];
        }
        ctx.fillText(text, (x + 1) * cellWidth, (y + 1) * cellHeight);
        }
    }

function drawTable () {
    ctx.strokeStyle = `hsl(0, 0%, ${lineLightness}%)`;
    for (let i = 0; i < rowsArray.length; i++) {
        rowsArray[i].draw();
    }
    for (let i = 0; i < colsArray.length; i++) {
        colsArray[i].draw();
    }
    ctx.fillStyle = '#ffffff';
    for (let i = 1; i < 13; i++) {
        populateCell(i, i, 0, '#ffffff');
        populateCell(i, 0, i, '#ffffff');
    }
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
});

init();