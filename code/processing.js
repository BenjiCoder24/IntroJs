var xPos
var yPos

function setup() {
  createCanvas(400, 400);
  
  //Inialize variable 
  xPos = 100
  yPos = 100
}

function draw() {
  background(220);
  
  xPos = mouseX
  yPos = mouseY
  
  ellipse(xPos, yPos, 55, 55);
}