var myQuestions = [
	{
        question: "What is the Edge's real name?/n(a) Marcus/n(b) Sam/n(c) David/n Nathan",
        answer: "c"
    },
    {
		question: "How many US tours have U2 gone on?/n(a) 21/n(b) 13/n(c) 18/n(d) 26",
		answer: "d"
    },
	{
		question: "How many studioalbums have U2 made?/n(a) 14/n(b)/n 4/n(c) 10/n(d) 17",
		answer: "a"
    },
    {
		question: "What year did  U2 win their first grammy?/n(a) 1994/n(b) 1987/n(c) 1984/n(d) 2001",
		answer: "b"
    },
    {
		question: "Which U2 member started the band?/n(a) Bono/n(b) Adam Clayton/n(c) Larry Mullen Jr/n(d) the Edge",
		answer: "c"
    }
];

var score = 0;

for (i=0; i= myQuestions.length; i++) {
    var response = window.question(myQuestions[i].question)
    if (response == question[1].answer) {
        score ++;
        alert("correct");
    } else {
        alert("wrong!");
    }
}