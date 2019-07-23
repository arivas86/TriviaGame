var card = $("#quiz-area");

// Question set
var questions = [
    {
    question: "Which country hosts the famous EDM festival 'Tomorrowland'?",
    answers: ["Belgium", "Spain", "Madagascar", "Germany"],
    correctAnswer: "Belgium"
    },
    {
    question: "Which Colombian singer sings 'Felices los 4'?",
    answers: ["Maluma", "J Balvin", "Shakira", "Ricky Martin"],
    correctAnswer: "Maluma"
    },
    {
    question: "Which former NBA player DJs under the alias 'DJ Diesel'?",
    answers: ["Kobe Bryant", "Michael Jordan", "Shaquile O'neal", "Dirk Nowitzki"],
    correctAnswer: "Shaquile O'neal"
    },
    {
    question: "For which team does Cristiano Ronaldo currently plays?",
    answers: ["Real Madrid", "Manchester Utd.", "Porto FC", "Juventus"],
    correctAnswer: "Juventus"
    },
    {
    question: "Which country won the 2018 FIFA World Cup?",
    answers: ["Spain", "France", "Germany", "Mexico"],
    correctAnswer: "France"
    },
    {
    question: "Which famous DJ colaborated with J Balvin on the hit song 'Loco Contigo'?",
    answers: ["DJ Snake", "DJ Diesel", "Dimitri Vegas & Like Mike", "Afrojack"],
    correctAnswer: "DJ Snake"
    }
];

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,

    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter === 0) {
        game.gameEnd();
        }
    },

    gameStart: function() {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend(
        "<h2><span id='counter'>30</span> Seconds Remaining</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {

            card.append("<h2>" + questions[i].question + "</h2>");

            for (var x = 0; x < questions[i].answers.length; x++) {
                card.append("<input type='radio' name='question-" + i +
                "'value='" + questions[i].answers[x] + "''>" + questions[i].answers[x]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    gameEnd: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).val() === questions[i].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        }
        this.result();
        
    },

    result: function() {
        clearInterval(timer);

        // $("#sub-wrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};


$(document).on("click", "#start", function() {
game.gameStart();
});

$(document).on("click", "#done", function() {
game.gameEnd();
});
