let myQuestion = "What's your favorite meal?"
 
let contents = "";
let all_the_answers = []

let newButton;
let saveAnswer_button; 
let showAnswers_button;
let textBox; 


let myFont;
let confetti = [];
let showAnswersMode = false

function preload(){
    myFont = loadFont("Waffle Cake.otf")
}

function setup() {
  createCanvas(500, 400);

  textFont(myFont);
  saveAnswer_button = createButton("Save your answer");
  saveAnswer_button.position(300,150);
  saveAnswer_button.mousePressed(saveText);
  
  textFont(myFont);
  showAnswers_button = createButton("See the answers");
  showAnswers_button.position(300,200);
  showAnswers_button.mousePressed(goShowAnswers);
  
  textFont(myFont);
  textBox = createInput("Type your answer here");
  textBox.size(200,40);
  textBox.position(50,100);
  textBox.input(storeText);
  
  background(50);
  fill(255);
  textSize(14);
  text(myQuestion,50,50);
  
  textFont(myFont);
  newButton = createButton("Celebrate");
  newButton.position(200,300);
  newButton.mousePressed(shownewText);
}


function draw() {  
  background(50);
  
  fill(255);
  textSize(14);
  text(myQuestion,50,50);
  
  if (showAnswersMode){
    fill("pink");
    for (let i=0; i<all_the_answers.length; i++){
      text(all_the_answers[i], 50, 160 +i*20);

     }
    }
  for (let i = 0; i < confetti.length; i++) {
    fill(confetti[i].color);
    noStroke();
    ellipse(confetti[i].x, confetti[i].y, 5, 5);
    confetti[i].y += confetti[i].speed;

    if (confetti[i].y > height){  
      confetti.splice(i,1);
      i--;
      }
    }
  }



function saveText(){
  if (contents.trim() !==""){
      all_the_answers.push(contents);
  }
   textFont(myFont);
   
   contents = "";
   textBox.value("Type your answer here");
  
}



function showAnswers(){
  textFont(myFont);
  textBox.hide();
  saveAnswer_button.hide();
  showAnswer_button.hide();
  
  textSize(14);
  fill("pink");
  
  for (let i = 0; i < all_the_answers.length; i++) {
    text(all_the_answers[i], 50, 100 + i * 20);
  }
}

function storeText(){
  contents = this.value(); 
}


function goShowAnswers(){
  showAnswersMode = !showAnswersMode;

}

function shownewText(){
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: random(width),
            y: random(-50, 0),
            speed: random(1, 3),
            color: color(random(255), random(255), random(255))
        });
    }
}
