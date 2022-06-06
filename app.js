const down = document.querySelector('.down');
const up = document.querySelector('.up');
const guess = document.querySelector('#guess-number');
const guessBtn = document.querySelector('#guess-btn');
const report = document.querySelector(".report");
const resetBtn = document.querySelector(".reset");
const attemps = document.querySelector(".attemps");


let isGameOver = false;
const prevGuesses = []
const answer = randomNumber()
console.log(answer);

function randomNumber(){
    return Math.floor(Math.random() * 100) +1
}

guessBtn.addEventListener("click", () =>{
    if(isGameOver) return
    
    if(prevGuesses.includes(guess.value)){
        report.innerText = `You already guessed ${guess.value}`;
    }
    else{
        if(guess.value > answer){
            report.innerText = "Little lower.."
            up.innerText = guess.value;
        }else if(guess.value < answer){
            report.innerText = "Little higher.."
            down.innerText = guess.value;
        }else{
            report.innerText = `You got it! The answer was : ${answer}`
            isGameOver = true;
            return;
        }
        prevGuesses.push(guess.value);
        attemps.innerText -= 1 ;

        if(attemps.innerText == '0'){
            report.innerText = `You lost! The answer was : ${answer}.`
            isGameOver = True;
        }
    } 
  
})

resetBtn.addEventListener('click', ()=>{
    isGameOver = false;
    up.innerText = 100 ;
    down.innerText = 1 ;
    report.innerText = "Make a guess!"
    attemps.innerText = 10 ;
})