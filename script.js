const questions = [
    {
      question: "1. Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      answers: [
        { text: "let", correct: true },
        { text: "varb", correct: false },
        { text: "def", correct: false },
        { text: "dim", correct: false }
      ]
    },
    {
      question: "2. Qual método é usado para exibir uma mensagem no console do navegador?",
      answers: [
        { text: "diplay.log()", correct: false },
        { text: "console.print()", correct: false },
        { text: "console.log()", correct: true },
        { text: "show.log()", correct: false }
      ]
    },
    {
      question: "3. Qual método é usado para remover o último elemento de um array em JavaScript?",
      answers: [
        { text: "shift()", correct: false },
        { text: "unshift()", correct: false },
        { text: "pop()", correct: true },
        { text: "splice()", correct: false }
      ]
    },
    {
      question: "4. Qual destes métodos pode ser usado para converter uma string em um número inteiro em JavaScript?",
      answers: [
        { text: "parseInt()", correct: true },
        { text: "convertToInteger()", correct: false },
        { text: "stringToNumber()", correct: false },
        { text: "toInteger()", correct: false }
      ]
    },
    {
      question: "5. Como você remove o primeiro elemento de um array em JavaScript?",
      answers: [
        { text: "array.pop()", correct: false },
        { text: "array.shift()", correct: true },
        { text: "array.splice()", correct: false },
        { text: "array.removeFirst()", correct: false }
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  