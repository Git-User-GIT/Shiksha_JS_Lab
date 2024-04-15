// Everything is java script is an Object
  function Quiz(questions){
this.questions=questions;
this.score=0;
this.queIndex=0;
  }

  Quiz.prototype.isEnded= function(){
    console.log("this is quiz introduction");
    return this.queIndex == this.questions.length;
  }

Quiz.prototype.getQuestionByIndex= function(){

  return this.questions[this.queIndex];
}
  
Quiz.prototype.checkOptionWithAnswer=function(userAnswer){
    if(this.getQuestionByIndex().isCorrectAnswer(userAnswer))
      { 
       this.score++;
      }
      this.queIndex++;
    

}

function Question(queText ,choices , answer){
  this.queText=queText;
  this.choices=choices;
  this.answer=answer;

}

Question.prototype.isCorrectAnswer=function(userAnswer){
  return this.answer===userAnswer;

}

function showScore(){
  var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2> Your scores: " + jsQuiz.score + ".And mark percentage is: "+(jsQuiz.score/questions.length*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  
}

function loadQuestions(){
  if(jsQuiz.isEnded()){
    showScore();
  }
  else{

    let question=jsQuiz.getQuestionByIndex();    
    document.getElementById("question").innerHTML=question.queText;
   

    let choice=jsQuiz.getQuestionByIndex().choices; 
   for(var i=0; i < choice.length ;i++){
    document.getElementById("choice"+i).innerHTML =choice[i];

   handleOptionButton("btn" + i , choice[i]);
   }
     

showProgress();

  }
}

function showProgress(){

  document.getElementById("progress").innerHTML="Question " +(jsQuiz.queIndex + 1) + " of " +jsQuiz.questions.length;

}




function handleOptionButton(id, choice){
  let button = document.getElementById(id);
  button.onclick = function(){
    jsQuiz.checkOptionWithAnswer(choice);
    loadQuestions();
  }

}


let questions = [ 
  new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"), 
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"), 
  new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"), 
  new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"), 
  new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")];
  
  
  let jsQuiz = new Quiz(questions);

  loadQuestions();

  