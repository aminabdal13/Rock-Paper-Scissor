// select the (rock,paper,scissor) from HTML file for player choice;
const Pchoice = document.querySelectorAll(".select");
// select a span element to show a choices;
const ShowChoiceC = document.querySelector(".choiceC");
const ShowChoiceP = document.querySelector(".choiceP");
// select a element to show the winner
const ShowWiner = document.querySelector(".winner")
// variable for cumputer choicing
const Choices = ["Rock","Paper","Scissor"];
// let variable to save a choice;
let computerChoice;

// this function selected a random choice for computer; 
function computer(){
    computerChoice = Choices[Math.floor(Math.random()*Choices.length)];
}
computer();
// set a forEach for enter each to loop for add event to them for player choice;
Pchoice.forEach(item =>{
    item.addEventListener("click",player);
})
function player(e){
    ShowChoiceP.innerText = e.target.id;
    ShowChoiceC.innerText = computerChoice;
    console.log(e.target.id);
    switch(event.target.id){
        case "Rock":
            computerChoice === "Rock"?ShowWiner.innerText = "Draw:|" :null;
            computerChoice === "Paper"?ShowWiner.innerText = "You Lose:(" :null;
            computerChoice === "Scissor"?ShowWiner.innerText = "You Win:)" :null;
            ShowWiner.style.display = "block";
            ShowChoiceC.style.display ="flex";
            ShowChoiceP.style.display ="flex";
                break;
        case "Paper":
            computerChoice === "Paper"?ShowWiner.innerText = "Draw:|" :null;
            computerChoice === "Scissor"?ShowWiner.innerText = "You Lose:(" :null;
            computerChoice === "Rock"?ShowWiner.innerText = "You Win:)" :null;
            ShowWiner.style.display = "block";
            ShowChoiceC.style.display ="flex";
            ShowChoiceP.style.display ="flex";    
                break;
        case "Scissor":
            computerChoice === "Scissor"?ShowWiner.innerText = "Draw:|" :null;
            computerChoice === "Rock"?ShowWiner.innerText = "You Lose:(" :null;
            computerChoice === "Paper"?ShowWiner.innerText = "You Win:)" :null;
            ShowWiner.style.display = "block";
            ShowChoiceC.style.display ="flex";
            ShowChoiceP.style.display ="flex";
                break;
    }
    setTimeout(()=>{
        ShowWiner.innerText.length>0?ShowWiner.style.display = "none":null;
        ShowChoiceC.innerText.length>0?ShowChoiceC.style.display = "none":null
        ShowChoiceP.innerText.length>0?ShowChoiceP.style.display = "none":null
        console.log(ShowWiner.innerText.length);
        computerChoice =   Choices[Math.floor(Math.random()*Choices.length)];
        console.log(computerChoice);
    },3500);
}
console.log(computerChoice)