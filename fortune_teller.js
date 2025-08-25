let fortune1 = "You will find your love today.";
let fortune2 = "You will get unexpected present from your admirer.";
let fortune3 = "Be cautious with your neighbors.";
let fortune4 = "You will get unexpected money tomorrow.";
let fortune5 = "You will meet today your old friend you haven't met long ago.";
let randomNumber = Math.floor(Math.random() * 4) + 1;

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
  console.log(selectedFortune);
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
  console.log(selectedFortune);
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
  console.log(selectedFortune);
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
  console.log(selectedFortune);
} else {
  selectedFortune = fortune5;
  console.log(selectedFortune);
}
