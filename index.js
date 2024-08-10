// Prompt the user for a number and cast it to a number [1.2 - 2 pts]
let num = parseInt(prompt("Enter a number: "))

// Write a JavaScript program that uses a for loop to print all odd numbers from 1 to the number the user typed in [2.3 - 4 pts]

for (let odd = 1; odd <= num; odd++) {
  if (odd % 2 == 1) {
    console.log(odd)
  }
}
