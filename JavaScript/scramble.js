'use strict';
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');


const from_text1 = "This text will morph into a quote from Väinö Linna";
const from_text2 = "Walking out to the street, seeking way through rainy wind, I see a group of old people walking";
const from_text3 = "Tuomion Sammakko";
const from_text4 = "Tuomion Sammakko";
const from_text5 = "Tuomion Sammakko";


const to_text1 = "“In the beginning there were the swamp, the hoe - and Jussi.”";
const to_text2 = "They seem so scary and so out of this world that I know And everyone's ripping stones, and, poles, off the ground";
const to_text3 = "Äärimmäisen Vaarallinen";
const to_text4 = "Äärimmäisen Vaarallinen";
const to_text5 = "Äärimmäisen Vaarallinen";


const textPackage1 = [from_text1, to_text1, text1];
const textPackage2 = [from_text2, to_text2, text2];
const textPackage3 = [from_text3, to_text3, text3];
const textPackage4 = [from_text4, to_text4, text4];
const textPackage5 = [from_text5, to_text5, text5];


const textPage = [textPackage1, textPackage2, textPackage3,textPackage4,textPackage5];

let textState = 0;

const actionButton = document.getElementById("scramble");
actionButton.onclick = () => scrambler(textPage);

function scrambler(textPage) {                // this is the one to start transformations

for (let i = 0; i < textPage.length; i++) {      // texts are collected in an array of arrays
splitter(...textPage[i])          // which are then given as parameters
}
if (textState === 0) textState = 1;
else textState = 0;
}


function splitter(from, to, where) {        // contains en and fi texts and element
from = from.split("");                    // splits given strings into arrays
to = to.split("");
let spinCount = Math.max(from.length, to.length); // figures out longer one
if (textState === 0){
spinner(from, to, spinCount, where);       // starts animation function
}else{
spinner(to, from, spinCount, where);
}
}
// these two provide "random" characters for animation; startChar is for capitals
let randomChar = () => String.fromCharCode(Math.floor(Math.random()*25) + 65).toLowerCase();
let startChar = () => String.fromCharCode(Math.floor(Math.random()*25) + 65);

function spinner(from, to, spinCount, where) {      // executes transformations

let sentenceRoller = (i) =>{              // keeps track of textarray index

let letterspin = (x) =>{                // modifies array
if (i === 0) from[i] = startChar();   // first letter stays capital
else from[i] = randomChar();          // others are lowercase
if (x === 0) from[i] = to[i];         // last change is to the target letter
renderer(from, where);                // sends modified arrays to render
} // end of letterspin

for (let i = 0; i < 10; i++){           // calls letterspin
setTimeout(letterspin, i/10)          // adds delay between iterations
if (i === 9){                         // on last spin sends "0" so letterspin
  setTimeout( () => letterspin(0), i*80);   // can stop with the correct letter
}
}
} // end of sentenceRoller
for(let i = 0; i < spinCount; i++){       // this switches the index for spinning
setTimeout( () => {sentenceRoller(i)}, i*60)  // letter so that whole sentence
}                                         // gets transformed.
} // end of spinner

function renderer(input, where) {     // this function updates DOM after every change
where.innerHTML = input.join("");   // so that the animation is visible for user
}

const resetButton = document.getElementById("reset");
resetButton.onclick = () => {
text1.innerHTML = from_text1;
text2.innerHTML = from_text2;
text3.innerHTML = from_text3;
text4.innerHTML = from_text4;
text5.innerHTML = from_text5;

textState = 0;
};
