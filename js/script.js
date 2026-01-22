let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  clearInterval(timer); // timer stop

  // Directly save result
  localStorage.setItem("quizScore", score);
  localStorage.setItem("totalQuestions", questions.length);

  // Instant redirect to result page
  window.location.href = "result.html";
});


// Shuffle questions randomly
questions.sort(() => Math.random() - 0.5);


function loadQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  answered = false;
  nextBtn.disabled = true;

  const currentQuestion = questions[currentIndex];

  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  timerEl.textContent = `Time: ${timeLeft}`;

  currentQuestion.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");

    btn.addEventListener("click", () => selectAnswer(btn, index));
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextBtn.disabled = false;
    }
  }, 1000);
}

// function selectAnswer(button, index) {
//   if (answered) return;
//   answered = true;

//   clearInterval(timer);
//   nextBtn.disabled = false;

//   const correctIndex = questions[currentIndex].correctAnswer;

//   if (index === correctIndex) {
//     button.classList.add("correct");
//     score++;
//   } else {
//     button.classList.add("wrong");
//     optionsEl.children[correctIndex].classList.add("correct");
//   }

//   setTimeout(() => {
//   currentIndex++;

//   if (currentIndex < questions.length) {
//     loadQuestion();
//   } else {
//     localStorage.setItem("quizScore", score);
//     localStorage.setItem("totalQuestions", questions.length);
//     window.location.href = "result.html";
//   }
// }, 1000); // 1000ms = 1 second delay

// }

function selectAnswer(button, index) {
  if (answered) return;
  answered = true;

  clearInterval(timer);
  nextBtn.disabled = true; // optional: disable Next since auto move

  const correctIndex = questions[currentIndex].correctAnswer;

  if (index === correctIndex) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    optionsEl.children[correctIndex].classList.add("correct");
  }

  // Auto move to next question after 1 second
  setTimeout(() => {
    currentIndex++;

    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      localStorage.setItem("quizScore", score);
      localStorage.setItem("totalQuestions", questions.length);
      window.location.href = "result.html";
    }
  }, 1000);
}


nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("quizScore", score);
    localStorage.setItem("totalQuestions", questions.length);
    window.location.href = "result.html";

    optionsEl.children[correctIndex].classList.add("correct");

  }
});

loadQuestion();
