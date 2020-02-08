const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,330);
    ground1 = new ground(600,380);
    box2 = new Box(1000,330);
    pig1 = new Pig(900, 330);
    log1 = new Log(900,300, 250, PI/2);

    box3 = new Box(800,250);
    box4 = new Box(1000,250);
    pig2 = new Pig(900, 250);
    log2 = new Log(900,220, 250, PI/2);

    box5 = new Box(900,150);
    log3 = new Log(850,150, 150, PI/3);
    log4 = new Log(925,150, 150, -PI/3);

    bird = new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground1.display();
   pig1.display();
   log1.display();

   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();

   log3.display();
   log4.display();

   bird.display();
}