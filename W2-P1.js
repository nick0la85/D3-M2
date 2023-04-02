/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let numero1= 6
let numero2= 10
if (numero1>numero2 ) {console.log (numero1)}
else {console.log ("numero2 è il piu grande")}*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let numero=6
if (numero !==5) {console.log ("not equal")} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let numero = 15;
if (numero % 5 === 0) {console.log ("divisible by 5")}*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let numero1 =6
let numero2 = 1
if ((numero1===8)||(numero2===8)||(numero1+numero2===8)||(numero1-numero2===8)) {console.log ("risposta corretta")} else {console.log ("risposta sbagliata")}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart=60
if (totalShoppingCart>50) {console.log (totalShoppingCart +"Complimenti spedizione gratuita")}
else {console.log (totalShoppingCart+10+ "spese di spedizione pari a 10 euro")}*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/* let totalShoppingCart=30
let total;
if (totalShoppingCart>50) {total=totalShoppingCart*0.8}
else {totalNoBlack=total=totalShoppingCart+10; total=totalNoBlack*0.8} 
console.log(total)*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* let num1=6
let num2=9
let num3=8

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else if (num3 >= num1 && num3 >= num2) {
  if (num1 >= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let numero = 41;
if (typeof Number.isInteger) {console.log (" numero intero")}
else {console.log("numero decimale")}*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let num=50
if (num % 2 === 0) {console.log("pari")}
else {console.log ("dispari")}
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*let val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/


/* let num=44
if (num<5) {console.log ("Tiny")}
else if (num<10) {console.log("Small")}
else if(num<15) {console.log ("Medium")}
else if (num<20) {console.log("Large")}
else if (num>=20) {console.log ("Huge")} */

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* let isMale=true
let gender= isMale ? "male" : "Female"
console.log (gender) */

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/


/* let i=0
while (i <= 5) {
  console.log(i);
  i++;
}*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* for (let i = 0; i <= 10; i++) {
  console.log(i);
} */

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* for (let i = 0; i <= 10; i++) {
  if (i !== 3 && i !== 8) {
    console.log(i);
  }
} */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* for (let i=0; i<=15;i++) if (i% 2 === 0) {console.log("pari")}
else {console.log ("dispari")}*/

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}*/

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/*let day=5
if (day===1) {console.log ("lunedi")}
else if (day===2) {console.log("martedi")}
else if (day===3) {console.log("mercoledi")}
else if (day===4) {console.log("giovedi")}
else if (day===5) {console.log("venerdi")}
else if (day===6) {console.log("sabato")}
else if (day===7) {console.log("domenica")}*/
