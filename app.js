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


console.log("Conditionals - If / else statements")

console.log("Opgave 1. I skal skrive et stykke kode som fortæller om et tal (int) er lige eller ulige.")

function ligeEllerUlige(tal) {
  if (tal % 2 === 0) {
      console.log("Tallet er lige.");
  } else {
      console.log("Tallet er ulige.");
  }
}

// Eksempel:
ligeEllerUlige(5);  // Output: "Tallet er ulige."
ligeEllerUlige(4);  // Output: "Tallet er lige."

console.log("Opgave 2. I skal skrive et stykke kode som fortæller om 5 går op i det tal som i vælger (int). Hvis den går op i det skal i skrive: 5 går op i (det tal i har valgt)")

function gaarFemOpI(tal) {
  if (tal % 5 === 0) {
      console.log("5 går op i " + tal + ".");
  } else {
      console.log("5 går ikke op i " + tal + ".");
  }
}

let mitTal = 55;  // Skriv et tal her
gaarFemOpI(mitTal);

console.log("Opgave 3. Lav opgaven ↑ igen, men i stedet for selv at vælge et tal skal i lave sådan at den selv vælger et tal mellem 0 og 100.")

function gaarFemOpI(tal) {
  if (tal % 5 === 0) {
      console.log("5 går op i " + tal + ".");
  } else {
      console.log("5 går ikke op i " + tal + ".");
  }
}

let randomTal = (Math.floor(Math.random() * 100));  // Skriv et tal her
gaarFemOpI(randomTal);

console.log("Opgave 4. Lav et program som fortæller jer hvilke af de her 3 tal der er størst.")

let a = 25;
let b = 33;
let c = 12;

let størsteTal = Math.max(a, b, c);
console.log("Største tal: " + størsteTal);

console.log("Opgave 5. Lav et program der fortæller hvor varmt det er ud fra en temperatur. Kategorierne er som følger:")

function vurderTemperatur(temperatur) {
  if (temperatur <= 0) return "Det er frostvejr";
  if (temperatur <= 10) return "Det er meget koldt";
  if (temperatur <= 20) return "Det er koldt";
  if (temperatur <= 30) return "Det er normalt vejr";
  if (temperatur <= 40) return "Det er varmt";
  return "Det er meget varmt";
}

console.log(vurderTemperatur(5)); 

console.log("Opgave 6. Lav et program som omformer tal til ugedage ved brug af conditionals, som eksempel nedenunder:")

function talTilUgedag(tal) {
  if (tal === 1) {
      console.log("Den 1. dag i ugen er mandag");
  } else if (tal === 2) {
      console.log("Den 2. dag i ugen er tirsdag");
  } else if (tal === 3) {
      console.log("Den 3. dag i ugen er onsdag");
  } else if (tal === 4) {
      console.log("Den 4. dag i ugen er torsdag");
  } else if (tal === 5) {
      console.log("Den 5. dag i ugen er fredag");
  } else if (tal === 6) {
      console.log("Den 6. dag i ugen er lørdag");
  } else if (tal === 7) {
      console.log("Den 7. dag i ugen er søndag");
  } else {
      console.log("Indtast venligst et tal mellem 1 og 7");
  }
}

// Skriv et tal (nr. dag)
talTilUgedag(3); 

console.log("Opgave 1. Simple loops (Uden arrays eller lign.)")

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("Opgave 2. Lav et program som skrive alle tal fra 1 til 102, på følgende måde")

for (let i = 0; i <= 100; i++) {
  console.log(i, i + 1, i + 2);
}

console.log("Opgave 3 Lav spillet FizzBuzz, spillet går ud på at man i en rundkreds (loop) skifter til at tælle")

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
  } else if (i % 3 === 0) {
      console.log('Fizz');
  } else if (i % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(i);
  }
}

console.log("Nu med while-loopet")

let j = 1;
while (j <= 100) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FizzBuzz');
    } else if (j % 3 === 0) {
        console.log('Fizz');
    } else if (j % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(j);
    }
    j++;
}

console.log("Opgave 4. Lav et program som udregner det faktorielle af et tal med et loop")

function faktorielleFor(n) {
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
      resultat *= i;
  }
  return resultat;
}

console.log(faktorielleFor(5));  // Output: 120 (fordi 5! = 5 × 4 × 3 × 2 × 1 = 120)

console.log("Nu med en while-loop:")

function faktorielleWhile(n) {
  let resultat = 1;
  let i = 1;
  while (i <= n) {
      resultat *= i;
      i++;
  }
  return resultat;
}

console.log(faktorielleWhile(6)); 

console.log("Opgave 5. Lav et program som skriver multiplikationstabel for et givet tal:")

function multiplikationstabel(tal) {
  for (let i = 1; i <= 9; i++) {
      let resultat = tal * i;
      console.log(tal + " X " + i + " = " + resultat);
  }
}

multiplikationstabel(6);









