var balloon

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,1);
}
  drawSprites();
}