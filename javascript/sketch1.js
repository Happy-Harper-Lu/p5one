function setup() {
  createCanvas(1277, 700);
}

function draw() {
  background("pink");
  if (mouseIsPressed === true) {
    fill(0, 255, 0);
  } else {
    fill(255);
  } 
  circle(mouseX, mouseY, 200);
  if (mouseIsPressed === true) {
    fill(0, 0, 255);
  } else {
    fill(255);
  } 
  circle(mouseX, 100, 200);
  if (mouseIsPressed === true) {
    fill(255, 0, 0);
  } else {
    fill(255);
  } 
  circle(100, mouseY, 200);
}