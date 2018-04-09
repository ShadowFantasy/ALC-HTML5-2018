
//Set a canvas to a varable
var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

//Ball size
var ballRadius = 10;

//Ball location on canvas
var x = canvas.width/2;
var y = canvas.height-30;

//Ball movement
var dx = 2;
var dy = -2;

//Ball movement delay
var delay = 10;

//Paddle
var paddleHeight = 10;
var paddleWidth = 75;

//Paddle location
var paddleX = (canvas.width-paddleWidth)/2;

//Paddle controls
var rightPressed = false;
var leftPressed = false;

//Paddle movment
var paddleMove = 2;


/*
////RED SQUARE
//ctx.beginPath();
//ctx.rect(20, 40, 50, 50);
//ctx.fillStyle = "#FF0000";
//ctx.fill();
//ctx.closePath
//
////GREEN CIRCLE
//ctx.beginPath();
//ctx.arc(240, 160, 20, 0, Math.PI*2, false);
//ctx.fillStyle = "green";
//ctx.fill();
//ctx.closePath();
//
////BLUE RECTANGLE OUTLINE
//ctx.beginPath();
//ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//ctx.stroke();
//ctx.closePath();
//
//
//
//function Draw() {
//    ctx.clearRect(0, 0, canvas.width, canvas.heigh);
//    ctx.beginPath();
//    ctx.arc(x, y, 10, 0, Math.PI*2);
//    ctx.fillStyle = "#0095DD";
//    ctx.fill();
//    ctx.closePath();
//    x += dx;
//    y += dy;
//}
*/

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        alert("Welp, you died. Better luck next time ¯\_(ツ)_/¯ ")
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += paddleMove;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= paddleMove;
    }
    
    x += dx;
    y += dy;
}


//'Draw' function every '10' milliseconds

setInterval(draw, delay);