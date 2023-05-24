const init_x = 200;
const init_y = 200;
let delta_x = 0;
let delta_y = 0;

function setup() {
  createCanvas(400,400);
  frameRate(30);
}

function draw(){
  background(240);
  line(init_x,0,init_x,400);
  line(0,init_y,400,init_y);
  ellipse(init_x + delta_x, init_y - delta_y,20,20);
  delta_x += random([-1,0,1]);
  delta_y += random([-1,0,1]);
  text('Δx: ' + ('   ' + delta_x).slice(-4) + '\nΔy: ' + ('   ' + delta_y).slice(-4),10,380);
}
