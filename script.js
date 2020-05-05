var questions =  [
    {
        question: "first question?",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            d: "d"
        },
        correctAnswer: "a"
    },
    {
        question: "second question?",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            d: "d"
        },
        correctAnswer: "b"
    }, {
        question: "third question?",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            d: "d"
        },
        correctAnswer: "c"
    }, {
        question: "fourth question?",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            d: "d"
        },
        correctAnswer: "d"
    },
    {
        question: "fifth question?",
        answers: {
            a: "a",
            b: "b",
            c: "c",
            d: "d"
        },
        correctAnswer: "a"
    },
];

var currentQuestion = 0;
var lastQuestion = questions.length - 1;
var answered = 0;
var correct = 0;
var wrong = 0;
//var next = $("#nextBtn");



//$(next).hide();


$("#beginQuiz").on("click", startTest);
//Start test 
function startTest() {
    $("#startScreen").hide();   
    
    renderQuestion();
};

function renderQuestion() {
    $(".questions").removeClass("hide");
    var q = questions[currentQuestion];
    var html = q.question;
    var answerBlock = JSON.stringify(q.answers);
    for (var i = 0; i < answerBlock.length; i++) {
        var buttons = $("<button>" + answerBlock[i] + "<button>")
        buttons.appendTo(".qstnGiven");
    }
    console.log(answerBlock);
    $(".showingQuestion").html(html);
    
    //var questionContainer = $("<div>").addClass(".questionContainer");
    /*var html = "<h1>" + q.question + "</h1>";
    html += 
    "<div> <button id='qstnGiven'>" 
    + q.answers.a + "</button> <button id='qstnGiven'>" 
    + q.answers.b + "</button> <button id='qstnGiven'>" 
    + q.answers.c + " </button> <button id='qstnGiven'>" 
    + q.answers.d + "</button> </div>";
    $("<button>").addClass(".answerBtn");
    $(questionContainer).html(html);
    $(".questions").append(questionContainer);*/
    //$("#container").append(next);
    // next.show();
    
}

/*$("#qstnGiven").on("click", function nextQuestion() {
    alert('works')
    $(".questions").html("");
    var q = questions[currentQuestion++];
    renderQuestion();
    // checkAnswer();
    console.log(questions[currentQuestion].correctAnswer);
})*/

/*function checkAnswer(answer) {
    if (chosenAnswer == questions[currentQuestion].correctAnswer) {
        answered++;
        correct++;
    } else {
        answered++;
        wrong++;
    }
}*/
//console.log(answered);