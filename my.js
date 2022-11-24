//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const button = document.getElementById('button');

let number =  []

for (let i = 0; i < 6 ; i++){
    const randomNum = Math.floor(Math.random () * 6);
    number.push (randomNum);

}
console.log(number)