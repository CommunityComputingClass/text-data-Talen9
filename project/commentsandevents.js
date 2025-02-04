
///--------

let myQuestion = "What's your favorite meal?"
 
let contents = "";
let all_the_answers = []

let newButton;
let saveAnswer_button; 
let showAnswers_button;
let textBox; 

let myFont;

function preload(){
    myFont = loadFont("Waffle Cake.otf")
  }

function setup() {
  createCanvas(500, 400);

  textFont(myFont);
  saveAnswer_button = createButton("Save your answer");
  saveAnswer_button.position(300,150)
  saveAnswer_button.mousePressed(saveText)
  
  textFont(myFont);
  showAnswer_button= createButton("See the answers");
  showAnswer_button.position(300,200)
  showAnswer_button.mousePressed(showAnswers);
  
  textFont(myFont);
  textBox = createInput("Type your answer here")
  textBox.size(200,40)
  textBox.position(50,100)
  textBox.input(storeText)
  
  
  background(50);
  fill(255);
  textSize(14);
  text(myQuestion,50,50) 

  textFont(myFont);
  newButton = createButton("Celebrate");
  newButton.position(200,300)
  newButton.mousePressed(shownewText)

  
}

function draw() {  
}

function saveText(){
   textFont(myFont);
   all_the_answers.push(contents);
   contents = "" ;
   textBox.value("Type your answer here")
   print(all_the_answers)   

   
}

function storeText(){
  contents = this.value(); 
}

function showAnswers(){
  
    textFont(myFont);
  textBox.hide();
  saveAnswer_button.hide();
  showAnswer_button.hide();
  
  textSize(14);
  fill("pink");    
  text(all_the_answers[0],50,100);
  
    
}


function shownewText(){
    textFont(myFont);
    text ("Yay!", 50, 300, 200, 200)
    textBox.hide(); 
    
}
