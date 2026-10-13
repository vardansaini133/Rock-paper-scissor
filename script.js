let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")


const gencomp=() => {
    const option=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3)
    return option[randIdx];
    // rock,paper,scissor
}

const drawgame=() => {
    // console.log("game was draw");
    msg.innerText="Game was draw.play again"
        msg.style.backgroundColor="#081b31"

    
};

const showWinner=(userWin,userchoice,compchoice)=> {
    if(userWin) {
        userscore++;
        userscorepara.innerText=userscore
        // console.log("you win");
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    }else {
        compscore++;
        compscorepara.innerText=compscore;
        // console.log("you lose");
        msg.innerText=`you lost. ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"
        
    }
};


const playgame=(userchoice) => {
    // console.log("user choice=", userchoice);
    const compchoice=gencomp()
    // console.log("comp choice=",compchoice);

    if(userchoice===compchoice) {
drawgame();
    }else {
        let userWin=true
        if(userchoice==="rock") {
            userWin=compchoice==="paper" ? false: true
        }else if(userchoice==="paper") {
            userWin=compchoice==="scissors" ? false:true
        }else{
            userWin=compchoice==="rock" ? false:true;
        }
showWinner(userWin,userchoice,compchoice);
        }
    }
    



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id")
console.log("",userchoice);
playgame(userchoice)
    })
})