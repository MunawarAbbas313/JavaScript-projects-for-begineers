const form = document.querySelector('.from');
const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessfield')
const Remaning = document.querySelector('.Lastresult');
const guesSlot = document.querySelector('.guesses');
const lowOrhi = document.querySelector('.lowOrhi');
const reset = document.querySelector('.p');
const startOver = document.querySelector('.results')
const styl = document.querySelector('#Lastresults')

let randomNum = parseInt(Math.random() * 100 + 1);

let PlayGame = true;
let GuessNum = 10;
let PreGuess = [];
if(PlayGame)
    {
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            let guess = parseInt(userInput.value);
             validateGuess(guess);
            
        })
    }

function validateGuess(guess)
{
    if(isNaN(guess))
        {
            alert(' Enter a Number Please ');
        }
   else if(guess > 100)
        {
            alert('Enter a Number smaller then 100 ');
        }
        else if(guess < 1)
            {
                alert('Enter a Postive Number : ');
            }
            else
            {
              PreGuess.push(guess);
              guesSlot.innerHTML = ` ${PreGuess}  `;
              if(GuessNum === 0)
                {
                    displaymessage(`YOU LOOSE CORRECT NUMBER WAS : ${ randomNum} `);
                    endGame();
                }
                else{
                    checkGuess(guess);
                    displayGuess(guess);
                }
            }
}

function displaymessage(message)
{
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function checkGuess(guess)
{
    if(guess === randomNum)
        {
             displaymessage('HURRAH Number Matched YOU WON !!');
        }
        else if(guess < randomNum)
            {
                displaymessage('Number Too Low ');
            }
            else if(guess > randomNum)
                {
                    displaymessage('Number to High')
                }
}

function displayGuess(guess)
{
           GuessNum--;
           styl.innerHTML = ` ${GuessNum - 1 +1} `;
           Remaning.innerHTML = ` ${GuessNum - 1 +1} `;
           PlayGame = false;
}
function endGame()
{
    userInput.value = '';
    guesSlot.setAttribute('disable', '' )
    reset.classList.add('button');
    reset.innerHTML = `<h2 id="NewGamee">Start new Game</h2>`;
    PlayGame = false;
    newGame();
   
}

 function newGame()
 {
      const btn = document.querySelector('#NewGamee');
      btn.addEventListener('click', (e)=>{
         e.preventDefault();
         randomNum = parseInt(Math.random() * 100 + 1);
         PreGuess =[];
         GuessNum = 
         Remaning.innerHTML = ` ${10}  `;
         guesSlot.innerHTML = '';
        PlayGame = true;
        displaymessage('New Game Better Luck');
        btn.remove();
        
        

      })
 }