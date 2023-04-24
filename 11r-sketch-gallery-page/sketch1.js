// CCLab Mini Project - 7.R Particles Template

let NUM_OF_PARTICLES = 30; // Decide the initial number of particles.

let particles = [];

function setup() {
  createCanvas(600, 600);

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width/3-40, width/3+40), random(height/3+40,height/3-40));
  }
}

function draw() {
  background(150,80,10,220);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
fill (200)
    text("Click to leaf-blow your yard", 10, 20);
//middle tree
  fill('brown');
  //rect(top left x, top left y, width, height)
  rect(395,500,20,100);
  fill('green');
  //ellipse(x point, y point, width, height)
  ellipse(405,470,70,70);
  
  //left tree
  fill('brown');
  //rect(top left x, top left y, width, height)
  rect(495,500,20,100);
  fill('green');
  //ellipse(x point, y point, width, height)
  ellipse(505,475,70,70);
  
  
  //right tree
  fill('brown');
  //rect(top left x, top left y, width, height)
  rect(295,500,20,100);
  fill('green');
  //ellipse(x point, y point, width, height)
  ellipse(305,475,70,70);
  
  }
  
}

// (optional) Design interaction by using Mouse or Keyboard;
// For example:
function mousePressed() {
    for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.explode();
    // we don't call the move() function here.
    // The updated speed values will be applied by the move() function in draw().
  }
}

//

class Particle {
  // constructor function
  constructor(x, y) {
    // properties
   // properties
    this.x = x;
    this.y = y;
  this.xSpd = random(-0.1, 0.1);
    this.ySpd = random(-0.1, 0.1);
    this.dia = random(5, 15);
    this.r = random (0,155);
    this.g = random (170,225);
    this.b = random (0,105);
    
  }

    explode() {
    this.xSpd = random(-10, 10);
    this.ySpd = random(-10, -10); // randomize the speed with high values
  }
  
    move() {
     
        this.x += this.xSpd;
    this.y += this.ySpd;
  }
  
  // methods (functions)
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    
    fill (this.r,this.g,this.b)
  

    //circle(0, 0, this.dia);
    
       beginShape();
    fill(this.r, this.g, this.b);
  vertex(25/3,40/3);
  vertex(30/3,5/3);
  vertex(55/3,35/3);
  vertex(70/3,15/3);
  vertex(75/3,50/3);
  vertex(95/3,47/3);
  vertex(75/3,70/3);
  vertex(92/3,75/3);
  vertex(60/3,80/3);
  vertex(32/3,95/3);
  vertex(37/3,85/3);
  vertex(18/3,82/3);
  vertex(32/3,72/3);
  vertex(5/3,40/3);
  endShape(CLOSE);
    pop();
  }
  // Implement (at least three) more methods(functions) for the particle's behaviors, for example:

  doSomething() {
    //
  }
}
