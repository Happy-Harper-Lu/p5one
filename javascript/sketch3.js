let cloudOneX = 50;
let count = 0;
let lineXone = 0;
let lineYone = 0;
function setup() {
    createCanvas(1277, 700);
  
    }
  
 
    function draw() {
    background('navy');

    stroke("yellow");
    line(lineXone, lineYone, lineXone + 30, lineYone - 30);  

    fill(255);
    stroke(0);
    circle(1221, 50, 100);

    stroke("navy");   
    fill("navy");
    circle(1191,50,100);

    stroke(0);
    fill(80);
    triangle(-400,500,100,200,300,500);
    triangle(30,500,600,100,1000,500);
    triangle(-40,500,300,250, 600,500);
    triangle(400,500,900,100,1317,500);
    triangle(900,500,1200,900,1600,500);

    fill('rgb(74, 129, 74)');
    rect(0,500, 1277, 200);

    fill(255);
    ellipse(cloudOneX, 50, 80, 40);
    ellipse(cloudOneX - 40, 100, 60, 20);
    ellipse(cloudOneX + 20, 150, 40, 10);
    cloudOneX = count % width

    fill("rgb(118,80,72)");
    rect(200, 525, 15, 50);
    fill("green");
    triangle(250, 525, 206, 200 - frameCount % height,160, 525);


    fill(255)
    text(`${mouseX}, ${mouseY}`, 20, 20);
    count = count + 2;
    lineXone = random(0, width);
    lineYone = random(0, height/2); 
    
    }