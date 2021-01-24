class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution:0.5,
      friction:1,
      density:1
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
       
    if(this.body.speed<4)
        {
            push();
            var pos = this.body.position;
            var angle = this.body.angle;
            translate(pos.x ,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            tint(255,this.visibility);
            this.visibility = this.visibility-5;
            pop();
            
        }
      
  }

};