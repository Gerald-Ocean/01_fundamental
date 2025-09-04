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
console.log
    idRupiah.toLocaleString("id-ID", {
        style : "currency",
        currency : "IDR",
        minimumFractionDigits : 0
    } ) 
console.log(`Rp. ${idRupiah.toLocaleString("id-ID")},00`);

// Soal 5 
// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
const originalString: string = "Hello world"
const stringToRemove: string = "ell"
const newString: string = originalString.replace(stringToRemove, "o")
console.log(newString);

const num1: number = 42 
const num2: number = 27
if (num1 < num2) {
    console.log(num2);
} else {
    console.log(num1);
    
} 