    let sunHeight = 600;
    let redVal = 0;
    let greenVal = 0;
    function setup() {
    createCanvas(1277, 700);
  
    }
    function draw() {
    background(redVal, greenVal, 0);

    fill(255, 135, 5, 60);
    circle(638, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(640, sunHeight, 140);
    
    fill(110, 50, 18);
    triangle(200, 400, 520, 253, 800, 400);
    fill(110,95,20);
    triangle(200,400,520,253,350,400);  

    fill(150, 75, 0);
    triangle(-100, 400, 150, 200, 400, 400);
    fill(100, 50, 12);
    triangle(-100, 400, 150, 200, 0, 400); 

    fill(150, 100, 0);
    triangle(200, 400, 450, 250, 800, 400);
    fill(120, 80, 50);
    triangle(200, 400, 450, 250, 300, 400);

    }