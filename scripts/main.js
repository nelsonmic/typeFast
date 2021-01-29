// collating DOM elements
let Dscore = document.getElementById("score");
let timer = document.getElementById("timer");
let wordToType = document.getElementById("word-to-type")
let userInput = document.getElementById("user-input");
let waiting = document.getElementById("wait-time");
let toggleRestart = document.getElementById("game-restart");

// global variables
const words = ["abyssal","abysses","abyssopelagic", "acacia","acacias","academe","academes", "accompanyist","accompanyists","accomplice","accomplices","accomplish","accomplishable","accomplished","bulbing","bulblet","bulblets","bulbosities","bulbosity","bulbous","bulbously","bulbousness","bulbousnesses","bulge","bulged","bulger","cartages","cartas","carte","carted","cartel","cartelisation","cartelisations","cartelise","cartelised","cartelises","cartelising","cartelism","cartelisms","cartelist","cartelists","cartelization","cartelizations","offstage","offstages","offtake","offtakes","offtrack","offynyanza","nyanzas","nyas","nyases","nybble","nybbles","nychthemeral","nychthemeron","nychthemerons","nyctaginaceous","nyctalopesjoggling","jogpants","jogs","jogtrot","jogtrots","johannes","johanneses","john","johnboat","johnboats","johnnie","johnnies","johnny","johnnycake","johns","iatrical","iatrochemical","iatrochemist","iatrochemistry","hysterically","hystericky","hysterics","hysteritis","hysteritises","hysterogenic","hysterogenies","sepultured","sepultures","sepulturing","sequacious","sequaciously","sequaciousness","sequacities","sequacity","sequel","sequela","sequelae","sequelise","sequelised","sequelises","tostada","tosticated","tostication","tostications","tot","totable","total","totaled","totaling","totalisation","wholegrain","wholehearted","wholeheartedly","wholemeal","wholemeals","wholeness","wholenesses","worrying","wholesale","wholesome","wholesomely","water","zymolyses","zymolysis","zymolytic","zymome","zymomes","zymometer","zymometers","zymosan","zymosans","zymoses","zymosimeter","zymosimeters","zymosis"];
let time = 61;
let waitTime = 4;
let score = 0;


const initializeGame= ()=>{
    updateWordToType();

    userInput.addEventListener('input', matchWords);

    setInterval(updateTimer, 1000);
}

// this function matches user input and updates score if input is correct
const matchWords=()=>{
    if(userInput.value.toLowerCase() === wordToType.textContent){
        updateWordToType()
        userInput.value = "";
        score = score +10;
        Dscore.textContent = score;
    }
}
// this function calls random words from the array of words
const updateWordToType = ()=>{
    let wordsIndex = Math.floor(Math.random()*words.length);
    wordToType.textContent = words[wordsIndex];
}


// this function creates the game timer, disables user input when time runs out, and also toggles restart visibilty
const updateTimer = ()=>{
  if(time>0){
     time--;
  }else{
      userInput.disabled = true;
      toggleRestart.style.display = "block";
  }
  timer.textContent = `${time}s`;
}


// this function creates a 3 seconds delay timer 
const waitTimeCountDown = ()=>{
    if(waitTime>0){
        waitTime--;
        console.log(waitTime);
        waiting.textContent = `${waitTime}`;
     }else{
         waiting.style.display = "none";
     }
    
}

setInterval(waitTimeCountDown, 1000);
setTimeout(initializeGame, 5200);

