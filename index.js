
//input field to question
var answer = document.querySelector(".question");
var btn = document.getElementById("button");
var ball = document.querySelector(".eightBall");

btn.addEventListener("click", function () {
  var inputText = document.getElementById("input").value;
  answer.classList.remove("question");
  answer.classList.add("submitStyle");
  answer.innerText = inputText;
  ball.style.display = "none";
});

//generate random messages
var answer2 = document.querySelector("p");
var btn = document.getElementById("button");
var answerPrint = document.querySelector(".answer");
var messages = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."]

// display message on click
btn.addEventListener("click", function () {
  var randomAnswer = Math.floor(Math.random() * messages.length);
  answer2 = messages[randomAnswer];
  answerPrint.classList.remove("answer");
  answerPrint.classList.add("submitStyle")
  answerPrint.innerText = answer2;

  console.log(answer2);
});
