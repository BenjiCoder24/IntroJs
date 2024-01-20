const p5 = require('node-p5');

// Create a p5 sketch
let sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(200);
  };

  p.draw = () => {
    p.fill(255, 0, 0);
    p.ellipse(p.width / 2, p.height / 2, 50, 50);
  };
};

// // Start the sketch
let p5Instance = p5(sketch);