let submitBtn = document.getElementById("submit-answer");
let feedback = document.querySelector("#feedback");
let userAnswer;

function checkAnswer() {
  let correctAnswer = "4";
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

Array.from(document.querySelectorAll('[name = "quiz"]')).forEach((element) => {
  element.addEventListener("change", (e) => {
    if (e.target.checked) {
      userAnswer = e.target.value;
    }
  });
});

submitBtn.addEventListener("click", checkAnswer);
