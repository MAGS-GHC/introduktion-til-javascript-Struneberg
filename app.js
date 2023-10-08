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

console.log("Arrays")

console.log("Opgave 1. Skriv “Viborg” i konsollen ved at trække den ud fra følgende array")

let byer = ["Randers", "Viborg", "Aarhus", "København"];
console.log(byer[1]);


console.log("Opgave 2. Tilføj “Skive” til denne array")

let byer2 = ["Randers", "Viborg", "Aarhus", "København"];
byer2.push("Skive");
console.log(byer2);

console.log("Opgave 3. Erstat den værdi, uden at ændre direkte i arrayet, som ikke passer ind, så arrayet stemmer:")

let talrække = [0, 1, 0, 3, 4, 5, 6];
talrække[2] = 2;
console.log(talrække); 

console.log("Opgave 4. Skriv, i konsollen, den største værdi fra følgende array. Selvfølgelig ikke manuelt.")

talrække = [1, 2, 3, 4, 11, 55, 99, 100];
console.log("Den største værdi i arrayet er:", Math.max(...talrække));

console.log("Opgave 5. Sorter den her array")

talrække = [0, 12, 0, 22, 300, 4, 5];
talrække.sort((a, b) => a - b);
console.log(talrække); 

console.log("Opgave 6. Sorter den her array i omvendt rækkefølge:")

talrække = [0, 12, 0, 22, 300, 4, 5]

talrække.sort((a, b) => b - a);
console.log(talrække); 

console.log("Funktioner - Overgang til HTML")

console.log("Opgave 1. Skriv noget kode eller kode sammen med en knap, så i eksekvere følgende funktion:")

console.log(" se knap.html")

console.log("Opgave 2. I skal lave en funktion som tager 2 tal og returnerer summen af dem.")  

function sum(a, b) {
    return a + b;
}


console.log(sum(2, 5));
console.log(sum(3, 18)); 

console.log("Opgave 3. 1. Lav en **funktion** som returnerer ***true*** hvis man skriver “Ja” som input og ***false*** ved alt andet")  

function erDetJa(input) {
    return input === "Ja";
}

// Test af funktionen
console.log(erDetJa("Ja")); 
console.log(erDetJa("Nej")); 

console.log("Opgave 4. Lav en funktion som fungere som en password-tjekker")


const kodeord = "SikkerKode123";

function tjekKodeord(input) {
    return input === kodeord;
}

// Test af funktionen
console.log(tjekKodeord("SikkerKode123")); 
console.log(tjekKodeord("sikkerkode123"));
console.log(tjekKodeord("ForkertKode"));

console.log("Opgave 5. Lav en funktion som i opgaven før, men for brugernavn")

const korrektBrugernavn = "strune";

function tjekBrugernavn(input) {
    return input.toLowerCase() === korrektBrugernavn.toLowerCase();
}

// Test af funktionen
console.log(tjekBrugernavn("strune"));
console.log(tjekBrugernavn("STRUNE"));  
console.log(tjekBrugernavn("sTrUnE"));  
console.log(tjekBrugernavn("strunE"));  
console.log(tjekBrugernavn("Strunee"));  

console.log("Loops - Arrays og andre datatyper")

console.log("Opgave 1. Lav et program som summere følgende array, uden brug af Aggregat Funktioner:")

talrække = [0, 12, 0, 22, 300, 4, 5];

sum = 0;
for (let i = 0; i < talrække.length; i++) {
    sum += talrække[i];
}

console.log("Summen af talrækken er:", sum);

console.log("Opgave 2. Lav et program som skriver alle værdierne i dette array, ved brug af foreach:")

talrække = [0, 12, 0, 22, 300, 4, 5];

talrække.forEach(function(tal) {
    console.log(tal);
});

console.log("Opgave 3. Lav et program som returnere indexet af det højeste tal, altså giver dens placering i begge disse arrays")  

function findIndexOfMax(array) {
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

let talrække1 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let talrække2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122];

console.log("Indexet af det højeste tal i talrække1 er:", findIndexOfMax(talrække1));
console.log("Indexet af det højeste tal i talrække2 er:", findIndexOfMax(talrække2));

console.log("Opgave 4. Lav et program som tæller hvor mange gange 12, står i den her array:")   

talrække = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];

let tæller = 0;
for (let i = 0; i < talrække.length; i++) {
    if (talrække[i] === 12) {
        tæller++;
    }
}

