//when user clicks on the "play" button, the landing page will disappear and the page where user has to choose between rock, paper and scissor will displayed i.e., the actual game starts.
$("#play").on("click", function(){
    $(".landing-page").hide();
    $("#custom-cards").show();
});

//when user clicks on any card(rock, paper or scissor)..
$(".card").on("click", function(){
    //storing user's choice 
    var userChoice = $(this).children().children().text();   //ROCK or PAPER or SCISSOR
    //storing computer's choice 
    var options = ["ROCK", "PAPER", "SCISSOR"];
    var randomNumbers = Math.floor(Math.random() * 3);
    var compChoice = options[randomNumbers];   //ROCK or PAPER or SCISSOR
    //game logic
    if(userChoice==='ROCK' && compChoice==='ROCK'){
        $("#whoWon").text("GAME DRAW!")
        $("#user").text("[You chose: ROCK]")
        $("#comp").text("[Computer chose: ROCK]")
    }
    else if(userChoice==='ROCK' && compChoice==='PAPER'){
        $("#whoWon").text("BETTER LUCK NEXT TIME!")
        $("#user").text("[You chose: ROCK]")
        $("#comp").text("[Computer chose: PAPER]")
    }
    else if(userChoice==='ROCK' && compChoice==='SCISSOR'){
        $("#whoWon").text("CONGRATULATIONS! YOU WON!")
        $("#user").text("[You chose: ROCK]")
        $("#comp").text("[Computer chose: SCISSOR]")
    }
    else if(userChoice==='PAPER' && compChoice==='ROCK'){
        $("#whoWon").text("CONGRATULATIONS! YOU WON!")
        $("#user").text("[You chose: PAPER]")
        $("#comp").text("[Computer chose: ROCK]")
    }
    else if(userChoice==='PAPER' && compChoice==='PAPER'){
        $("#whoWon").text("GAME DRAW!")
        $("#user").text("[You chose: PAPER]")
        $("#comp").text("[Computer chose: PAPER]")
    }
    else if(userChoice==='PAPER' && compChoice==='SCISSOR'){
        $("#whoWon").text("BETTER LUCK NEXT TIME!")
        $("#user").text("[You chose: PAPER]")
        $("#comp").text("[Computer chose: SCISSOR]")
    }
    else if(userChoice==='SCISSOR' && compChoice==='ROCK'){
        $("#whoWon").text("BETTER LUCK NEXT TIME!")
        $("#user").text("[You chose: SCISSOR]")
        $("#comp").text("[Computer chose: ROCK]")
    }
    else if(userChoice==='SCISSOR' && compChoice==='PAPER'){
        $("#whoWon").text("CONGRATULATIONS! YOU WON!")
        $("#user").text("[You chose: SCISSOR]")
        $("#comp").text("[Computer chose: PAPER]")
    }
    else if(userChoice==='SCISSOR' && compChoice==='SCISSOR'){
        $("#whoWon").text("GAME DRAW!")
        $("#user").text("[You chose: SCISSOR]")
        $("#comp").text("[Computer chose: SCISSOR]")
    }
    //for showing the result, the card-page will disapper and the result page is displayed
    $("#custom-cards").hide();
    $("#result").show();
});

//when user clicks on "play again" button, then the game starts again
$("#play-again").on("click", function(){
    $("#result").hide();
    $(".landing-page").show();
});