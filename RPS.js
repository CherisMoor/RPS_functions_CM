
// var userChoice = prompt("Do you choose rock, paper or scissors?");

const hands = ['rock', 'paper', 'scissors'];

function getHand()
{
    return hands[parseInt(Math.random()*10%3)];
}

var player1 = {
    name: "Cherish",
    hand: '',
    wins: 0,
}
var player2 = {
    name: "Zombie",
    handRolled: '',
    wins: 0,
}


function playRound(player1, player2)
{
    if(player1Hand==player2Hand)
    {
        return "Cherish: " + player1Hand + "\nZombie: " + player2Hand + "\nThe result is a tie!";
    }


    if(player1Hand=="rock")
    {
        if(player2Hand=="scissors"){
            return "Cherish: " + player1Hand + "\nZombie: " + player2Hand + "\nZombie won!";
        }
        else{
            return "Cherish: " + player1Hand + "\nZombie: " + player2Hand + "\nZombie lost!";
        }
    }


    if(player1Hand=="paper"){
        if(player2Hand=="rock"){
            return "Cherish: " + player1Hand + "\nZombie: " + player2Hand + "\nZombie won!";
        }
        else{
            return "Cherish: " + player1Hand + "\nZombie: " + player2Hand + "\nZombie lost!";
        }
    }


    if(player1Hand=="scissors"){
        if(player2Hand=="rock"){
            return "Cherish: " + player1Hand + "\nZombie: " + player2Hand + "\nZombie won!";
        }
        else{
            return "Cherish: " + player1Hand + "\nZombie: " + player2Hand + "\nZombie lost!";
        }
    }
};




function playGame(player1, player2, playUntil) {

    let player1Score = 0;
    let player2Score = 0;

    for (var i=0; i < playUntil; i++) {

        console.log('Round ', i+1)
        let winner = 'Round';

        if (winner == player1> player2)  {
            player1Score++;
            console.log(player1, " wins the round!")
        } else if (winner == player2) {
            player2Score++;
            console.log(player2, " wins the round!")
        } else {
            console.log("It was a tie!")
        }

        if (player1Score || player2Score > Math.round(playUntil/2)) {
            break;
        }
    }


        console.log(player1, " has a score of ", player1Score);
        console.log(player2, " has a score of ", player2Score);


    if (player1Score == player2Score) {
        console.log('The players have tied!');
        return null
    } else if (player1Score > player2Score) {
        console.log(player1, " is winner!!");
        return player1
    } else {
        console.log(player2, " is winner!!");
        return player2
    }

}



console.log(playGame(player1, player2, 5))

