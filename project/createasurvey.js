let myMessage = "Press the left arrow if you believe pineapple belongs on pizza and the right arrow if you don't believe it does.";
let myFont; 
let likes = 0; 
let dislikes = 0; 

function preload(){
    myFont = loadFont("Waffle Cake.otf")
  }

function setup() {
  createCanvas(400, 400);
  background(50);
  noStroke();
  fill(255);
  textSize(14);

}

function draw() { 
  background(50); // Clear the screen each frame to update the text properly
  
  fill(255);
  textSize(14);
  text(myMessage, 40, 50, 330);

  fill("green");
  rect(40, 150, likes * 10, 30);
  fill(255);
  textSize(16);
  textFont(myFont);
  text(`Belongs: ${likes}`, 50, 170); // Showing the likes count

  fill("red");
  rect(40, 250, dislikes * 10, 30);
  fill(255);
  textSize(16);
  textFont(myFont);
  text(`Doesn't Belong: ${dislikes}`, 50, 270); // Showing the dislikes count

  fill (168, 108, 56)
  ellipse (200, 340, 80, 80)
  fill (227, 198, 104)
  ellipse (200, 340, 70, 70)
  fill (179, 9, 48)
  ellipse (183, 348, 12, 12)
  fill (179, 9, 48)
  ellipse (210, 328, 12, 12)
  ellipse (220, 348, 12, 12)
  ellipse (190, 318, 12, 12)
  ellipse (201, 358, 12, 12)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    likes += 1;
  }  
  if(keyCode === RIGHT_ARROW){
    dislikes += 1;
  }    
}

