var readlineSync = require('readline-sync');

score = 0;

var userName = readlineSync.question('What is your name? ');

console.log("welcome! to this Quiz", userName);


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right");
    score = score + 1;
  } else {
    console.log("You are wrong");
    score = score - 1;
  }
  console.log("Your score is: " + score)
  console.log("---------")
}

console.log("Start your answers with first latter capital")
var asked =[
  {
  question: "Do you live in India? ",
  answer: "Yes"
}, {   
question: "What is a Capital of India? ",
answer: "Delhi"
},{
  question: "which year India got Independance? ",
answer: "1947"
},{
  question: "Who is current prime minister of India? ",
answer: "Narendra Modi"
},{
  question: "Is Pandit Jawaharlal Nehru was first prime minister of India? ",
answer: "Yes"
},{
  question: "How much people live in India? options(100cr or above 130cr) ",
answer: "130cr"
}

];

for(i=0; i<asked.length; i++) {
play(asked[i].question,asked[i].answer);
}

console.log("Wow! Your total score is: " + score)

var highscores =[{
  name: "Tejas", 
  score: "5"
},{
  name: "Mayur",
  score: "4"
}]

for(var i=0; i<highscores.length; i++) 
console.log(highscores[i].name , "total score was: " + highscores[i].score);  

console.log("Gave me your Highscore screenshoot on Whatsapp so I will update highscore list ")









