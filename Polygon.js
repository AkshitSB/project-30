class Polygon{
    constructor(x, y, radius) {
      var options={
        isStatic:false,
        'restitution': 0.1 ,
        'friction':1,
        'density':1.2 
      }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2); 
        ellipseMode(RADIUS);
      }
}