
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, tree, boy, stone, slingshot;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boy = loadImage('boy.png')


}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(650, 650, 1300, 20)
	tree = new Tree(900, 150, 400, 500)

	mango1 = new Mango(1000, 300, 30, 50)
	mango2 = new Mango(1100, 300, 30, 50)
	mango3 = new Mango(1060,230, 30, 50)
	mango4 = new Mango(1200, 270, 30, 50)
	mango5 = new Mango(1120, 200, 30, 50)

	stone = new Stone(160, 450, 50)
	slingshot = new Sling(stone.body, {x: 160, y: 450})
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  image(boy, 150, 400, 150, 300)
 
  ground.display();
  tree.display();
  mango1.display();
  stone.display();
  slingshot.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {

		x: mouseX, 
		y: mouseY
	})
}

function mouseReleased(){

	slingshot.fly()
}