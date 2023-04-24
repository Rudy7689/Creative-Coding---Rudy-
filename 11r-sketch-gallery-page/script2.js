//let px = 0;
let py = 0;
let vibrate;
let a;
let b;
let r;
let l;
let g;
let move;
let shake;

function setup() {
  createCanvas(600, 600);
  a = width/2
  b= height/2
}

function draw() {
  r = random (0,255);
  l = random (0,255);
  g = random (0,255);

  shake = random (-8,8);
  console.log(frameCount%100)
  if (100>frameCount%100 && frameCount%100>80) {
    background (r);
    
  }
  else {
    background (20);
  }
  
  //vibrate = random(1,3)

  drawCreature(width / 2, height / 2);
  drawLeg (width/2,height/2);
  drawWing (width/2,height/2);
}

function drawCreature(x, y) {
  push();
  translate(x, y);
  fill(0);
  noStroke();
  ellipse(0, 0, 70, 75);
  fill(255, 0, 0);
  strokeWeight(4);
  stroke(45);
  ellipse(0, -10, 35, 24);
  fill(0);
  noStroke();
  ellipse(0, -10, 10, 24);
 // fill(130);
  circle(0, -10, 6);

 // arc(0, 0, 120, 80, 0, PI / 8);
  //translate(15, 0);
  //fill(0);
  //arc(0, 0, 120, 80, 0, PI / 8);
  //left wing
  //rotate(PI);
  //translate(25, -5);
  //arc(0, 0, 120, 80, 0, PI / 8);
  
  //push();
  //fill(0);
  //translate (-10,-45);
  //rect (0,0,5,40)
  //translate (5,5)
  //fill(0)
  //rotate (5*PI/4)
  //arc (-2,-2,40,20,0,PI/4)

  //pop();
  
  //leg
 // translate (-10,-45);
  //rect (0,0,5,40)
  //translate (5,5)
  //fill(00)
  //rotate (5*PI/4)
  //arc (-2,-2,40,20,0,PI/4)

  //px+= vibrate
  //py+= vibrate

  pop();
}

function drawLeg (a, b)
{
  push();
  fill(0);
  translate (a, b);
  rect (-5,25,5,40)
  fill(0)
  rotate (PI)
  arc (-1,-65,40,20,0,PI/5)

  pop();
  
}

function drawWing (c,d)
{
  push();
  translate(c-3, d+8);
  fill(0);
  arc(0,shake,120, 80, 0, PI / 8);
  //left wing
  rotate(PI);
  arc(0, shake, 120, 80, 0, PI / 8);
  pop();
}