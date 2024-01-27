var xpos, ypos; // Variables to store the position of the ball
var xvel, yvel; // Variables to store the velocity (speed) of the ball

function setup() {
  createCanvas(400, 500); // Create a canvas of size 400x400 pixels
  xpos = 200; // Set initial x position to 200 (middle of the canvas)
  ypos = 200; // Set initial y position to 200 (middle of the canvas)
  xvel = 3; // Set the horizontal movement speed
  yvel = 3; // Set the vertical movement speed
}

function draw() {
  background(220); // Set the background color of the canvas

  // Update the position of the ball
  xpos = xpos + xvel; // Move the ball horizontally
  ypos = ypos + yvel; // Move the ball vertically

  // Check if the ball hits the left or right edge
  if (xpos > width -25 || xpos < 25) {
    xvel = xvel * -1; // Reverse the horizontal direction
  }

  // Check if the ball hits the top or bottom edge
  if (ypos > height -25 || ypos < 25) {
    yvel = yvel * -1; // Reverse the vertical direction
  }

  // Draw the ball
  fill('blue'); // Set the color of the ball
  noStroke(); // Do not draw a border around the ball
  ellipse(xpos, ypos, 50, 50); // Draw the ball as a circle
}
