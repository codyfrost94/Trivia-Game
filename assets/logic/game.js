
var startButton = $("#start-button")
var submitButton = $("#submit-btn")
// My idea for scoring is to run a for loop and match the value of checked radio input to the index of this array
	//if checked=true,
		//if the value of the checked radio input equals answerkey[i], push it to the answeredRight array
		//if it doesn't equal the answer key answer, push to wrong answer array
	//else, nothing happens
//I could just have it see if the one that's checked has a value of true or false. Might do that instead. It's sort of built in
//to the bootstrap radio inputs.
var answerKey = ["3", "September 4th", ]
var answeredRight= []
var answeredWrong = []

//Logic for unansweredQuestions is pretty straightforward; whatever is answered gets subtracted from the total questions.
	//alternatively, I could also pop the answers from the answerkey if they are answered, and then use answerKey.length 
	// as the value for the unanswered questions score
var unansweredQuestions = (10 - answeredRight.length - answeredWrong.length)

// Gonna rip the logic from the interval activity since the main issue with compounding intervals shouldn't be possible 
// since the button disappears after its clicked the first time
var startTime = 30
var intervalId;


function run() {
      intervalId = setInterval(decrement, 1000);
    }


function decrement() {

      //  Decrease number by one.
      startTime--;

      //  Show the number in the #show-number tag.
      $("#time").text(startTime);


      //  Once number hits zero...
      if (startTime === 0) {

        //  ...run the stop function, which now includes changing to the results page
        stop();
     }
 }

 function stop() {
		//Stops the timer in the background.
	      clearInterval(intervalId);
	      //This should also include the logic to create the scores at the end.

	      //Going to add to this function the change from the form to the Results page so I don't need to put it anywhere else.
	       $("#main2").toggleClass("invisible fixed-bottom");
			$("#main3").toggleClass("invisible fixed-bottom");
	        console.log("hit");
	        //This is where the logic to pull score values goes

	        //WIP


	        //Unanswered is total questions(10)subtracting the amounts of the correct and incorrect (using array lengths)
	        unansweredQuestions = (10 - answeredRight - answeredWrong);
	        $("#amount-unanswered").text(unansweredQuestions)
	        console.log(unansweredQuestions)
    }

//This starts the game. It should change to the quiz form and start the timer.
startButton.on("click", function(){
	//Logic to hide start page and load quiz form
	$("#main1").toggleClass("invisible fixed-bottom");
	$("#main2").toggleClass("invisible fixed-bottom");
	//Function to start the timer.
	run();
	//Test log
	console.log("hit");



	    })
//This ends the game when the submit button is clicked, using the same stop function as when the timer runs out.
submitButton.on("click", function() {
	
	stop();
	
	    })


	        
// This is a little test to figure out how ill change screens when the game is played using toggleClass()
// var startQuiz = function(){
// 	        $("#main1").toggleClass("invisible fixed-bottom");
// 	        $("#main2").toggleClass("invisible");
// 	        console.log(hit);
// 	    }
// var myFunction = function() {
// 	var timeCycle2 = setTimeout(function(){
// 	        $("#main2").toggleClass("invisible fixed-bottom");
// 	        $("#main3").toggleClass("invisible fixed-bottom");
// 	      }, 2000);
// }
// Shit works, cool I'm using toggleClass("invisible fixed-bottom") to progress through the game screens
// This probably doesn't scale too well

