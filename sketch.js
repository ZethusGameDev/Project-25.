const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, side1, side2, bottomSide;
var ground1;
var dustbinimage, dustbin1;

function preload() {
   
  dustbinimage = loadImage('dustbin.png');

}

function setup() {
	createCanvas(800, 700);
  
  dustbin1 = createSprite(675,620,150,100);
  dustbin1.addImage(dustbinimage);
  dustbin1.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1 = new paper(100,710,50);
   
   ground1 = new ground(400,715,800,30);
   
   side1 = new dustbin(617.5,650,10,100);
   bottom = new dustbin(675,695,125,10);
   side2 = new dustbin(700,650,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("255");
  
  paper1.display();
  
  ground1.display();

  side1.display();
  side2.display();
  bottom.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:310,y:-500})

	}
}

