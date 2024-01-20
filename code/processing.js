void setup() {
    size(640, 360); // Set the size of the canvas
    noStroke(); // Remove the stroke from the circle
    fill(0, 0, 255); // Set the fill color to blue
}

void draw() {
    background(255); // Set the background to white
    ellipse(mouseX, mouseY, 100, 100); // Draw the circle at the mouse position
}
