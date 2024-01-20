class Circle {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.mouseX = 0;
        this.mouseY = 0;
        this.canvas.addEventListener('mousemove', (event) => this.updateMousePosition(event));
    }

    updateMousePosition(event) {
        this.mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
        this.mouseY = event.clientY - this.canvas.getBoundingClientRect().top;
        this.draw();
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.context.arc(this.mouseX, this.mouseY, 50, 0, Math.PI * 2, true);
        this.context.fillStyle = 'blue';
        this.context.fill();
        this.context.stroke();
    }
}

let canvas = document.getElementById('myCanvas');
let circle = new Circle(canvas);
