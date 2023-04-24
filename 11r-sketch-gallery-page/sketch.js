let volcanos = [];

let amountOfVol = 1

let NUM_OF_PARTICLES = 4;
let particles = [];

let NUM_OF_MIST = 15;

let mists = [];

var Lavas = [];

let bruh;
let bruh1;
let bruh2;
let bruh3;
let bruh4;
let bruh5;


function setup() {
  createCanvas(700, 500);
  
  bruh = width/2.5
  bruh1 = 3*height/3.5
  bruh2 = 350
  bruh3 = 75
  bruh4 =150

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(0, width/3),random(0,height/5))
  }

  for (let i = 0; i < amountOfVol; i++) {
    volcanos[i] = new Volcano(
     bruh,bruh1,
      bruh2,
      bruh3,
      bruh4
    );
  }
  
   for (var i = 0; i < amountOfVol; i++) {
    Lavas[i] = new Lava(  bruh,bruh1,
      bruh2,
      bruh3,
      bruh4,
     150);
  }

  for (let i = 0; i < NUM_OF_MIST; i++) {
    mists[i] = new Mist(random(0, width), random(0, height));
  }
}

function draw() {

  r = random (0,255);
  
 // console.log(frameCount%300)
  if (300>frameCount%300&&frameCount%300>275) {
    background (r);
    
  }
  else {
    background(random(185, 215), random(30, 50), random(10, 30), 100);
  }
  
  for (let i = 0; i < amountOfVol; i++) {
    let v = volcanos[i];
    v.show();
    if (mouseIsPressed === true) {
      console.log('yes')
      Lavas[i].fire();
    }
  }
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
    //p.wind();
    fill(250);
    text("Manuvear mouse wheel to change wind",10,20);
    text("Click mouse to see BOOM",10,40);
    for (let i = 0; i < NUM_OF_MIST; i++) {
      let m = mists[i];
      m.view();
      m.flow();
    }
  }
}




// (optional) Design interaction by using Mouse or Keyboard;
// For example:
function mouseWheel() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.explode();

    for (let i = 0; i < mists.length; i++) {
      let m = mists[i];
      m.wind();
    }
  }
  // we don't call the move() function here.
  // The updated speed values will be applied by the move() function in draw().
  //  }
  //}
}
//

class Particle {
  // constructor function
  constructor(x, y) {
    // properties
    // properties
    this.x = x;
    this.y = y;
    this.xSpd = random(0.06,0.1);
    this.ySpd = random(-0.01,0.01);
    this.dia = random(5, 15);
    this.r = random(200, 255);
    this.g = random(40, 55);
    this.b = random(40, 55);
    this.bruh = random (130,200);
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
    strokeWeight(0);
    fill(this.r, this.g, this.b, 0);

    //circle(0, 0, this.dia);

    beginShape();
    stroke (0);
    
    fill(this.bruh);
    //fill(this.r, this.g, this.b,80);
    strokeWeight(0);
    ellipse(20,20,70, 50);
  ellipse(40, 30, 70, 50);
  ellipse(60,20,70, 50);
    endShape(CLOSE);
    pop();
  }

  explode() {
    this.xSpd = random(3, 6);
    this.ySpd = random(-3, 3); // randomize the speed with high values
  }

  wind() {
    let dx = mouseX - pmouseX;
    let dy = mouseY - pmouseY;
    this.xSpd = dx * 0.5;
    this.ySpd = dy * 0.5; // randomize the speed with high values
   // console.log(this.xSpd);
  }
}

class Volcano {
  constructor(x, y, tempWidth, tempTopWidth, tempHeight, amount) {
    this.x = x;
    this.y = y;

    this.width = tempWidth;
    this.topWidth = tempTopWidth;

    this.height = tempHeight;
    this.rcolor = random(76, 85);
    this.bcolor = random (39,43);
    this.gcolor = random (18,22);
    this.amountOfParticles = amount;
    this.amountOfFireBitss = amount;
    this.FireBitss = [];
    
    
      }

  show() {
    stroke(30);
    strokeWeight(0.8);
    fill(this.rcolor, this.bcolor, this.gcolor);
    quad(
      this.x - this.width / 2,
      this.y,
      this.x - this.topWidth / 2,
      this.y - this.height,
      this.x + this.topWidth / 2,
      this.y - this.height,
      this.x + this.width / 2,
      this.y
    );
  }
}
  

class Mist {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-0.1,0.1);
    this.ySpd = random(-0.1,0.1);
    this.dia = random(2, 5);
  }
  //}

  flow() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  view() {
    push();
    translate(this.x, this.y);
    strokeWeight (1.94);
    stroke(0,10);
    fill(random(230, 255), random (150),random(0,20), 100);
      ellipse(0, 0, random(2, 3), random(9, 11));
    pop();
  }

  wind() {
    this.xSpd = random(-0.3,0.5);
    this.ySpd = random(-0.3,0.5); // randomize the speed with high values
  }
}

function Lava(a, b, tempWidth, tempTopWidth, tempHeight, amount) {
  this.FireBitss = [];
  this.a = a;
  this.b =b;
  this.width = tempWidth;
  this.topWidth = tempTopWidth;
  this.height = tempHeight;
  this.amountOfFireBitss = amount;
  this.fire = function () {
    for (var i = 0; i < this.amountOfFireBitss; i++) {
      if (this.isFireBitsActive(this.FireBitss[i])) {
        this.FireBitss[i].boom();
        this.FireBitss[i].draw();
      } else {
        this.FireBitss[i] = new FireBits(
          this.a + random(-this.topWidth / 2, this.topWidth / 2),
          this.b - this.height,
          color(255, random(50, 130), 0, 200),
          random(4, 10),
          random(-3, 3),
          random(-2, -5)
        );
      }
    }
  }
  this.isFireBitsActive = function (part) {
    if (part != null) {
      if (part.isVisible()) {
        return true;
      }
    }

    return false;
  };
}

function FireBits(a, b, tempColor, tempWidth, aSpeed, bSpeed) {
  this.a = a;
  this.b = b;

  this.color = tempColor;

  this.width = tempWidth;

  this.aSpd = aSpeed;
  this.bSpd = bSpeed;

  this.lifeSpan = 200;

  this.boom = function () {
    this.a += this.aSpd;
    this.b += this.bSpd;

    this.bSpd += 0.03;

    this.lifeSpan--;
  };

  this.draw = function () {
    fill(this.color);
    ellipse(this.a, this.b, this.width);
  };

  this.isVisible = function () {
    if (this.a > width || this.a < 0 || this.b > height || this.b < 0) {
      return false;
    }
    return true;
  };
}