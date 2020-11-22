const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var backImage;

function preload(){
backImage=loadImage("Images/bg2.jpg");
}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  // backImage.setScale=20;
 
  ground=new Ground(600,height,1200,20);

  box=new Box(700,320,70,70);
  box1=new Box(920,320,70,70);
  box2=new Box(700,240,70,70);
  box3=new Box(920,240,70,70)

  pig=new Pig(810,350,50,50);
  pig1=new Pig(810,220,50,50);

  bird=new Bird(100,100,50,50);

  log=new Log(810,260,300,PI/2);
  log1=new Log(810,180,300,PI/2);
  log2=new Log(760,120,150,PI/7);
  log3=new Log(870,120,150,-PI/7);
}

function draw() {
  // background("white");
  background(backImage);

  Engine.update(engine);

  ground.display();

  box.display();
  box1.display();
  box2.display();
  box3.display();

  pig.display();
  pig1.display();

  bird.display();

  log.display();
  log1.display();
  log2.display();
  log3.display();

}