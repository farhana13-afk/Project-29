const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
    img = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(410,300,340,10);

    //level 1
    block1 = new Box(270,280,40,40);
    block2 = new Box(310,280,40,40);
    block3 = new Box(350,280,40,40);
    block4 = new Box(390,280,40,40);
    block5 = new Box(430,280,40,40);
    block6 = new Box(470,280,40,40);
    block7 = new Box(510,280,40,40);
    block8 = new Box(550,280,40,40);
    //level 2
    block9 = new Box(290,240,40,40);
    block10 = new Box(330,240,40,40);
    block11 = new Box(370,240,40,40);
    block12 = new Box(410,240,40,40);
    block13 = new Box(450,240,40,40);
    block14 = new Box(490,240,40,40);
    block15 = new Box(530,240,40,40);
    //level 3
    block16 = new Box(310,200,40,40);
    block17 = new Box(350,200,40,40);
    block18 = new Box(390,200,40,40);
    block19 = new Box(430,200,40,40);
    block20 = new Box(470,200,40,40);
    block21 = new Box(510,200,40,40);
    //level 4
    block22 = new Box(330,160,40,40);
    block23 = new Box(370,160,40,40);
    block24 = new Box(410,160,40,40);
    block25 = new Box(450,160,40,40);
    block26 = new Box(490,160,40,40);
    //level 5
    block27 = new Box(350,140,40,40);
    block28 = new Box(390,140,40,40);
    block29 = new Box(430,140,40,40);
    block30 = new Box(470,140,40,40);
	//polygon
	var poptions={
		'isStatic':false,
		'restitution':0,
		'friction':1,
		'density':5
	}
    polygon = Bodies.circle(50,100,20, poptions);
    World.add(world,polygon);
    //slingShot 
    slingShot = new SlingShot(this.polygon,{x:100,y:200});
    
}
function draw(){
    background("lightblue");
    Engine.update(engine);

    stand.display();
    //polygon.display();
    imageMode(CENTER);
    image (img, this.polygon.position.x, this.polygon.position.y,40,40);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(polygon);
    }
}