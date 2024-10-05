let submitBtn = document.querySelector("#submit-answer");
let feedback = document.querySelector("#feedback");
let userAnswer;


function checkAnswer() {
  let correctValue = "4";
  if (correctValue === userAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}
Array.from(document.querySelectorAll('[name = "quiz"]')).forEach((element) => {
  element.addEventListener("change", (e) => {
    userAnswer = e.target.value;
  });
});

submitBtn.addEventListener("click", checkAnswer);
