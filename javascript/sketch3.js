let cloudOneX = 50;
let count = 0;
function setup() {
    createCanvas(1277, 700);
  
    }
  
 
    function draw() {
    background('navy');

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
    rect(40, 270, 15, 50);
    fill("green");
    triangle(25, 270, 45, 240 - frameCount % 2900,70, 270);


    fill(255)
    text(`${mouseX}, ${mouseY}`, 20, 20);
    count = count + 2;
    
    }