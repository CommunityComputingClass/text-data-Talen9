let myFont; 
let myMessage = "Happy Birthday!!!"
let yLocation = 10;

function preload(){
  myFont = loadFont("Waffle Cake.otf")
}

function setup() {
  createCanvas(400, 400);
 
  fill("yellow");

  textSize(36)
  
  yLocation = yLocation +1;
  
}

function draw() {
  background(50); 
  textFont(myFont); 
  text(myMessage, 20, yLocation);
  
  yLocation += 1; 
 
}