const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject, groundObject, dustbinObject;
var dustbinObject1, dustbinObject2,dustbinObject3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   groundObject = new Ground(800, 670, 1600, 20);
   paperObject= new Paper(200, 450, 40);
   dustbinObject = new Dustbin(1200, 650);
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObject.display();
  dustbinObject.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});
	}
}

