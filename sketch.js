var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1,wall2,wall3,wall1Sprite,wall2Sprite,wall3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, 680, width,10);
	groundSprite.shapeColor=color(255)
	wall1=createSprite(500,575,20,200);
	wall1.shapeColor="red"
	wall2=createSprite(410,665,200,20);
	wall2.shapeColor="red";
	wall3=createSprite(320,575,20,200);
	wall3.shapeColor="red";
	


	engine = Engine.create();
	world = engine.world;
    var options={
		isStatic:true,
		restitution :1
		
		
	}

	 packageBody = Bodies.rectangle(packageSprite.x,packageSprite.y,40,40,options);
	 World.add(world, packageBody);
	 wall1Sprite=Bodies.rectangle(wall1.x,wall1.y,20,200,{isStatic:true})
	 World.add(world,wall1Sprite);
	 wall2Sprite=Bodies.rectangle(wall2.x,wall2.y,200,20,{isStatic:true})
	 World.add(world,wall2Sprite);
	 wall3Sprite=Bodies.rectangle(wall3.x,wall3.y,20,200,{isStatic:true})
	 World.add(world,wall3Sprite);
	 
	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10,{isStatic:true} );
 	World.add(world, ground);


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  wall1.x=wall1Sprite.position.x
  wall1.y=wall1Sprite.position.y
  wall2.x=wall2Sprite.position.x
  wall2.y=wall2Sprite.position.y
  wall3.x=wall3Sprite.position.x
  wall3.y=wall3Sprite.position.y



  console.log(packageBody.position.x);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode ===32){
Matter.Body.setStatic(packageBody,false)

}
}



