let gamename = "Guess the word";
document.title = gamename;
document.querySelector("h1").innerHTML = gamename;
document.querySelector("footer").innerHTML = `${gamename} game created by abdesslem hamani`;


let numberoftries = 6;
let numberofletters = 6;
let currentetry = 1;

function generateinput(){
    const inputscontainer = document.querySelector(".inputs");

    for (let i = 1 ; i<= numberoftries ; i++){
        const trydiv = document.createElement("div");
        trydiv.classList.add(`try-${i}`);
        trydiv.innerHTML=`<span>try${i}</span>`;
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
        });
        input.addEventListener("input",function(){
            this.value = this.value.toUpperCase();
           
    })
}
window.onload = function(){
    generateinput();
}

























