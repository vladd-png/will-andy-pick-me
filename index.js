
//input field to question
var answer = document.querySelector(".question");
var btn = document.getElementById("button");
var ball = document.querySelector(".eightBall");

btn.addEventListener("click", function () {
  var inputText = document.getElementById("input").value;
  answer.innerText = inputText;
  ball.style.display = "none";
  answerPrint.classList.remove("question");
});

//generate random messages

// function toggleDisplay () {
//   var x = document.querySelector(".submitForm");
//   if (x.style.display = "none") {

var answer2 = document.querySelector("p");
var btn = document.getElementById("button");
var answerPrint = document.querySelector(".answer");
var messages = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely."]


btn.addEventListener("click", function () {
  var randomAnswer = Math.floor(Math.random() * messages.length);
  answer2 = messages[randomAnswer];
  answerPrint.classList.remove("answer");


  console.log(answerPrint);
});

// } else {
//   x.style.display = "none";
// }
//
// }
