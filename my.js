//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


const randomComp = Math.floor(Math.random () * 6) +1;
const randomUser = Math.floor(Math.random () * 6) +1;
butt.addEventListener('click', function(){
    
    if (randomComp > randomUser){
        console.log ('ha vinto il computer');
        document.getElementById('output-one').innerHTML = 'ha vinto il computer';
    }else if(randomUser > randomComp){
        console.log("ha vinto l'user");
        document.getElementById('output-one').innerHTML = 'hai vinto';
    }else if(randomUser == randomComp){
        console.log('avete pareggiato')
        document.getElementById('output-one').innerHTML = 'Avete pareggiato';
    }

})



//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// ho creato un array una lista con delle email registate
const list=['pincopallo@gmail.com', 'mariorossi@gmail.com', 'brambillafumagalli@gmail.com', 'tiziocaio@gmail.com'];
// chiamo l'elemento button
const push = document.getElementById('button');

//gli dico che deve avere un evento al click
click.addEventListener('click', function (){
    const email = document.getElementById('email').value;
    let checkList = '';
    for (let i = 0; i < list.length; i++){
        if (email == list [i]){
          checkList= 'Adesso puoi accedere';
          document.getElementById('output').innerHTML = checkList;
          console.log(checkList);
          break;
        }else{
          checkList= 'Email non trovata';
          document.getElementById('output').innerHTML = checkList;
          console.log(checkList);
    }
     
 
 }


})

   



