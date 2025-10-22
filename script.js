//query///
const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const input =form.querySelector("#guessingNumber");
const button =form.querySelector("#btn");
const p1 =cardBody.querySelector(".result-text");
const p2 =cardBody.querySelector(".remaining");
const message=document.createElement("p");


//initializing some value//
let totalAttempt=5;
let attempt=0;
let win=0;
let loss=0;

//adding event listener

form.addEventListener("submit", function(event){

    event.preventDefault();

    attempt++;
    if(attempt==5){
        input.disabled=true;
        button.disabled=true;
    }
    if(attempt<6){
        let guessed=Number(input.value);
        checkResult(guessed);
        p2.innerHTML=`Remaining attempts:${totalAttempt-attempt}`;
    }
    
   input.value=" ";
});

//main function///
const checkResult=(guess)=>{
    console.log(guess);
    
    const randomNumber=getrandomNumber(5);

    if(randomNumber == guess){
        win++;
        p1.innerHTML=`You have Won`; 
    }
    else{
        loss++;
        p1.innerHTML=`You have lost; random number was: ${randomNumber}`;
    }
    
    message.innerHTML=`Won:${win},Lost:${loss}`;
    message.classList.add("large-text");
    cardBody.appendChild(message);
}


const getrandomNumber= (limit)=>{
    return Math.floor(Math.random()*limit)+1;
}