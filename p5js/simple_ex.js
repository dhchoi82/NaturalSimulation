let x = 150;
let y = 250;

function setup() {
  createCanvas(400,400);
  frameRate(30);
}

function draw(){
  background(240);
  ellipse(x,y,20,30);
  x += 1;
  y += -1;
}
