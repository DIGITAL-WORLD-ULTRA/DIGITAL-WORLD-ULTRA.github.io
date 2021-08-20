var can = document.querySelector('#game');
const ctx = can.getContext('2d');
let snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200},];
function drawSnakePart(snakePart) 
{  
  ctx.fillStyle = 'lightblue';  
  ctx.strokestyle = 'darkblue';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
 
/*Function that prints the parts*/
function drawSnake() 
{  
  snake.forEach(drawSnakePart);
}