# TriviaGame
Assigment Five: Trivia Game.

### Overview

Harry Potter Trivia! In this game, the user is shown 10 trivia questions and given 20 seconds to answer the question. If the timer runs out, the player is notified and the next question is displayed. At the end of the game, the player gets a summary of the results of their correct, incorrect, and unansweered questions. 

### Step One

First, I created variables and an array with objects to hold the question, choices, and correct answer values by pulling the index of the correct answer from the choices object.

### Step Two

Next, I created a start button that would display to the page allowing the user to begin the game when ready. 

### Step Three

When the Start button clicked, I created a function that would clear the directions and start button and display the first question and the choices.

### Step Four

In this step, I created another function that would check to see if we have gone through the entirety of the trivia questions variable to determine whether or not we would display another question or show the user their total scores. 

### Step Five 

My next step was to create a function that would allow us to check to see if the player's answer was correct or inccorrect and then inserted this function in the above step so that the answer is checked and then the function to either display the next question or player results is run.

### Step Six

In this step, I created the timer that is set at 20 seconds, goes down by one second, stops at zero, and displays the time left to user on the DOM. 

### Step Seven

This last step is a function that would allow the user to play the game again. I cretaed a button that the player can click on to restart the game. 
