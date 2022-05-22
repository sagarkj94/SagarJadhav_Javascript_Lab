function Question(questionText, choices, correctAnswer) {
    this.questionText = questionText
    this.choices = choices
    this.correctAnswer = correctAnswer
  }
  
  function Quiz(questions) {
    this.questions = questions
    this.score = 0
    this.questionIndex = 0
  }
  
  Quiz.prototype.GetQuestionByIndex = function () {
    return this.questions[this.questionIndex]
  }
  
  Quiz.prototype.CheckAnswer = function (choice) {
    if (choice === this.GetQuestionByIndex().correctAnswer) {
      this.score++
    }
    this.questionIndex++
  }
  Question.prototype.isCorrectAnswer = function (choice) {
    return choice===this.correctAnswer;
    }
  
  Quiz.prototype.IsEnded = function () {
    return quiz.questionIndex === questions.length
  }
  
  Quiz.prototype.ShowProgress = function () {
    document.getElementById('progress').innerText = `Question ${
      quiz.questionIndex + 1
    } of ${questions.length}`
  }
  
  let questions = [
    new Question('Javascript supports',['Functions', 'XHTML', 'CSS', 'XML'], 'Functions'),
    new Question('CSS stand for',['Cascading Style sheets', 'Cascading Style Scripts', 'Class Style Sheets', 'Class Style Scripts'], 'Cascading Style sheets'),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
]
  
  let currentQuestion = 1
  let quiz = new Quiz(questions)
  
  function loadPage() {
    if (quiz.IsEnded()) {
      ShowScore()
    } else {
      let questionElement = document.getElementById('question')
      questionElement.innerHTML = quiz.GetQuestionByIndex().questionText
  
      let choices = quiz.GetQuestionByIndex().choices
  
      for (let i = 0; i < choices.length; i++) {
        document.getElementById('choice' + i).innerHTML = choices[i]
        handleOptionButton(choices[i], 'choice' + i)
      }
  
      quiz.ShowProgress()
    }
  }
  
  function handleOptionButton(choiceIndex, id) {
    let button = document.getElementById(id)
  
    button.onclick = function () {
      quiz.CheckAnswer(choiceIndex)
      loadPage()
    }
  }
  
  function ShowScore() {
    let percent = (quiz.score / questions.length) * 100
    let score = '<h1> Result </h1>'
    score +=
      '<h2> Your score is : ' +
      quiz.score +
      '/' +
      questions.length +
      ' , that is ' +
      percent +
      '%</h2>'
    document.getElementById('quiz').innerHTML = score
  }
  
  loadPage()