var myQuestions = [
	{
		question: "What is the Edge's real name?",
		answers: {
			a: 'Marcus',
			b: 'Sam',
            c: 'David',
            d: 'Nathan'
		},
		correctAnswer: 'c'
    },
    {
		question: "How many US tours have U2 gone on?",
		answers: {
			a: '21',
			b: '13',
            c: '18',
            d: '26'
		},
		correctAnswer: 'd'
    },
	{
		question: "How many studioalbums have U2 made?",
		answers: {
			a: '14',
			b: '4',
            c: '10',
            d: '17'
		},
		correctAnswer: 'a'
    },
    {
		question: "What year did  U2 win their first grammy?",
		answers: {
			a: '1993',
			b: '1987',
            c: '1984',
            d: '2001'
		},
		correctAnswer: 'b'
    },
    {
		question: "Which U2 member started the band?",
		answers: {
			a: 'Bono',
			b: 'Adam Clayton',
            c: 'Larry Mullen Jr',
            d: 'the Edge'
		},
		correctAnswer: 'c'
    }
];















function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

	function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
    }
    var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
}
