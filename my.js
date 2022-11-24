//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const button = document.getElementById('button');

const randomComp = Math.floor(Math.random () * 6) +1;
const randomUser = Math.floor(Math.random () * 6) +1;
if (randomComp > randomUser){
    console.log('ha vinto il computer');
}else if(randomUser > randomComp){
    console.log("ha vinto l'user");
}else if(randomUser === randomComp){
    console.log('avete pareggiato')
}

