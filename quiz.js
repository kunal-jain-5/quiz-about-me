const readlinesync=require('readline-sync')
const chalk=require('chalk')

let score=0;
let playerName=readlinesync.question(chalk.bold.yellow("May I know your name ? "));

console.log(chalk.bold.cyan("Welcome "+ playerName + " to DO YOU KNOW KUNAL ?"))

function play(question,ans,options)
{
  console.log("Question ");
  console.log(chalk.bold.yellow(question));
  let playerAnswer=readlinesync.keyInSelect(options);
  if((playerAnswer+1) === ans){
    console.log(chalk.green("You are right"));
    score++;
  }
  else
  {
    console.log(chalk.red("You are wrong"));
  }

  console.log("Your current score is" ,score);
  console.log("------------------");
}


const questions=[{
  ques:"Where do I live ? ",
  ans : 1,
  options:["Raipur","Delhi","Hyderabad","Bangalore"]
},
{
  ques:"Where do i study?",
  ans:2,
  options:["VIT","SRM","Manipal","BITS"]
},
{
  ques:"What do i study?",
  ans:4,
  options:["ECE","Mechatronics","Automobile","CSE"]
},
{
  ques:"What pet do i have?",
  ans:3,
  options:["Fish","Cat","Dog","Parrot"]
},
{
  ques:"Do i like gaming?",
  ans:1,
  options:["Yes","No"]
},];



for( let i=0;i<questions.length;i++){
  play(questions[i].ques,questions[i].ans,questions[i].options)
}

console.log("Congratulations Your final score is", score);
