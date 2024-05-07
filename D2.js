/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [52, 50];
console.log(Math.max(...numeri));
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 6;
if (numero !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let intero = 80;

let risultato = intero % 5;
console.log("Divisibile per 5 dato che risulta :" + risultato);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const intero1 = 8;
const intero2 = 8;

if (intero1 === 8) {
  console.log("Il valore di uno di essi è:" + intero1);
  if (intero1 - intero2 === 8) {
    console.log("è uguale ad 8");
    if (intero1 + intero2 === 8) {
      console.log("è uguale ad 8");
    }
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1;
let blackFriday = true;
if (blackFriday === true) {
  totalShoppingCart1 = totalShoppingCart1 - (totalShoppingCart1 / 100) * 20;
  if (totalShoppingCart1 <= 50) {
    totalShoppingCart1 = totalShoppingCart1 + 10;
    console.log("Sconto black Friday 20%");
    console.log("spesa di spedizione £10");
    console.log(" Totale :" + totalShoppingCart1);
  } else {
    console.log("Sconto black friday 20%");
    console.log("Spedizione gratuita");
    console.log("totale:" + totalShoppingCart1);
  }
} else if (totalShoppingCart1 <= 50) {
  totalShoppingCart1 + totalShoppingCart1 + 10;
  console.log("Spesa di spedizione 10£");
  console.log("Totale di: " + totalShoppingCart1);
} else {
  console, log("Spedizione gratuita");
  console.log("Totale di :" + totalShoppingCart1);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 44;
let numero2 = 58;
let numero3 = 47;
let massimo, medio, minimo;
if (numero1 >= numero2 && numero1 >= numero3) {
  massimo = numero1;
  if (numero2 >= numero3) {
    medio = numero2;
    minimo = numero3;
  } else {
    medio = numero3;
    minimo = numero2;
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  massimo = numero2;
  if (numero1 >= numero3) {
    medio = numero1;
    minimo = numero3;
  } else {
    medio = numero3;
    minimo = numero1;
  }
} else {
  massimo = numero3;
  if (numero1 >= numero2) {
    medio = numero1;
    minimo = numero2;
  } else {
    medio = numero2;
    minimo = numero1;
  }
}
console.log("Numeri in ordine decrescente:", massimo, medio, minimo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(typeof numero1);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero7 = 10;
let result = numero7 % 2;
if (result / 2) {
  console.log("il risultato è Pari");
} else if (result / 2);
{
  console.log("Il risultato è dispari");
}

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

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  city: "Toronto",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numbers.pop();
numbers.push(100);
