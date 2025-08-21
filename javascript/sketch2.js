count=0;
WIDTH = 1277;
HEIGHT=700;
function setup() {
    createCanvas(WIDTH, HEIGHT);
  }
  
  function draw() { 
    count=count+1;
    if(count%5===0){
    background(135, 206, 235);
    fill("yellow");
    stroke("orange");
    strokeWeight(20); 
    circle(550, 50, 100);
    stroke(0);
    strokeWeight(1);
    fill("green");
    rect(0, 350, 1277, 350);
    textSize(75);
    text("🌹", 50, 450);
    text("🪻", 100, 450); 
    text("🌸", 150, 450);
    text("🌺", 200, 450);
    text("🌷", 250, 450);
    text("🪷", 300, 450);
    text("🌻", 350, 450);
    text("🌼", 400, 450);
    text("🥀", 450, 450);
    text("🪻", 500, 450);
    text("🌸", 550, 450);
    text("🌺", 600, 450);
    text("🌷", 650, 450);
    text("🪷", 700, 450);
    text("🌻", 750, 450);
    text("🌼", 800, 450);
    text("🌹", 850, 450);
    text("🪻", 900, 450); 
    text("🌸", 950, 450);
    text("🌺", 1000, 450);
    text("🌷", 1050, 450);
    text("🪷", 1100, 450);
    text("🌻", 1150, 450);
    
    text("🦋", random(0,WIDTH), random(0,HEIGHT));
    text("🦋", random(0,WIDTH), random(0,HEIGHT));
    text("🦋", random(0,WIDTH), random(0,HEIGHT));
    text("🦋", random(0,WIDTH), random(0,HEIGHT));
    text("🦋", random(0,WIDTH), random(0,HEIGHT));
    text("🦋", random(0,WIDTH), random(0,HEIGHT));
    }

}