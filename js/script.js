/* Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

//FUNZIONE per far si che i numeri non possono essere duplicati
function inUnArray (elemento, array) {

    for (var i = 0; i < array.length; i++ ) {
        //console.log(i);

        if (array[i] == elemento) {
            return true;
        }
    }
    return false
}


var arrayNumeriCasuali = [];

//ciclo for per inserire 5 numeri casuali, non uguali tra di loro dentro un array
while (arrayNumeriCasuali.length < 5){
    var numeriCasuali = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
    console.log(numeriCasuali);

    if (inUnArray (numeriCasuali, arrayNumeriCasuali) == false) {
        arrayNumeriCasuali.push(numeriCasuali);
    }
       
}

//esce alert con i 5 numeri casuali
alert(arrayNumeriCasuali);
console.log("Array Numeri Casuali ", arrayNumeriCasuali);

//Da li parte un timer di 30 secondi
setTimeout (function () {

    //creato array con i 5 numeri inseriti dall'utente
    var arrayUtente = [];
    for (var i = 0; i < 5; i++) {
        
        var numeroUtente = parseInt(prompt("N° " + (arrayUtente.length+1) + " !"));
        //console.log(numeroUtente);
        arrayUtente.push(numeroUtente);
        
    }
    console.log("Array Numeri Utente ", arrayUtente);

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
      

    var risultato;
    var messaggio;

    for (var i = 0; i < 5; i++) {

        if (arrayNumeriCasuali[i] == arrayUtente[i]) {
            risultato = arrayUtente[i];
            //console.log("consollo la i dentro if", i);
            //console.log("Numero che sei riuscito ad indovinare: ", i, risultato);

            messaggio = "Sei riuscito ad individuare: " + risultato;
            console.log(messaggio);
        } 

    }    

    
    

    console.log("All'interno setTimeout"); //appare dopo in console
}, 3000 );

console.log("dopo il setTimeout"); //appare prima in console



