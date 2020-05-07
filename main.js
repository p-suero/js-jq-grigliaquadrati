// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde


//OPZIONE A con l'utilizzo di each (si fa qualche passaggio in più)
//creo con j query 25 quadratini
for (var i = 0; i < 25; i++) {
    $("#griglia").append("<div class='quadrato'><p></p></div>")
}

//seleziono tutti i quadratini e li esamino uno per uno con la funzione each
$(".quadrato p").each(function() {
    //genero un numero random tra 0 e 10 con la funzione sotto creata
    var random = getRndInteger(0, 10);
    console.log(random);
    //creo la condizione per aggiungere i numeri nei quadrati secondo il colore
    if(random == 0) {
        $(this).append(random);
        $(this).addClass("green");
    } else if (random % 2 == 0) {
        $(this).append(random);
        $(this).addClass("red");
    } else {
        $(this).append(random);
    }
})


// //OPZIONE B senza l'utilizzo di each (in questo modo scrivo poco codice)
// //inserisco 25 quadratini con j jQuery
// for (var i = 0; i < 25; i++) {
//     var random = getRndInteger(0, 10);
//     //se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde
//     if (random == 0) {
//         $("#griglia").append("<div class='quadrato green'><p>" + random + "</p></div>");
//     } else if (random % 2 == 0) {
//         $("#griglia").append("<div class='quadrato red'><p>" + random + "</p></div>");
//     } else {
//         $("#griglia").append("<div class='quadrato'><p>" + random + "</p></div>");
//     }
// }

//creo una funzione che generi un numero casuale
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
