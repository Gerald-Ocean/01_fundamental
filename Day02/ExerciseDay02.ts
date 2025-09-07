// Soal 1 Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number
// INPUT
const number01: number = 25;
const number02: number = 2;
// PROCESS
// mengecek apakah number1 itu genap atau ganjil 
const result1: string = number01 % 2 === 0 ? "even number" : "odd number";
// mengecek apakah number2 itu genap atau ganjil
const result2: string = number02 % 2 === 0 ? "even number" : "odd number";
// OUTPUT
console.log(`${number01} is ${result1}`);
console.log(`${number02} is ${result2}`);


// Soal 2
// Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number
// INPUT
const number03: number = 7;
const number04: number = 6;
// PROCESS 
// mengecek apakah number3 adalah angka prima
let isPrime1: boolean = true;
if (number03 <= 1) {
    isPrime1 = false; // angka yang kurang dari 1 maka bukan angka prima 
} else if (number03 % 2 === 0 || number03 % 3 === 0) {
    isPrime1 = false; // jika habis dibagi 2 atau habis dibagi 3 maka bukan angka prima 
}
const hasil1: string = isPrime1 ? `${number03} is a prime number` : `${number03} is not a prime number`;
// mengecek apakah number4 adalah angka prima 
let isPrime2: boolean = true;
if (number04 <= 1) {
    isPrime2 = false; // angka 
} else if (number04 % 2 === 0 || number04 % 3 === 9){
    isPrime2 = false;
}
const hasil2: string = isPrime2 ? `${number04} is a prime number` : `${number04} is not a prime number`;
// OUTPUT
console.log(`${number03} is ${hasil1}`);
console.log(`${number04} is ${hasil2}`);


// Soal 3 
//Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

// INPUT
const N1: number = 5;
const N2: number = 3;

// PROCESS
// Menghitung penjumlahan N1
let total1: number = 0;
for (let index = 1; index <= N1; index++) {
    total1 = total1 + index
    }
// OUTPUT 
console.log(total1)

// PROCESS
// menghitung penjumlahan N2
let total2: number = 0;
for (let index = 1; index <= N2; index++) {
    total2 = total2 + index
};
// OUTPUT
console.log(total2);

// Soal 4 Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
// INPUT
const N3 = 4;
const N4 = 6;
// PROCESS
// Menghitung factorial N3
let factorialN3: number = 1;
for (let index = 1; index <= N3; index++) {
    factorialN3 *= index;
}
// OUTPUT 
console.log(`${N3}! = ${factorialN3}`);

// PROCESS 
// Menghitung factorial N4
let factorialN4: number = 1;
for (let index = 1; index <= N4; index++) {
    factorialN4 *= index
} 
// OUTPUT 
console.log(`${N4}! = ${factorialN4}`)

// Soal 5 Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
// INPUT
const N: number = 15;
// PROCESS
let fib1: number = 0;
let fib2: number = 1; 
let fibN: number = fib1
for (let index = 2; index <= N; index++) {
    fibN = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibN;
}
const resultFib: string = N == 1 ? `${N} -> ${fib1}` : `${N} -> ${fibN}`
// OUTPUT
console.log(resultFib);

