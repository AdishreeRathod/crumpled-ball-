
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball;
 var ground;
 var right;
 var left;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
     isStatic:false,
	 restituition:0.3,
	 friciton:0,
	 density:1.2
	}
    ball=Bodies.circle(300,50,30,ball_options);
	World.add(world,ball);

	var groundopt={
		isStatic:true
	  }
	  ground= new Ground(width/2,670,width,20,groundopt);
	  right= new Ground(700,610,20,100,groundopt);
	  left= new Ground(600,610,20,100,groundopt);
	  	  World.add(world,ground);
			World.add(world,right);
			World.add(world,left);
	  
	
		Engine.run(engine);
  
}


function draw() {
  background("lightgrey");
  rectMode(CENTER);
  
  rect(width/2,670,width,20);
  rect(700,610,20,100);
  rect(600,610,20,100);
  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
 
} 
function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:80,y:-50})	}
}



