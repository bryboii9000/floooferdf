
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobOb1,bobOb2,bobOb3,bobOb4,bobOb5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

	roof = new Flyoor(100,100,100,100)
}


function draw() {
  rectMode(CENTER);
  background(100,234,74);
  
  drawSprites();
 
}



