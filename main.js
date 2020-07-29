//HTML Elements
const question = document.querySelector("#question");
const solvedQuestion = document.querySelector("#solved");
const unsolvedQuestion = document.querySelector("#unsolved");
const solvedLabel = document.querySelector("#solvedCounter");
const unsolvedLabel = document.querySelector("#unsolvedCounter");

//Counters
let solvedCounter = 0;
let unsolvedCounter = 0;

//Display question
const displayQuestion = () => {
  question.innerHTML =
    easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
};

displayQuestion();

//Display next question
solvedQuestion.addEventListener("click", () => {
  displayQuestion();
  ++solvedCounter;
  solvedLabel.innerHTML=solvedCounter;
});

unsolvedQuestion.addEventListener("click", () => {
    displayQuestion();
    ++unsolvedCounter;
    unsolvedLabel.innerHTML=unsolvedCounter;
  });
