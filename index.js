

var readlinesync=require("readline-sync");
const chalk = require('chalk');
// console.log(chalk.blue('Hello world'));



var score=0;

var username=readlinesync.question("what is your name? ");

console.log("welcome "+username +" to DO YOU KNOW KARAN ")

var highscore=[
  {
    name:"Karan",
    score:"5"
  },{
    name:"Shivansh",
    score:"5"
  }
]

function play(question,answer){
var userAnswer=readlinesync.question(question)

if (userAnswer===answer){
  console.log(chalk.yellow("You are right"));
  score=score+1;
}else{
  console.log("You are wrong");
  score=score;
}
console.log("current score is "+ score);
console.log("--------")
}
var questions =[
  {
    question:"Where do i live? ",
    answer:"faridkot"
  },
  {
    question: "What is my favourite sports'game?  ",
    answer:"cricket"
  },
   {question : "What is my favourite car name? ",
   answer : "range rover"},
   {
     question:"What sort of music i like? ",
     answer:"rock"
   
   },{
     question:"Which company mobilephone i use? ",
     answer: "samsung"
   }
]
for ( var i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("The final score is "+ score );

console.log("The highest scorer is Shivansh i.e 5 ")
