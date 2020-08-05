var fixedRect, movingRect

function setup(){
  createCanvas(1200,800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "black";
    fixedRect.debug = true;
    movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "pink";
    movingRect.debug = true;
  }

  function draw() {
    background(15,55,34);
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.shapeColor = "red"
      fixedRect.shapeColor = "blue"
  }
  else{
    movingRect.shapeColor = "pink"
    fixedRect.shapeColor = "black"
  }
  drawSprites();
}