const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var slingshot;


function setup(){
    createCanvas(1200, 650);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(500,540,400,15);

    block1 = new Box(340,510,40,40);
    block2 = new Box(380,510,40,40);
    block3 = new Box(420,510,40,40);
    block4 = new Box(460,510,40,40);
    block5 = new Box(500,510,40,40);
    block6 = new Box(540,510,40,40);
    block7 = new Box(580,510,40,40);
    block8 = new Box(620,510,40,40);
    block9 = new Box(660,510,40,40);

    block10 = new Box(380,470,40,40);
    block11 = new Box(420,470,40,40);
    block12 = new Box(460,470,40,40);
    block13 = new Box(500,470,40,40);
    block14 = new Box(540,470,40,40);
    block15 = new Box(580,470,40,40);
    block16 = new Box(620,470,40,40);

    block17 = new Box(420,430,40,40);
    block18 = new Box(460,430,40,40);
    block19 = new Box(500,430,40,40);
    block20 = new Box(540,430,40,40);
    block21 = new Box(580,430,40,40);

    block22 = new Box(460,390,40,40);
    block23 = new Box(500,390,40,40);
    block24 = new Box(540,390,40,40);

    block25 = new Box(500,350,40,40);

    ground1 = new Ground(700,300,200,15);

    block26 = new Box(630,270,40,40);
    block27 = new Box(670,270,40,40);
    block28 = new Box(710,270,40,40);
    block29 = new Box(750,270,40,40);

    block30 = new Box(650,230,40,40);
    block31 = new Box(690,230,40,40);
    block32 = new Box(730,230,40,40);

    block33 = new Box(690,190,40,40);
    
    polygon = new Polygon(50, 200, 20)
    slingshot = new Slingshot(polygon.body, {x:100, y:200})

}

function draw(){
    rectMode(CENTER);
    background("cyan");
    
    ground.display();
    ground1.display();
    strokeWeight(4);
    Engine.run(engine);
    
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    fill("green");
    block10.display();    
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    fill("orange");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("pink");
    block22.display();
    block23.display();
    block24.display();
   fill("red")
    block25.display();
    fill("blue");
    block26.display();
    block27.display();
    block28.display();    
    block29.display();
    fill("yellow");
    block30.display();
    block31.display();
    
    block32.display();
    fill("green");
    block33.display();
    
    
   polygon.display();
   slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}

