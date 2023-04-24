/*
GIF CAPTURE TEMPLATE

Instructions:
_ Click on the button at the left-top corner to save/render your sketch as a GIF.
_ After clicking, frames will be recorded for 15 seconds.
_ Wait until the whole process is finished. 
    _ 1. First the button will reflect the capturing of 450 frames.
    _ 2. Next, you can then observe the rendering in the Console.
_ After the rendering is done, it will automatically produce a GIF animation. The .gif file will be downloaded into your "Downloads" folder.

Please don't change the configuration, such as the canvas size and the duration in html. Otherwise your GIF's filesize could be too large.
*/

let x;
let y;
let a = 0;
let m;
function setup() {
  createCanvas(540, 540);
  x = 0;
  y = height / 2;
}

function draw() {
  // example code:


  x = x + 5;
  y = height / 2 + 170 * sin(x * 0.01);
  fill (a, frameCount, a)
  circle(x, y, 20);
  let angle = frameCount;
  x = width / 2 + a * cos(angle * 0.1);
  y = height / 2 + a * sin(angle * 0.1);
  fill (a,a,frameCount);
  circle(x, y, 20);
  a = a + 0.1;
  x = x + 20;
  y = height / 2 + a * cos(angle * 0.1);
  fill (a,frameCount,a);
  circle(x, y, 20);
  a = a + 0.12;
   x = x + 15 ;
  y = height / 2 + a * sin(angle * 0.1);
  fill (frameCount,a,a);
  circle(x, y, 20);
  a = a + 0.1;
  
   if (mouseIsPressed=== true)
    {fill(a,a,0)
     stroke(255, 204, 0)
strokeWeight (10)
     circle(00,100,x)}
  
  else {   fill(a,a,0)
strokeWeight (1)
     circle(00,100,y)}
  strokeWeight (1)
   
}
