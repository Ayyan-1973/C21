var fixedRectangle,movingRectangle
function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(200,200,50,80);
  movingRectangle=createSprite(400,200,80,30);
 box=createSprite(200,100,50,50);
  fixedRectangle.shapeColor="green";
  movingRectangle.shapeColor="green";
  box.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  console.log(movingRectangle.x-fixedRectangle.x)
  if(isTouching(movingRectangle,box)){
  box.shapeColor="black";
  movingRectangle.shapeColor="black"; 
  }
  else{
  box.shapeColor="red";
  movingRectangle.shapeColor="green";
  }
  drawSprites();
}
