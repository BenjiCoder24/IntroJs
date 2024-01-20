class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 50; // Set the size of the circle
    }
  
    // The draw function to display the circle
    draw() {
      fill('blue');
      noStroke();
      ellipse(this.x, this.y, this.size * 2, this.size * 2); // p5.js uses diameter for the ellipse size
    }
  }