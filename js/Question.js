class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput().attribute("placeholder","Enter your name here");
      this.input2 = createInput().attribute("placeholder","Enter Correct Option Number");
      this.button = createButton('Submit');
      this.question = createElement('h1');
      this.question2 = createElement('h1');
      this.option1 = createElement('h1');
      this.option2 = createElement('h1');
      this.option3 = createElement('h1');
      this.option4 = createElement('h1');
      this.note = createElement('h2');


      
    }
  
    hide(){
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.question.hide();
      this.question2.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.note.hide();

    }
  
    display(){
      this.title.html("🤔 MyQuiz Game 🤔");
      this.title.position(650, 0);

      this.question.html("Question:- I have a neck, but I don’t have a head 👦, yet I wear a cap 🧢." );
      this.question2.html(" What am I? " );
      this.question.position(225, 80);
      this.question2.position(375, 120);
      this.option1.html("1 : A ghost " );
      this.option1.position(250, 180);
      this.option2.html("2 : A bottle" );
      this.option2.position(250, 240);
      this.option3.html("3 : A snake " );
      this.option3.position(250, 300);
      this.option4.html("4 : A clam" );
      this.option4.position(250, 360);

      this.input1.position(850, 450);
      this.input2.position(1050, 450);
      this.button.position(1160, 490);

      this.note.html("Note : The scores will be released after 4 people take the quiz")
      this.note.position(650,525)


      

  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  