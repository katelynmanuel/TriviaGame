//Create variables
var i = 0;
var intervalId = "";
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var answerChoices = 0;
var values = "";
var time = 30;

$(document).ready(function() {

//Create Trivia Questions
var triviaQuestions = [
    {
        question: "What is the name of the house Harry Potter gets sorted into?",
        choices: ["Ravenclaw", "Slytherin", "Gryffindor", "Hufflepuff"],
        value: 2,
        image: ["src", "assets/images/GryffindorCrest.jpg"],
        alt: "Gryffindor"
    },

    {
        question: "Which one of these is NOT part of the Deathly Hallows?",
        choices: ["Ressurection Stone", "Elder Wand", "Sorcerer's Stone", "Cloak of Invisibility"],
        value: 2,
    },

    {
        question: "What is the name of the three-headed dog protecting the trap door in Harry Potter and the Sorcerer's Stone?",
        choices: ["Fang", "Fluffy", "Aragog", "Scabbers"],
        value: 2,
    },

    {
        question: "How many siblings does Ron Weasley have?",
        choices: ["Six", "Four", "Twelve", "Three"],
        value: 0,
    },

    {
        question: "What is the name of the professor that teaches Potions at Hogwarts?",
        choices: ["Minerva McGonagall", "Severus Snape", "Sybill Trewlaney", "Albus Dubmledore"],
        value: 1,
    },

    {
        question: "What shape does Harry's patronus take?",
        choices: ["an Otter", "a Dog", "a Stag", "a Dragon"],
        value: 2,
    },

    {
        question: "What is Hermione's middle name?",
        choices: ["Jean", "Marie", "Anne", "Lily"],
        value: 0,
    },

    {
        question: "Who is the Keeper of Keys and Grounds at Hogwarts?",
        choices: ["Gilderoy Lockhart", "Rubeus Hagrid", "Argus Filch", "Albus Dumbledore"],
        value: 1,
    },

    {
        question: "What is the name of the potion that's also called Liquid Luck?",
        choices: ["Veritaserum", "Amortentia", "Felix Felicis", "Polyjuice POtion"],
        value: 2,
    },

    {
        question: "Which newspaper did Rita Skeeter work for?",
        choices: ["The Daily Prophet", "The Quibbler", "The Wizard's Voice", "Wizard People"],
        value: 0,
    },
]

//Function to start game with Start button
function startButton() {
    $(".displayChoices").hide();
    var startQuestionsButton = $("<button>");
    startQuestionsButton.text("Alohamora");
    $(".displayButton").append(startQuestionsButton);
};

startButton();

//Displays current question when start button is clicked.
$(".displayButton").on("click", function displayCurrentQuestion () {
    run();
    $(".main").empty();
    $(".displayButton").empty();
    $(".displayChoices").show();
    var currentQuestion = `
    <h4>${triviaQuestions[i].question}</h4><br/>
    <input type="radio" name="choices" value="0">${triviaQuestions[i].choices[0]}</input><br/>
    <input type="radio" name="choices" value="1">${triviaQuestions[i].choices[1]}</input><br/>
    <input type="radio" name="choices" value="2">${triviaQuestions[i].choices[2]}</input><br/>
    <input type="radio" name="choices" value="3">${triviaQuestions[i].choices[3]}</input><br/><br/>
    `;
    $(".displayQuestion").html(currentQuestion);
    console.log(currentQuestion);
});

//Check to see if there are more questions. If i > 9, display user results, else move to current question.
$("#submit").on("click", function() {
    var prevQuestion = triviaQuestions[i];
    checkAnswer(prevQuestion);
    i++
    if (i > 9) {
        stop();
        $(".displayChoices").empty();
        $(".displayQuestion").empty();
        $(".displayTimer").hide();
        $(".displayScores").html(`
        <h3>Your Results</h3>
        <h4>Correct: ${correctAnswers}</h3>
        <h4>Incorrect: ${incorrectAnswers}</h4>
        <h4>Unanswered: ${unansweredQuestions}</h4>
        `)
        playAgain();
    } else { 
        var currentQuestion = `
        <h4>${triviaQuestions[i].question}</h4><br/>
        <input type="radio" name="choices" value="0">${triviaQuestions[i].choices[0]}</input><br/>
        <input type="radio" name="choices" value="1">${triviaQuestions[i].choices[1]}</input><br/>
        <input type="radio" name="choices" value="2">${triviaQuestions[i].choices[2]}</input><br/>
        <input type="radio" name="choices "value="3">${triviaQuestions[i].choices[3]}</input><br/><br/>
        `;
        $(".displayQuestion").html(currentQuestion);
    }
    stop();
    run();
});

//Function to check if answer is correct or incorrect.
function checkAnswer (previousQuestion) {
    var checked = $("input:radio[name=choices]:checked").val();
    console.log("User Input: " + checked);
    if (checked == previousQuestion.value) {
        correctAnswers++;
        console.log("Correct: " + correctAnswers);
        console.log("Correct");
    } else {
        incorrectAnswers++;  
    }
    stop();
    run();
};

//Function to start timer and display to html page.
function run () {
    clearInterval(intervalId);
    time = 21;
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        time--;
        $(".displayTimer").html("<br/><br/><h4>Time Remaining: " + time + " seconds.</h4>");
        if (time === 0){
            stop();
            $(".displayTimer").html("<h4>Time's Up!</h4>");
            unansweredQuestions++
            checkAnswer();
            $(".displayQuestion").hide();
        }
    };

};

function stop() {
    clearInterval(intervalId);
}; 


//Display button if the user wants to play again. 
function playAgain () {
    $(".displayChoices").empty();
    $(".displayQuestion").empty();
    $(".displayTimer").hide();
    var playAgainButton = $("<button>");
    playAgainButton.text("Play Again!");
    $(".displayPlayAgain").html(playAgainButton);

    $(".displayPlayAgain").on("click", function nextRound () {
    displayCurrentQuestion();
    });
};

});
