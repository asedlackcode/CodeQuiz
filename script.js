$("#beginQuiz").on("click", startTest);
    
function startTest() {
    $("#startScreen").hide();   
    var answered = 0;
    var correct = 0;
    var wrong = 0;
    
    for (let i = 0; i <  questions.length; i++) {
        console.log(i);
    var questionContainer = $("<div>").addClass(".questionContainer");
    var html = "<h1>" + questions[i].question + "</h1>";
    html += "<div> <button>" + questions[i].answers.a + "</button> <button>" + questions[i].answers.b + "</button> <button>" + questions[i].answers.c + " </button> <button>" + questions[i].answers.d + "</button> </div>";
    $(questionContainer).html(html);
    $("#container").append(questionContainer);
    }
};

var questions =  [
    {
        question: "first question?",
        answers: {
            a: "hello",
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

