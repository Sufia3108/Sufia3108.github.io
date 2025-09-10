// Interactive Programs
// Sufia Chowdhury
// 09 September, 2025


function setup() { // runs ONCE at the start
  createCanvas(windowWidth, windowHeight);
}

function draw() { // runs OVER and OVER
                  // targeting 60 frames per second
  // background(220);
  fill(255, mouseX, 0)
  circle(mouseX, mouseY, 30)
}
