//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");

console.log("Opgave 2. Lav et program, som skriver “Hello” og på næste linje skriver “World” i konsollen")

console.log("Hello \nWorld");

console.log("Opgave 3. Lav et program, som skriver følgende i konsollen. →")

console.log("*\n**\n***\n**\n*")

console.log("Opgave 4. Lav et program, hvor i definere en konstant eller variabel og programmet skriver hvilken type det er, i konsollen. (Altså om det er en int, string, bool osv.)")

const værdi = false;

console.log(typeof værdi);

console.log("Opgave 5. Print svarene på følgende matematiske operationer ved at skrive det direkte ind i Console.log(): fx, Console.log(5 + 5) ⇒ 10 - Ved vi ikke hvad operationen gør, kan vi google den eller finde dem her:")

console.log("10-5: " + (10-5) + "\n25/3: " + (25/3) + "\n25%3: " + (25%3) + "\n25%2: " + (25%2) + "\n3**2: " + (3**2));

console.log("Opgave 6. Skriv i konsollen kombinationen af de her 2 strings ved brug af deres navn")

let tekst1 = "Hello ";
let tekst2 = "World!";
console.log(tekst1 + tekst2);

console.log("Opgave 7. Lav et program som skriver et tilfældig tal i konsollen")

console.log(Math.floor(Math.random() * 100));

console.log("Opgave 9. Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor lige præcis det bliver skrevet")

console.log("1. let number = 23;");
console.log("- Initialiserer en variabel ved navn `number` og tildeler den værdien 23.");
console.log(" ");
console.log("2. console.log(number)");
console.log("- Udskriver værdien af `number`, hvilket er 23.");
console.log(" ");
console.log("3. console.log(number = \"23\")");
console.log("- Tildeler strengen \"23\" til variablen `number` og udskriver den. Konsol output: \"23\".");
console.log(" ");
console.log("4. console.log(number == \"23\")");
console.log("- Sammenligner `number` med strengen \"23\" med `==`, der tillader typekonvertering. Da værdierne matcher, returnerer det true.");
console.log(" ");
console.log("5. console.log(number === \"23\")");
console.log("- Tjekker streng lighed mellem `number` og \"23\" med `===`. Da både type og værdi matcher, returnerer det true.");
console.log(" ");
console.log("6. console.log(number -= 23)");
console.log("- Trækker 23 fra `number`. Eftersom `number` er strengen \"23\", konverterer JavaScript denne til et tal før subtraktionen. Output er 0.");
console.log(" ");
console.log("7. console.log(number += 23)");
console.log("- Tilføjer 23 til `number` (som nu er 0). Output er 23.");
console.log(" ");
console.log("8. console.log(number += \"23\")");
console.log("- Sammenkæder `number` med strengen \"23\". Eftersom `number` er et tal, konverteres det til en streng før sammenkædningen. Output er \"2323\".");
console.log(" ");
console.log("9. console.log(number -= \"46\")");
console.log("- Trækker tallet 46 fra strengen \"2323\", som først konverteres til et tal. Resultatet er 2277.");
console.log(" ");
console.log("10. console.log(number != \"23\")");
console.log("- Tjekker om `number` (som nu er 2277) ikke er lig med strengen \"23\". Returnerer true, da de er forskellige.");
console.log(" ");
console.log("11. console.log(number **= 2)");
console.log("- Opløfter `number` (2277) til anden potens. Resultatet er 5184729.");




