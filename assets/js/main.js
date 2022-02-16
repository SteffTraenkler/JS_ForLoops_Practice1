//Lev1_1
console.log('%c Lev 1_1', 'color:darkred; font-weight:900');

//For Schleife die 10 Mal Hello world + nummer ausgibt

for (let i = 1; i <= 10; i++) {
    console.log('Hello World ' + i);
}

//Lev1_2
console.log('');
console.log('%c Lev 1_2', 'color:darkred; font-weight:900');

//Array mit Zahlen 1-10

let numArray = [];
for (i = 0; i <= 10; i++) {
    numArray.push(i);
}
console.log(numArray);

//Lev1_3
console.log('');
console.log('%c Lev 1_3', 'color:darkred; font-weight:900');

//while mit Hallo World + Nummer
let counter = 0;
while (counter < 10) {
    console.log('Hallo World ' + counter);
    counter++;
}

//Lev1_4
console.log('');
console.log('%c Lev 1_4', 'color:darkred; font-weight:900');

let names = ['Eric', 'Steffen', 'Finn', 'Simon', 'Franzi', 'Kim', 'Sergio'];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}

//Lev1_5
console.log('');
console.log('%c Lev 1_5', 'color:darkred; font-weight:900');

var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
var apples = [apple1, apple2, apple3];
console.log(apples[2]);

for (let i = 0; i < apples.length; i++) {
    let e = apples[i].size;
    console.log(e);
}
// size: -> is a key, the 'big' is a value. To access those object you want to get the value. Therefore you ask for the key/object to get the value of the key.

//Lev1_6
console.log('');
console.log('%c Lev 1_6', 'color:darkred; font-weight:900');

let retArray = [];
for (i = 1; i <= 100; i++) {
    retArray.push('image_' + i + '.jpg');
}
console.log(retArray);

//Lev1_7
console.log('');
console.log('%c Lev 1_7', 'color:darkred; font-weight:900');

let c = 0;
do {
    c++
    console.log('The number is ' + c);
} while (c <= 5);

//Lev1_8
console.log('');
console.log('%c Lev 1_8', 'color:darkred; font-weight:900');

let a = 0;
do {
    a++;
    if (a % 2 == 0) {
        console.log(a);
    }
} while (a <= 20);

//Lev1_9
console.log('');
console.log('%c Lev 1_9', 'color:darkred; font-weight:900');

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

let wordnumbers = document.getElementById('numbers');
let out = document.getElementById('out');


function wordCount() {
    let z = Number(wordnumbers.value);
    console.log(z);
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === z) {
            console.log(words[i]);
            out.innerHTML += `<h1>${words[i]}</h1>`;
        }
    }
}