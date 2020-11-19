
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
const divisionHeight=300;
var particles = [];
var plinkos = [];
var divisions =[];
function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(240,787,2000,30);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 40; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }
  for (var j = 20; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }
    
  for (var j = 40; j <=width; j=j+50)   {
       plinkos.push(new Plinko(j,275));
    }
  for (var j = 20; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  ground.display();
}





