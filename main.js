//HTML Elements
const question = document.querySelector("#question");
const questionNumber = document.querySelector("#questionNumber");
const solvedQuestion = document.querySelector("#solved");
const unsolvedQuestion = document.querySelector("#unsolved");
const solvedLabel = document.querySelector("#solvedCounter");
const unsolvedLabel = document.querySelector("#unsolvedCounter");
const stats = document.querySelector("#stats");
const buttons = document.querySelector("#buttons");

questionNumber.innerHTML=1;

//Counters
let solvedCounter = 0;
let unsolvedCounter = 0;
let questionCounter = 0;
let unsolvedQuestions = [];

//summary
const summary = () => {
  question.innerHTML = "Summary";
  stats.style.display = "none";
  buttons.style.display = "none";
};

//Display question
const displayQuestion = () => {
  questionCounter < easyQuestions.length
    ? (question.innerHTML = easyQuestions[questionCounter])
    : summary();
  ++questionCounter;
};

displayQuestion();

//Event listeners
solvedQuestion.addEventListener("click", () => {
  questionNumber.innerHTML=questionCounter+1;
  displayQuestion();
  ++solvedCounter;
  solvedLabel.innerHTML = solvedCounter;
});

unsolvedQuestion.addEventListener("click", () => {
  questionNumber.innerHTML=questionCounter+1;
  unsolvedQuestions[unsolvedCounter] = questionCounter;
  displayQuestion();
  ++unsolvedCounter;
  console.log(unsolvedQuestions);
  unsolvedLabel.innerHTML = unsolvedCounter;
});
