const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const rowsArray = [];
const colsArray = [];
const usedPositions = [];

const frequencies = [
    '#000000', //
    '#ff7777', // 1
    '#ff7777', // 2
    '#ff7777', // 3
    '#77ff77', // 4
    '#ff7777', // 5
    '#77ff77', // 6
    '#ff7777', // 7
    '#77ff77', // 8
    '#77ff77', // 9
    '#77ff77', // 10
    '#ff7777', // 11
    '#7777ff', // 12
    '#000000', //
    '#ff7777', // 14
    '#ff7777', // 15
    '#ff7777', // 16
    '#000000', //
    '#77ff77', // 18
    '#000000', //
    '#77ff77', // 20
    '#ff7777', // 21
    '#ff7777', // 22
    '#000000', //
    '#7777ff', // 24
    '#ff7777', // 25
    '#000000', //
    '#ff7777', // 27
    '#ff7777', // 28
    '#000000', //
    '#77ff77', // 30
    '#000000', //
    '#ff7777', // 32
    '#ff7777', // 33
    '#000000', //
    '#ff7777', // 35
    '#7777ff', // 36
    '#000000', //
    '#000000', //
    '#000000', //
    '#77ff77', // 40
    '#000000', //
    '#ff7777', //
    '#000000', //
    '#ff7777', // 44
    '#ff7777', // 45
    '#000000', //
    '#000000', //
    '#77ff77', // 48
    '#ff7777', //
    '#ff7777', // 50
    '#000000', //
    '#000000', //
    '#000000', //
    '#ff7777', // 54
    '#ff7777', // 55
    '#ff7777', // 56
    '#000000', //
    '#000000', //
    '#000000', //
    '#77ff77', // 60
    '#000000', //
    '#000000', //
    '#ff7777', // 63
    '#ff7777', // 64
    '#000000', //
    '#ff7777', // 66
    '#000000', //
    '#000000', //
    '#000000', //
    '#ff7777', // 70
    '#000000', //
    '#77ff77', // 72
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#ff7777', // 77
    '#000000', //
    '#000000', //
    '#ff7777', // 80
    '#ff7777', // 81
    '#000000', //
    '#000000', //
    '#ff7777', // 84
    '#000000', //
    '#000000', //
    '#000000', //
    '#ff7777', // 88
    '#000000', //
    '#ff7777', // 90
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#ff7777', // 96
    '#000000', //
    '#000000', //
    '#ff7777', // 99
    '#ff7777', // 100
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#ff7777', // 108
    '#000000', //
    '#ff7777', // 110
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#000000', //
    '#ff7777', // 120
    '#ff7777', // 121
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
    '#ff7777', // 132
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
    '#ff7777' // 144
];

console.log(frequencies.length)

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
    if (!color) {
        ctx.fillStyle = frequencies[parseInt(text)];
    }
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