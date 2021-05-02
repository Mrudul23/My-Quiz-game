class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      background("Yellow");
      fill(0);
      textSize(60);
      textFont("cooper")
      text("Result of the Quiz !!",280, 70);
      text("~~~~~~~~~~~~~~",280, 110);
      Contestant.getPlayerInfo();
      if(allContestants !== undefined){
        var display_Answers = 230;
        textFont("Cooper")
        fill("Blue");
        textSize(40);
        text("NOTE: Contestant who answered correct are in green color !",50,130,1000);
  
        for(var plr in allContestants){
          textFont("cooper")
          var correctAns = "2";
          if (correctAns === allContestants[plr].answer){
          stroke("green")
          strokeWeight(25)
          fill("black")
          }else{
            fill("black");
            stroke("red")
            strokeWeight(25)
          }
  
          display_Answers+=60;
          textSize(40);
          text(allContestants[plr].name + " : " + allContestants[plr].answer, 50,display_Answers)
        }
      }
    }
  }
  