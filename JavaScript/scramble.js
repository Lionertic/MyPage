'use strict';
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text1c = ["Lorem ipsum dolor sit amet, consectetur adipiscing ","Lorem ipsum dolor sit amet, consectetur adipiscing "];
const text2c = ["Lorem ipsum dolor sit amet, consectetur adipiscing ","Lorem ipsum dolor sit amet, consectetur adipiscing "];
const text3c = ["Tuomion Sammakko","Äärimmäisen Vaarallinen"];
const text4c = ["Tuomion Sammakko","Äärimmäisen Vaarallinen"];
const text5c = ["Tuomion Sammakko","Äärimmäisen Vaarallinen"];
const textPackagen1 = [text1c[0], text1c[1], text1];
const textPackagen2 = [text2c[0], text2c[1], text2];
const textPackagen3 = [text3c[0], text3c[1], text3];
const textPackagen4 = [text4c[0], text4c[1], text4];
const textPackagen5 = [text5c[0], text5c[1], text5];
const textPagen = [textPackagen1, textPackagen2, textPackagen3, textPackagen4, textPackagen5];
let textState = 0;
const nextButton = document.getElementById("next");
nextButton.onclick = () => scrambler(textPagen);
const textPackagep1 = [text1c[1], text1c[0], text1];
const textPackagep2 = [text2c[1], text2c[0], text2];
const textPackagep3 = [text3c[1], text3c[0], text3];
const textPackagep4 = [text4c[1], text4c[0], text4];
const textPackagep5 = [text5c[1], text5c[0], text5];
const textPagep = [textPackagen1, textPackagen2, textPackagen3, textPackagen4, textPackagen5];
// let textState = 0;
const backButton = document.getElementById("back");
backButton.onclick = () => scrambler(textPagep);
function scrambler(textPage) {
    for (let i = 0; i < textPage.length; i++) {
        splitter(...textPage[i])
    }
    if (textState === 0) textState = 1;
    else textState = 0
}

function splitter(from, to, where) {
    from = from.split("");
    to = to.split("");
    let spinCount = Math.max(from.length, to.length);
    if (textState === 0) {
        spinner(from, to, spinCount, where)
    } else {
        spinner(to, from, spinCount, where)
    }
}
let randomChar = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65).toLowerCase();
let startChar = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);

function spinner(from, to, spinCount, where) {
    let sentenceRoller = (i) => {
        let letterspin = (x) => {
            if (i === 0) from[i] = startChar();
            else from[i] = randomChar();
            if (x === 0) from[i] = to[i];
            renderer(from, where)
        }
        for (let i = 0; i < 10; i++) {
            setTimeout(letterspin, i / 10)
            if (i === 9) {
                setTimeout(() => letterspin(0), i * 80)
            }
        }
    }
    for (let i = 0; i < spinCount; i++) {
        setTimeout(() => {
            sentenceRoller(i)
        }, i * 10)
    }
}

function renderer(input, where) {
    where.innerHTML = input.join("")
}
