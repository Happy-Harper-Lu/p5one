    let H = 0;
    let S = 100;
    let B = 100;
    let normal = true;

    function setup() {
    createCanvas(1277, 700);
    background(0);
    fill(255);
    textSize(20);
    text('Press these keys to do more exciting things!',20,40);
    text('press r to draw with red.', 20, 60);
    text('press o to draw with orange.', 20, 80);
    text('press y to draw with yellow.', 20, 100);
    text('press g to draw with green.', 20, 120);
    text('press b to draw with blue.', 20, 140);
    text('press p to draw with purple.', 20, 160);
    text('press P to draw with pink.', 20, 180);
    text('press e to erase', 20, 200);
    }
    function draw() {
    
    if(keyIsPressed === true){
    normal = false;
    if(key === 'r'){
    H = 360;
    }
    if(key === 'o'){
    H = 30;
    }
    if(key === 'y'){
    H = 50;
    }
    if(key === 'g'){
    H = 120;
    }
    if(key === 'b'){
    H = 190;
    }
    if(key === 'p'){
    H = 280;
    }
    if(key === 'P'){
    H = 310;
    }
    if(key === 'n'){
    normal = true;
    }
    if(key === 'e'){
    B = 1
    }
    }

    colorMode(HSB);

    if(mouseIsPressed ===true){
    noStroke();
    fill(H,S,B);
    circle(mouseX, mouseY, 50);
    
    }
    
    if(normal == true){
    H = (H + 1) % 360;
    }

    }