// Enter name
let firstName = prompt("Inserisci il tuo nome");

// Enter the surname
let surname = prompt("Inserisci il tuo cognome");

// Enter favorite color
let favColor = prompt("Inserisci il tuo colore preferito");

favColor = favColor + "21";

// Password
const password = firstName + surname + favColor;

// Password Message
const passwordMessage = ` 
<h1> Benvenuto/a ${firstName}</h1>
<h3> Questa è la tua password :</h3>
<p> ${password} </p>`;

document.getElementById("passwordGenerator").innerHTML = passwordMessage;
