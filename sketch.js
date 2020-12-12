const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

 roof=new Ground(500,50,500,20)

  ball = new Ball(330, 200, 80, 80);
  ball1 = new Ball(400,200,80,80);
  ball2 = new Ball(470,200,80,80);
  ball3 = new Ball(540,200,80,80)
  ball4 = new Ball(610,200,80,80);
  rope = new Rope(ball.body, { x: 330, y: 50 });
  rope1 = new Rope(ball1.body, { x: 400, y: 50 });
  rope2 = new Rope(ball2.body, { x: 470, y: 50 });
  rope3 = new Rope(ball3.body, { x: 540, y: 50 });
  rope4 = new Rope(ball4.body, { x: 610, y: 50 });
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
 
  
roof.display();
  ball.display();
  rope.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-100})
  }
}


