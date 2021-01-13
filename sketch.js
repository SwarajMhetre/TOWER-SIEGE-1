const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
 // polygon_img=loadImage("polygon.png");
 // backgroundImg=loadImage("bg.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(1100,500);
  ground = new Ground();
  stand1 = new Stand(480,300,270,10);
  stand2 = new Stand(800,200,200,10);
 
  //level one
  block1 = new Block(370,275,30,40);  
  block2 = new Block(400,275,30,40);
  block3 = new Block(430,275,30,40);
  block4 = new Block(460,275,30,40);
  block5 = new Block(490,275,30,40);
  block6 = new Block(520,275,30,40);
  block7 = new Block(550,275,30,40);
  block8 = new Block(580,275,30,40);
  //level two
  block9 = new Block(400,235,30,40);
  block10 = new Block(430,235,30,40);
  block11 = new Block(460,235,30,40);
  block12 = new Block(490,235,30,40);
  block13 = new Block(520,235,30,40);
  block14 = new Block(550,235,30,40);
  //level three
  block15 = new Block(430,195,30,40);
  block16 = new Block(460,195,30,40);
  block17 = new Block(490,195,30,40);
  block18 = new Block(520,195,30,40);
  //level four
  block19 = new Block(460,155,30,40);
  block20 = new Block(490,155,30,40);
  //level five
  block21 = new Block(480,115,30,40);

  //set two 
  //level one
  blocks1 = new Block(730,175,30,40);
  blocks2 = new Block(760,175,30,40);
  blocks3 = new Block(790,175,30,40);
  blocks4 = new Block(820,175,30,40);
  blocks5 = new Block(850,175,30,40);
  //level two
  blocks6 = new Block(760,135,30,40);
  blocks7 = new Block(790,135,30,40);
  blocks8 = new Block(820,135,30,40);
  //level three
  blocks9 = new Block(790,95,30,40);

  //ball  with slings
  ball = Bodies.circle(100,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:150,y:290});

}

function draw() {
 // background(backgroundImg);  
 background("black");
  Engine.update(engine);
 
  
 // ground.display();
  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("cyan")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("orange")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("violet")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("green")
  block19.display();
  block20.display();
 stroke(15)
 fill("blue")
  block21.display();

  stroke(15)
  fill("red")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("yellow")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill(255)
  blocks9.display();
 // THIS IS SOME TEXT WHICH IS COMMENTED ---- text("Break the TOWER if you can ",600,250)

  ellipse(ball.position.x,ball.position.y,20);
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
