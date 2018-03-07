var ball;
var pipes =  [];
function setup(){
  createCanvas(400,600);
  ball = new Ball();
  pipes.push(new Pipe());
  diff=0;
}

function draw(){
  background(51);
  ball.show();
  ball.move();
  ball.shift();
  for(var i=pipes.length-1; i>=0; i--){
    pipes[i].show();
    pipes[i].update();
  }

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    ball.setDir(1);
  }else if (keyCode === LEFT_ARROW) {
    ball.setDir(-1);
  }
}
