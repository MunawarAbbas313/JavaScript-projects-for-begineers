// Getting the HTMl elements 
// we will be using Modular Programming 
// by wrappping every functionality in  functions 

const btns = document.querySelectorAll(".choices");
const UserScore = document.querySelector(".you");
const CompScore = document.querySelector(".comp");
const winmessage = document.querySelector(".tie");
const resetBtn = document.querySelector(".reset");

let userSco = 0;
let compSco = 0;

// In this function we will generte a random 
//choice of computer among the ivaialbe three choice rock , paper and sisscor
const CompGenChoice = ()=>{
    let choice = ["rock", "paper", "scissor"];
    let CoiseIndex  = Math.floor(Math.random()*choice.length);
    const compChoice = choice[CoiseIndex]
    return compChoice;
    
}


// this function will let us know the choice of user 
const PlayGame = (userChoice)=>{
    console.log(`Choise name ${userChoice}`);
    // storing value of computer choice in a varibale
    const computerChoice = CompGenChoice();
    // making wining logic
    console.log(computerChoice);
    if(computerChoice === userChoice)
    {
        console.log("its a tie");
        winmessage.innerHTML = " Its a Tie"
        winmessage.style.background = "lightblue";
        
    }
    else if(computerChoice == "rock" && userChoice == "scissor")
    {
        console.log("Computer wins")
        compSco++;
        CompScore.innerHTML = `Computer Score : ${compSco}`;
        winmessage.innerHTML = " Computer Wins: try Again ";
        winmessage.style.background = "red";
    }
    else if(computerChoice == "scissor" && userChoice == "paper")
        {
            console.log("Computer wins")
            compSco++;
            CompScore.innerHTML = `Computer Score : ${compSco}`;
            winmessage.innerHTML = " Computer Wins : Try Again ";
            winmessage.style.background = "red";
        }
        else if(computerChoice == "paper" && userChoice == "rock"){
            console.log("Computer wins")
            compSco++;
            CompScore.innerHTML = `Computer Score : ${compSco}`;
            winmessage.innerHTML = " Computer Wins : Try Again ";
            winmessage.style.background = "red";
        }
        else if(computerChoice == "rock" && userChoice == "paper"){
 
            console.log("user wins");
            userSco++;
            UserScore.innerHTML = `Your Score :  ${userSco}`;
            winmessage.innerHTML = "You won : Hurrah";
            winmessage.style.background = "lightgreen";
        }
        else if(computerChoice == "paper" && userChoice == "scissor"){
 
            console.log("user wins");
            userSco++;
            UserScore.innerHTML = `Your Score :  ${userSco}`;
            winmessage.innerHTML = "You won : Hurrah";
            winmessage.style.background = "lightgreen";
        }
        else if(computerChoice == "scissor" && userChoice == "rock"){
 
            console.log("user wins");
            userSco++;
            UserScore.innerHTML = `Your Score :  ${userSco}`;
            winmessage.innerHTML = "You won : Hurrah";
            winmessage.style.background = "lightgreen";
        }
        winmessage.style.display = "flex";
        
    
}
btns.forEach((item, index) => {
    item.addEventListener("click", () => {
        const IdofChoice = index;
        const userChoice = item.getAttribute("id");
        
        PlayGame(userChoice);  
        // ading rest btn
        rest();
    })
})

// apply a rest logic on clicking the Reset button :
function rest()
{
    resetBtn.addEventListener("click", ()=>{
        userSco = 0;
        compSco = 0;
        UserScore.innerHTML = `Your Score :  ${userSco}`;
        CompScore.innerHTML = `Computer Score : ${compSco}`;
        winmessage.style.display = "none";
        winmessage.style.background = "";
    })
}
