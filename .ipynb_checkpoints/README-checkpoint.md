# IntroJs
## Handout 1: Introduction to JavaScript
### What is JavaScript?

JavaScript is a high-level, dynamic programming language primarily used for creating interactive features on websites. It's an essential part of the web development trio: HTML (structure), CSS (style), and JavaScript (behavior).
Unlike HTML and CSS, which are markup and style sheet languages respectively, JavaScript is a true programming language that enables you to implement complex features on web pages.
JavaScript Capabilities:

+ **Client-Side Operations**: JavaScript runs in the user's web browser and can be used to control webpage behavior, validate forms, create cookies, and more.

+ **Server-Side Development**: With environments like Node.js, JavaScript can also be used for backend development.
#### Why Learn JavaScript?

It's one of the most popular programming languages globally.
Essential for web development and has a wide range of applications, from web apps to game development.

### Handout 2:Basic JavaScript Program with p5.js

## Variables in JavaScript

Variables are like containers for storing data values. JavaScript has three ways to declare variables, which are `let`, `const`, and `var`.

- `let` allows you to declare variables whose values can change and are limited to the block in which they are defined.
- `const` is used for variables whose values are not meant to change (constant).
- `var` is the oldest keyword for defining a variable, but its use is now generally replaced by `let` and `const` due to its less predictable function-scoped behavior.

## Functions in JavaScript with p5.js

Functions are blocks of code designed to perform a particular task and are executed when "called" or "invoked".

In p5.js, you often use predefined functions such as `setup()` and `draw()`, but you can also define your own.

A function definition can include parameters, which are used when calling the function to pass in data.

**Example Function:**

\```javascript
function drawCircle(x, y, size) {
  ellipse(x, y, size, size);
}
\```

In this example, `x`, `y`, and `size` are parameters of the `drawCircle` function, which draws a circle at position `(x, y)` with the specified size.

## Function Calls and Input Parameters

To use a function, you call it with specific values, known as arguments.

**Example Function Call:**

```javascript
drawCircle(100, 200, 50);
```

Here we call `drawCircle` with arguments `100`, `200`, and `50`. When `drawCircle` executes, it uses these values to draw an ellipse.

## Creating Interactive Web Elements with p5.js

p5.js provides a full set of drawing functionality and handles the interaction with the HTML/CSS for you.

Instead of manually handling canvas and events, p5.js offers functions like `mouseX` and `mouseY` to track the mouse position.

**Sample p5.js Program:**

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCircle(mouseX, mouseY, 50);
}

function drawCircle(x, y, size) {
  fill('blue');
  noStroke();
  ellipse(x, y, size, size);
}
```

In this simple p5.js sketch, `drawCircle` is defined to take `x`, `y`, and `size` as input parameters and uses them to draw a circle.

The `draw` function is called repeatedly by p5.js and uses the `mouseX` and `mouseY` variables provided by p5.js to draw a circle that follows the mouse cursor.

## Arrays in JavaScript with p5.js

Arrays are used to store multiple values in a single variable. This is useful for storing a list of elements, like multiple circle positions.

![array_image](./pictures/array_image.png)

In p5.js, you can use arrays to manage multiple objects and draw them in the `draw` function.

**Example of Using Arrays:**

```javascript
let phrases = [];

function setup() {
  createCanvas(400, 400);
  // Initialize the array with four text values
  phrases[0] = "Hello, World!";
  phrases[1] = "Welcome to p5.js!";
  phrases[2] = "Coding is fun!";
  phrases[3] = "Enjoy creating!";
  
  // Set text characteristics
  textSize(16);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  // Display each text value at a different position
  text(phrases[0], width / 2, 100); // Display the first phrase
  text(phrases[1], width / 2, 150); // Display the second phrase
  text(phrases[2], width / 2, 200); // Display the third phrase
  text(phrases[3], width / 2, 250); // Display the fourth phrase
}


```


## For-Loops in JavaScript

In JavaScript, a `for` loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The `for` loop is commonly used to iterate over data structures like arrays.

### Syntax of a for Loop

The syntax of a `for` loop is:

