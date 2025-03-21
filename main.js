//setting game name
let gamename = "Guess the word";
document.title = gamename;
document.querySelector("h1").innerHTML = gamename;
document.querySelector("footer").innerHTML = `${gamename} game created by abdesslem hamani`;

//setting game options
let numberoftries = 6;
let numberofletters = 6;
let currentetry = 1;

//manage words
let wordtoguess ="";
const words = ["salamo","hosnii","fronte","devlop","algeri","setife","daouch","louchi"];
wordtoguess= words[Math.floor(Math.random()* words.length)].toLowerCase();
let messagearea = document.querySelector(".message");


function generateinput(){
    const inputscontainer = document.querySelector(".inputs");



    //create main try div
    for (let i = 1 ; i<= numberoftries ; i++){
        const trydiv = document.createElement("div");
        trydiv.classList.add(`try-${i}`);
        trydiv.innerHTML=`<span>try ${i}</span>`;
        if (i !== 1 ) trydiv.classList.add("disabled-inputs");
        for (let j = 1 ; j<= numberofletters ; j++){
const input = document.createElement("input");
input.type = "text";
input.id =`guess-${i}-letter-${j}`;
input.setAttribute("maxlength","1");
trydiv.appendChild(input)
        }
        inputscontainer.appendChild(trydiv);
    
    }
    inputscontainer.children[0].children[1].focus();

    const inputsindisabledDiv = document.querySelectorAll(".disabled-inputs input");
    inputsindisabledDiv.forEach((input)=>(input.disabled = true));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input,index)=>{
        input.addEventListener("input",function(){
            this.value = this.value.toUpperCase();

            const nextinput = inputs[index + 1 ];
            if(nextinput) nextinput.focus();
        });
        
        input.addEventListener("keydown",function(event){
            
            const curentindex =Array.from(inputs).indexOf(this);
            if(event.key ==="ArrowRight"){
                const nextinput = curentindex + 1 ;
                if (nextinput < inputs.length) inputs[nextinput].focus();
            }
            if(event.key ==="ArrowLeft"){
                const previnput = curentindex - 1 ;
                if (previnput >= 0) inputs[previnput].focus();
            }
        });
    })
}
const guessbutton = document.querySelector(".check");
guessbutton.addEventListener("click",handleguesses);
console.log(wordtoguess)
function handleguesses () {
    let successguess = true;
    for(let i= 1; i <=numberofletters; i++){
        const inputfield = document .querySelector(`#guess-${currentetry}-letter-${i}`);
        const letter = inputfield.value.toLowerCase();
const actualletter =wordtoguess[i - 1];
if(letter === actualletter){
    inputfield.classList.add("in-place");
}else if (wordtoguess.includes(letter) && letter !==""){
    inputfield.classList.add("not-in-place");
     successguess = false;
}else {
    inputfield.classList.add("no");
    successguess = false ;
}
}
//check if user win or lose
if (successguess){
messagearea.innerHTML = `you win the word is<span>${wordtoguess}<span>`;
//add disabled class on all try divs
let alltries = document.querySelectorAll(".inputs >div");
alltries.forEach((trydiv)=>trydiv.classList.add("disabled-inputs"));
//disabled guess button 
guessbutton.disabled = true;
}else{
docu


}
    }


window.onload = function(){
    generateinput();
}

























