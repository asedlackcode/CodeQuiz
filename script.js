var questions =  [
    {
        question: "Select the property used to create space between the element’s border and inner content",
        answers: [
            "padding",
            "margin",
            "border",
            "spacing"
        ],
        correctAnswer: "padding"
    },
    {
        question: "In CSS,select the property used to set the background color of an image",
        answers: [
            "color:background",
            "background-color",
            "color",
            "background:color"
        ],
        correctAnswer: "background-color"
    }, {
        question: "Select the appropriate HTML tag for inserting a line break.",
        answers: [
            "break",
            "brbr",
            "lb",
            "br"
        ],
        correctAnswer: "br"
    }, {
        question: "Select the option to make a list that lists the items with numbers.",
        answers: [
         "ol",
         "dl",
         "ul",
         "list"
        ],
        correctAnswer: "ol"
    },
    {
        question: "Select the appropriate HTML tag used for the largest heading",
        answers: [
            "head",
            "h1",
            "heading",
            "h6"
        ],
        correctAnswer: "h1"
    },
];

var currentQuestion = 0;
var lastQuestion = questions.length - 1;
// var answered = 0;
var correct = 0;
var wrong = 0;
//var next = $("#nextBtn");



//$(next).hide();


$("#beginQuiz").on("click", startTest);
//Start test 

function startTest() {
    var sec = 60;
    var time = setInterval(myTimer, 1000);
    $("#startScreen").hide();   
    renderQuestion();
    function myTimer() {
        document.getElementById('timer').innerHTML = sec + "sec left";
        sec--;
        if (sec == -1) {
            clearInterval(time);
            alert("Your time is up!", endTest());
        }
    }
    $("#timer").removeClass("hide");
    myTimer();
};



function endTest() {
    $(".finished").removeClass("hide");
    $(".qs").addClass("hide");
    //clearInterval();
    clearTimeout();
    $("#timer").empty();
}

function renderQuestion() {
    if (currentQuestion === questions.length) {
        endTest();
    }
    
    $(".questions").removeClass("hide");
    var q = questions[currentQuestion];
    var html = q.question;
    var answerBlock = q.answers;
    console.log(answerBlock);
    $("#showingQuestion").text(q.question)
   // console.log(q.answers);
    $(".qstnGiven").html("");
    for (var i = 0; i < answerBlock.length; i++) {
        //console.log(answerBlock[i]);
        var buttons = $("<button>");
        buttons.text(answerBlock[i]);
        buttons.addClass("answerBtns")
        buttons.addClass("btn");
        //buttons.attr('data-value', )
        buttons.appendTo(".qstnGiven");
        
    }

    $(".answerBtns").on("click", function() {
        
        var anws = $(this).text();
        console.log(anws);
        if (anws === questions[currentQuestion].correctAnswer) {          
            console.log("correct")
            correct++;
            $(".correctAns").removeClass("hide");
            setTimeout(function(){$(".correctAns").addClass("hide");}, 1500);
            setTimeout( function(){renderQuestion()},1500);
        } else{
            console.log("wrong");
            //$(".wrongAns").removeClass("hide")
            wrong++;
            $(".wrongAns").removeClass("hide");
            setTimeout(function(){$(".wrongAns").addClass("hide");}, 1500);
            setTimeout( function(){renderQuestion()},1500);
        } 
        currentQuestion++;
        // renderQuestion();
    })
}


    
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
    


//click event on save score btn
//save local storage the textarea and score
//
$('.save').click(function(res) {
    var initialsEntry = ($('.initials').val() + " " + correct);
    console.log(correct);
    localStorage.setItem( "newscore", initialsEntry);
   // localStorage.setItem( correct);
    window.location.href="highscore.html";
    })

   

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