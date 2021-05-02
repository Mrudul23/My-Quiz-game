var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload(){
img = loadImage("Question/Question (1).gif")
bottle = loadImage("Bottle.png")
}



function setup(){
  canvas = createCanvas(1100,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("skyblue");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
    image(bottle,500,200,300,300)
    image(bottle,600,200,300,300)
    image(bottle,700,200,300,300)
    image(bottle,800,200,300,300) 

  }

  if(gameState === 0 ){
    image(img,200,120,300,400)
    image(img,410,80,200,300)
    image(img,560,40,150,250)
    
    textSize(100)
    text("🤔",40,450) 
    textSize(200)  
    text("🧐",700,250)   
  }
}


