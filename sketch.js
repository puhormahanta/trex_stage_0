var edges
var trex ,trex_running;
var ground,groundimage;
function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage= loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  edges= createEdgeSprites()
  //create a trex sprite
 trex= createSprite(50,180,20,20)
 trex.addAnimation("running",trex_running)
 trex.scale= 0.5

 ground= createSprite(200,185,400,10)
 ground.velocityX= -4
 ground.addImage("ground",groundimage)
}

function draw(){
  background(0)
  if(keyDown("space")) {
    trex.velocityY= -10
  }
  trex.velocityY= trex.velocityY +0.8
  if(ground.x<30){
    ground.x=ground.width/2
  }
trex.collide(ground);
drawSprites()
}
