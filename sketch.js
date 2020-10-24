const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world,object
var ball
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world =engine.world;

  var options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,50,50,options);
  World.add(world,ground);
  var options={restitution:0.8}
  ball= Bodies.circle(200,200,30,options);
  World.add(world,ball);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50)  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}
