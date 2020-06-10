const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper,ground;
var dustbin1, dustbin2, dustbin3;
var engine, world;


function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,200,20);
	ground = new Ground(500, 700, 1000, 10);
	dustbin1 = new Dustbin(670,690,200,10);
	dustbin2 = new Dustbin(760,665,10,50);
	dustbin3 = new Dustbin(570,665,10,50);
}

function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:650, y:700});
	}
}
