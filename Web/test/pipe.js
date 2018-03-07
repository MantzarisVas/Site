var diff=0;
function setDiff(){
  diff+=5;
}
setInterval(setDiff, 3000);

function Pipe(){
  this.space = 200/diff;
  this.y=height;
  this.left=random(width/2);
  this.right=random(width/2);
  this.h=5;
  this.speed=3;

  this.show = function(){
    fill(255);
    rect(0, this.y, this.h, this.left);
    rect(this.left, this.y + this.space, this.h, this.right);
  }

  this.update = function(){
    this.y-=this.speed;
  }
}
