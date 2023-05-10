let img;
let posX = [];
let posY = [];
let s = 1;
let a = 0;
let num = 0;
let Tsize = 0;
let placeText = false;
let numOutputs = 45;
let f;
let font = [];
let counter=0;
let op = 0;
let song;
let songIsPlayed = false;

function preload() {
  song = loadSound ('Ova.mp3')
  img = loadImage("face3.jpg");
  img2 = loadImage ("111.png");
  font[0] = "Lobster";
  font[1]  = "Dancing Script";
  font[2] = "Roboto";
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  colorMode(HSB, 100);
  background(0);
  img.loadPixels();
  
  img2.resize (580,620);

  for (let x = 0; x < img.width; x += s) {
    for (let y = 0; y < img.height; y += s) {
      let i = (x + y * img.width) * 4;
      let r = img.pixels[i + 0];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];
      if (r < 20 && g < 20 && b < 20) {
        posX[a] = x;
        posY[a] = y;
        a = a + 1;
      }
    }
  }
}

function draw() {
  if (placeText == true) {
    for (let i = 0; i < numOutputs; i++) {
      pickRandom();
      let op = map(Tsize, 70, 10, 255, 50);
      textFont(font[f]);
      textStyle(random([NORMAL, BOLD]));
      textSize(Tsize);
      fill(255,op);
      push();
      translate(posX[num], posY[num]);
      textWrap(WORD);
      text(inputText, 0, 10,50);
      pop();
    }
    placeText = false;
  }
  tint(255,counter*0.023);
  image(img2, 35,25);
}


function mousePressed() {
  if(!songIsPlayed){
    song.play();
    songIsPlayed = true;
  }
  
  inputText = window.prompt("Describe your identity in one word:");
  if (inputText) {
    placeText = true;
    counter++;
    console.log(counter);
  }
}

function pickRandom() {
  num = floor(random(0, posX.length));
  let d = dist(width / 2, height / 2, posX[num], posY[num]);
  Tsize = random (5,30);
  f = floor(random(font.length));
  op = random(20,180);
}
