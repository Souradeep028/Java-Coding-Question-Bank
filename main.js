//HTML Elements
const question = document.querySelector("#question");
const questionNumber = document.querySelector("#questionNumber");
const solvedQuestion = document.querySelector("#solved");
const unsolvedQuestion = document.querySelector("#unsolved");
const solvedLabel = document.querySelector("#solvedCounter");
const unsolvedLabel = document.querySelector("#unsolvedCounter");
const stats = document.querySelector("#stats");
const buttons = document.querySelector("#buttons");
const showSummary = document.querySelector("#summary");
const table = document.querySelector("#table");

questionNumber.innerHTML = 1;

//Counters
let solvedCounter = 0;
let unsolvedCounter = 0;
let questionCounter = 0;
let unsolvedQuestions = [];

//summary
const summary = () => {
  question.innerHTML = "Your summary";
  buttons.style.display = "none";
  stats.style.display = "none";

  const rows = unsolvedQuestions.map(
    (question) =>
      `    <tr>
                <th scope="row">${question + 1}</th>
                <td>${easyQuestions[question]}</td>
           </tr>`
  ).join('');

  table.innerHTML = `
  
  <div id="stats" style="display: flex; justify-content: space-evenly; margin-bottom: 1rem;">
    <h6>Question : <span id="questionNumber">${questionCounter} / ${easyQuestions.length}</span></h6>
    <h6>Solved : <span id="solvedCounter">${solvedCounter}</span></h6>
    <h6>Unsolved : <span id="unsolvedCounter">${unsolvedCounter}</span></h6>
  </div>

  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Unsolved Questions</th>
    </tr>
  </thead>
  <tbody>
    ${rows}
  </tbody>

  `;
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
  questionNumber.innerHTML = questionCounter + 1;
  displayQuestion();
  ++solvedCounter;
  solvedLabel.innerHTML = solvedCounter;
});

unsolvedQuestion.addEventListener("click", () => {
  questionNumber.innerHTML = questionCounter + 1;
  unsolvedQuestions[unsolvedCounter] = questionCounter - 1;
  displayQuestion();
  ++unsolvedCounter;
  unsolvedLabel.innerHTML = unsolvedCounter;
});

showSummary.addEventListener("click", () => {
  summary();
});
