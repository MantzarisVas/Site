function Ball(){
  this.y=height*0.2;
  this.x=width/2;
  this.xdir = 0;
  this.r=10;
  this.gravity=0.6;
  this.velocity=0;

  this.show = function(){
    noStroke();
    fill(255,10,10);
    ellipse(this.x,this.y, this.r*2, this.r*2);
  }

  this.setDir = function(dir){
    this.xdir = dir;
  }

  this.shift = function(dir){
    this.x+=this.xdir*5;
  }

  this.move = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y>height-this.r){
      this.y=height-this.r;
      this.velocity=0;
    }
    if(this.x > width-this.r){
      this.x=width-this.r;
    }
    if(this.x <= this.r){
      this.x=this.r;
    }
  }
}
