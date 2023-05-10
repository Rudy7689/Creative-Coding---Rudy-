let texts = ["Who am I?", "我是谁？", "quien soy?", "मैं कौन हूँ?"];
let currentText = 0;
let font;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(250);
  textAlign(CENTER, CENTER);
//  textFont(font);
}

function draw() {
  background(0);
  fill(255);
  text(texts[currentText], width/2, height/2);
}

function mouseClicked() {
  currentText = (currentText + 1) % texts.length;
}
