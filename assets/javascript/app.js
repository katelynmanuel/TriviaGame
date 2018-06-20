$(document).ready()

//Create Global Variables
var time = 120;
var intervalId = "";
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;

var questionOne = {
    question: "What is the name of the house Harry Potter gets sorted into?",
    choices: ["Ravenclaw", "Slytherin", "Gryffindor", "Hufflepuff"],
    correct: ["Gryffindor"]
};

var questionTwo = {
    question: "Which one of these is NOT part of the Deathly Hallows?",
    choices: ["Ressurection Stone", "Elder Wand", "Sorcerer's Stone", "Cloak of Invisibility"],
    correct: ["Sorcerer's Stone"]
};

var questionThree = {
    question: "What is the name of the three-headed dog protecting the trap door in Harry Potter and the Sorcerer's Stone?",
    choices: ["Fang", "Scabbers", "Aragog", "Fluffy"],
    correct: ["Fluffy"]
};

var questionFour = {
    question: "How many siblings does Ron Weasley have?",
    choices: ["Six", "Four", "Twelve", "Three"],
    correct: ["Six"]
};

var questionFive = {
    question: "What is the name of the professor that teaches Potions at Howgwarts?",
    choices: ["Minerva McGonagall", "Severus Snape", "Sybill Trewlaney", "Albus Dubmledore"],
    correct: ["Severus Snape"]
};

//Function to start game with Start button
function startButton () {
    var startQuestionsButton = $("<button>");
    startQuestionsButton.text("Start the Game!");
    $(".displayButton").html(startQuestionsButton);
    console.log(startQuestionsButton);
};

startButton();

//Create function to start timer when user clicks on Start button
function startInterval() {
    intervalId = setInterval(decrement, 120000);
};

//Create decrement function and display to the page.
function decrement() {
    time--;
    $(".displayTimer").html("Time remaining: " + time + " seconds.");
}

//Display questions and possible answers to the page. Then display whether or not the user was correct. 

//Display the total number of quesitons answered correctly versus incorrectly and unanswered. 

//Display button if the user wants to play again. 