// Hide contents while displayed is displayed
const quizbtn = document.querySelector(".quiz-btn");
const textContents = document.querySelector(".textContents");

quizbtn?.addEventListener("click", () => {
  textContents?.classList.add("remove-contents");
  quizbtn.style.display = "none";
});

// Copy code to clipboard
document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", function () {
    const codeElement = this.closest(".code-container")?.querySelector(".code-snippet code");

    if (codeElement) {
      const codeText = codeElement.innerText.trim();

      navigator.clipboard
        .writeText(codeText)
        .then(() => {
          alert("Code copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy code: ", err);
        });
    } else {
      alert("No code found to copy!");
    }
  });
});

// Read text as voice
document.querySelectorAll(".read-aloud").forEach((button) => {
  let currentUtterance;

  button.addEventListener("click", function () {
    const parent = this.parentElement;
    const title = parent.querySelector("h2")?.innerText;
    const content = parent.querySelector("p")?.innerText;

    if (this.innerText === "Read aloud") {
      currentUtterance = new SpeechSynthesisUtterance(`${title}. ${content}`);

      // Select a male voice
      const voices = speechSynthesis.getVoices();
      const maleVoice = voices.find((voice) => /male/i.test(voice.name));
      if (maleVoice) currentUtterance.voice = maleVoice;

      currentUtterance.onend = () => {
        this.innerText = "Read aloud";
        this.style.backgroundColor = "#007BFF";
      };

      speechSynthesis.speak(currentUtterance);
      this.innerText = "Stop reading";
      this.style.backgroundColor = "red";
    } else {
      speechSynthesis.cancel();
      currentUtterance = null;
      this.innerText = "Read aloud";
      this.style.backgroundColor = "#007BFF";
    }
  });
});

// Track questions
let currentQuestion = 0;
let score = 0;
const questions = document.querySelectorAll(".question");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");

// Show the first question
showQuestion(currentQuestion);

// Show the next question when the button is clicked
function nextQuestion() {
  const currentQ = questions[currentQuestion];
  const selectedAnswer = currentQ.querySelector("input:checked");

  if (!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }

  // Check answer and change background color
  const correctAnswer = getCorrectAnswer(currentQuestion);
  if (selectedAnswer.value === correctAnswer) {
    score++;
    currentQ.classList.add("correct");
  } else {
    currentQ.classList.add("incorrect");
  }

  // Hide current question and show the next
  currentQ.style.display = "none";
  currentQuestion++;

  // If it's the last question, change the button text
  if (currentQuestion === questions.length) {
    nextBtn.textContent = "See Results";
  } else {
    showQuestion(currentQuestion);
  }
}

// Show the current question
function showQuestion(index) {
  questions[index].style.display = "block";
  //document.getElementById("me").style.display = "none";
}

// Get the correct answer for each question
function getCorrectAnswer(index) {
  const answers = ["a", "b", "c", "b", "b", "c", "b", "a", "b", "b"]; // Correct answers
  return answers[index];
}

// Show the result and allow user to see the next chapter
nextBtn.onclick = function () {
  if (currentQuestion === questions.length) {
    // Show the result
    resultDiv.style.display = "block";
    resultDiv.textContent = `You scored ${score} out of ${questions.length}.`;

    /*nextBtn.textContent = "Next Chapter";*/
    nextBtn.onclick = function () {
      alert("Moving to the next chapter...");
  
   
    };
  } else {
    nextQuestion();
  }
};