console.log("Tallet 12 forekommer", tæller, "gange i talrækken.");

console.log("Opgave 5. Lav et program som tæller, hvor mange værdier som er positive i dette array: (0 er ikke positiv i denne opgave)")

 talrække = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12];

tæller = 0;
for (let i = 0; i < talrække.length; i++) {
    if (talrække[i] > 0) {
        tæller++;
    }
}

console.log("Antallet af positive værdier i talrækken er:", tæller);

console.log("Opgave 6. Lav et program som finder gennemsnittet af følgende array og alle andre arrays bestående af tal uden brug af Aggregat Funktioner:")

talrække = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];

sum = 0;
for (let i = 0; i < talrække.length; i++) {
    sum += talrække[i];
}

gennemsnit = sum / talrække.length;

console.log("Gennemsnittet af talrækken er:", gennemsnit);

console.log("Opgave 7. Lav et program som finder variansen af følgende array og alle andre arrays bestående af tal uden brug af Aggregat Funktioner:")

talrække = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];

// Trin 1: Find middelværdien (gennemsnittet)
sum = 0;
for (let i = 0; i < talrække.length; i++) {
    sum += talrække[i];
}
gennemsnit = sum / talrække.length;

// Trin 2: Find summen af de kvadrerede afvigelser fra middelværdien
let sumOfSquaredDeviations = 0;
for (let i = 0; i < talrække.length; i++) {
    let deviation = talrække[i] - gennemsnit;
    sumOfSquaredDeviations += deviation * deviation;
}

// Trin 3: Find variansen
let varians = sumOfSquaredDeviations / talrække.length;

console.log("Variansen af talrækken er:", varians);

console.log("Opgave 8. Ved brug af object formatet i JS, lav objekter på følgende måde: ")

const person1 = {
    firstName: "Anders",
    lastName: "Andersen",
    age: 29,
    eyeColor: "grøn"
  };
  
  const person2 = {
    firstName: "Mads",
    lastName: "Madsen",
    age: 32,
    eyeColor: "blå"
  };
  
  const person3 = {
    firstName: "Han",
    lastName: "Hansen",
    age: 55,
    eyeColor: "brun"
  };
  
  function checkAndPrint(person) {
    const validEyeColors = ["blå", "grøn", "rød"];
    
    if (person.age > 30 && validEyeColors.includes(person.eyeColor)) {
      console.log(person.firstName, person.lastName);
    }
  }
  
  checkAndPrint(person1);
  checkAndPrint(person2);
  checkAndPrint(person3);

  console.log("Opgave 9. Lav et program, som skriver følgende i konsollen. ")

  const linjer = 5;

  // Første loop for den stigende del (dvs. *, **, ***)
  for (let i = 1; i <= Math.ceil(linjer / 2); i++) {
      console.log('*'.repeat(i));
  }
  
  // Andet loop for den faldende del (dvs. **, *)
  for (let i = Math.floor(linjer / 2); i >= 1; i--) {
      console.log('*'.repeat(i));
  }
  
  console.log("Opgave 10. Ved brug af object formatet i JS, lav et objekt på følgende måde: ")  

  const object = {
    array1: [2, 3, 19, 2, -1, -9, 10, 33],
    array2: [3, 57, -8, 2, -21, -10, 11, 32],
    array3: [100, -100, 200, -200, 10]
};

function findGennemsnit(arr) {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

let maxGennemsnitArray = '';
let maxGennemsnitValue = -Infinity;

for (let key in object) {
    let gennemsnit = findGennemsnit(object[key]);
    if (gennemsnit > maxGennemsnitValue) {
        maxGennemsnitArray = key;
        maxGennemsnitValue = gennemsnit;
    }
}

console.log('Arrayet med det højeste gennemsnit er:', maxGennemsnitArray);

function findVarians(arr) {
    const gennemsnit = findGennemsnit(arr);
    return arr.reduce((sum, val) => sum + (val - gennemsnit) ** 2, 0) / arr.length;
}

let minVariansArray = '';
let minVariansValue = Infinity;

for (let key in object) {
    let varians = findVarians(object[key]);
    if (varians < minVariansValue) {
        minVariansArray = key;
        minVariansValue = varians;
    }
}

console.log('Arrayet med den laveste varians er:', minVariansArray);




