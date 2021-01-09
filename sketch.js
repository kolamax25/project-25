var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dbg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(400, 300, 40);
	Lwall = new Box(1500, 300, 20, 100);
	Rwall = new Box(1200, 300, 20, 100);
	Bwall = new Box(1350, 350, 300, 20);
	

	ground = new Ground(800, 380,2000, 50)

	//Create the Bodies Here.

	

	Engine.run(engine);
}  



function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();	
  Bwall.display();
	Lwall.display();
	Rwall.display();
	paper.display();
	imageMode(CENTER)
	image(dbg, 1350, 250, 300, 200)
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:100, y:-70});

	}

}

