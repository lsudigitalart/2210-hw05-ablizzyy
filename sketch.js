function setup() {
    createCanvas(400, 400);
    background(255); // white background
    strokeWeight(1); // bold lines
  
    // Center of the canvas
    translate(width / 2, height / 2);
  
    scale(1.5);

    // Black square
    stroke(0); // black stroke
    noFill();
    rectMode(CENTER);
    rect(0, 0, 200, 200); // draw square with center at (0,0)
  
    // Red diagonal lines
    stroke(255, 0, 0); 
  
    // First diagonal from top left to bottom right
    push(); 
    rotate(PI / 4); 
    line(-100, 0, 100, 0); 
    pop(); 
  
    // Second diagonal from bottom left to top right
    push(); 
    rotate(-PI / 4); 
    line(-100, 0, 100, 0); 
    pop(); 
  }
  
  function draw() {
    
  }
  
  