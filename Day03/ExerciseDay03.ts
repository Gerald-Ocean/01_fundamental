// Soal 1 
// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

// INPUT
const numberX: number = 9 
for (let index = 0; index <= numberX; index++) {
    console.log(`${numberX} x ${index + 1}`);
}
console.log(``);

// Soal 2 
// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome
const string1: string = "madam"

let isPalindrome: boolean = true;
for (let i = 0; i <= string1.length / 2; i++) {
    if (string1[i] != string1[string1.length - 1 - i])
        isPalindrome = false;
    break;
}
const result3: string = isPalindrome ? `${string1} is palindrome` : `${string1} -> not palindrome`

console.log(result3);

// Soal 3 
// Write a code to convert centimeter to kilometer.
//○ Example : 100000 → “1 km

const centi1: number = 100000;
const kilo1 = centi1 - 99999;
console.log(`${kilo1} km`);

// Soal 4
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
let idRupiah: number = 1000;
console.log(idRupiah.toString());
console.log(idRupiah.toLocaleString("id-ID"));
console.log(
    idRupiah.toLocaleString("id-ID", {
        style : "currency",
        currency : "IDR",
        minimumFractionDigits : 0
    })
); 
console.log(`Rp. ${idRupiah.toLocaleString("id-ID")},00`);

// Soal 5 
// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
const originalString: string = "Hello world"
const stringToRemove: string = "ell"
const newString: string = originalString.replace(stringToRemove, "")
console.log(newString);

// Soal 6 
// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World"
let originalString1: string = "hello world"
let newString2: string = ""
let lastChar: string = ""
for(let index: number = 0; index < originalString1.length; index++){
    const char1: string = originalString1[index]
    if (index === 0 || lastChar === " " ){ 
        newString2 += char1.toUpperCase()
    } else {
        newString2 += char1
    }
    lastChar = char1 
}
console.log(newString2)

// Soal 7 
// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let brownFox: string = "The QuiCk BrOwN Fox"
let brownFox1: string = ""
for(let index: number = 0; index < brownFox.length; index++){
   const Fox1: string = brownFox[index];
   if (Fox1 === Fox1.toUpperCase()) {
       brownFox1 += Fox1.toLowerCase();
   } else {
       brownFox1 += Fox1.toUpperCase();
   }
}
console.log(brownFox1);

// Soal 8
// Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42
const num1: number = 42 
const num2: number = 27
if (num1 < num2) {
    console.log(num2);
} else {
    console.log(num1);
    }
console.log(`${num1} is the largest`);

// Soal 9
// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
const number1: number = 42 
const number2: number = 27
const number3: number = 18 

if (number1 <= number2 && number1 <= number3) {
    if (number2 <= number3) {
        console.log(`${number1}, ${number2}, ${number3}`);
    } else {
        console.log(`${number1}, ${number3}, ${number2}`);
    }
} else if (number2 <= number1 && number2 <= number3) {
    if (number1 <= number3) {
        console.log(`${number2}, ${number1}, ${number3}`);
    } else {
        console.log(`${number2}, ${number3}, ${number1}`);
    }
} else {
    if (number1 <= number2) {
        console.log(`${number3}, ${number1}, ${number2}`);
    } else {
        console.log(`${number3}, ${number2}, ${number1}`);
    }
} 
console.log(`${number3}, ${number2}, ${number1}`);

// Soal 10
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1
let hello: string = "hello"
if (typeof hello === "string") {
    console.log(1);
} else if (typeof hello === "number") {
    console.log(2);
} else {
    console.log(3);
}
console.log(1);

// Soal 11
// Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

let apel : string = "An apple a day keeps the doctor away"
let apelBaru : string = ""
for (let index: number = 0; index < apel.length; index++){
    let charApel: string = apel[index]
    
    if (charApel === "A" || charApel === "a") {
        apelBaru += "*"
    } else {
        apelBaru += charApel
    }
}
console.log(apelBaru);