```javascript
for (initialization; condition; final-expression) {
  // code to be executed for each iteration
}
```

- **Initialization** - Here, you typically define and set your loop counter to a starting value.
- **Condition** - This expression is checked before the execution of every iteration. If it evaluates to `true`, the loop continues; if it evaluates to `false`, the loop stops.
- **Final-expression** - After each iteration, this expression is executed, usually incrementing or decrementing the loop counter.

### Example: Displaying Text from an Array with a for Loop

Let's look at an example that displays multiple strings of text on the canvas, each stored in an array, using a `for` loop with p5.js:

```javascript
let phrases = [];

function setup() {
  createCanvas(400, 400);
  // Initialize the array with four text values
  phrases[0] = "Hello, World!";
  phrases[1] = "Welcome to p5.js!";
  phrases[2] = "Coding is fun!";
  phrases[3] = "Enjoy creating!";

  createCanvas(400, 400);
  textSize(16);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  // Use a for loop to display each phrase
  for (let i = 0; i < phrases.length; i++) {
    text(phrases[i], width / 2, 100 + i * 50);
  }
}
```

In this example:

- We have an array named `phrases` that contains four text strings.
- In the `draw` function, we use a `for` loop to iterate over the array.
- For each iteration, the loop uses the `text()` function to display the current string on the canvas.
- The `i` variable acts as the index for the array and as part of the calculation for the `y` position to space out each string vertically.

### Explanation of the for Loop in the Example

- The loop starts with `i` initialized to `0`.
- The condition `i < phrases.length` ensures the loop runs as long as `i` is less than the number of elements in the `phrases` array.
- After each iteration, `i` is incremented by `1` through `i++`.
- This results in each element of the `phrases` array being accessed in sequence and displayed on the screen.

### Conclusion

The `for` loop is a powerful tool in JavaScript for iterating through arrays and other iterable objects. By understanding and using `for` loops, you can perform repeated operations efficiently in your code.



## Let's get started 

### open the P5js editor

Open p5js editior;

https://editor.p5js.org/

log in with your google account

![login picture](./pictures/login_image.png)

![google login](./pictures/google_login_image.png)

#### Sample Program:

```

function setup() {
  createCanvas(400, 400);
  
  //Inialize variable 
  //xPos = 100

}

function draw() {
  background(220);
  
  //xPos = mouseX
  
  ellipse(100, 100, 55, 55);
}
```

full code
```
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

```

Detailed code explanation that demonstrates creating a canvas and drawing a circle that follows the mouse cursor.
### Handout 3: Introduction to Object-Oriented Programming (OOP)
#### What is OOP?

+ A programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes), and code, in the form of procedures (often known as methods).
Key Concepts in OOP:

+ Class: Template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).
Object: Instance of a class. An object in JavaScript is a standalone entity, with properties and type.
Encapsulation:

+ Encapsulation is the bundling of data and the methods that operate on that data under a single unit or class. It restricts direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the methods and data.
### Handout 4: Refactoring into a Class
From Functions to Classes:

+ Transitioning from a simple function-based approach to a class-based approach. This involves encapsulating functionality within a class.
Creating a Class in JavaScript:

```
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

let canvas = document.getElementById('myCanvas');
let circle = new Circle(canvas);
```

Detailed explanation of the Circle class example, breaking down the constructor and methods like updateMousePosition and draw.

Now we start to use the class in our p5js code:

```
// Define the Circle class in p5.js
class Circle {
  constructor(x, y) { //constructor is called when the object is created with 'new Circle(..)
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

// Create a global circle object
let circle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize the circle object with some starting coordinates
  circle = new Circle(width / 2, height / 2);
}

function draw() {
  background(255);

  // Update the circle's position to the mouse coordinates
  circle.x = mouseX;
  circle.y = mouseY;

  // Draw the circle
  circle.draw();
}


```


Advantages of Using Classes:

**Organizes code**: easier to read, maintain, and debug.
Reusability: once a class is written, it can be used to create numerous objects.
Conclusion and Further Resources
Recap and Encouragement:

JavaScript is a versatile language with wide-ranging applications.
Encourage students to experiment with code and build their own small projects.



