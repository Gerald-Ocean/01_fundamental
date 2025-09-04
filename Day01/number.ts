// Number : tipe data angka yang bisa dihitung
let jarak : number = 1500; // integer
let berat : number = 90.25; // float / decimal

// Arithmetic : +, -, *, /, %
let angkaA: number = 12;
let angkaB: number = 10;

const result: number = angkaA + angkaB;
console.log(result);
console.log(angkaA - angkaB);
console.log(angkaA * angkaB);
console.log(angkaA / angkaB);
console.log(angkaA % angkaB); // modulus/modulo --> sisa hasil bagi
console.log(angkaA % 2); // genap / ganjil
console.log(angkaB % 2); // genap / ganjil

// Increment 
let count : number = 0;
count++; // Postfix --> count = count + 1
console.log(count++);
++count; // Prefix --> count = count + 1
console.log(++count);

// Decrement
let countB: number = 10
countB--; 
--countB;
console.log(countB);

// Math Object
const myPI : number = Math.PI;
console.log(Math.PI) 

// Pembulatan
let angkaC: number = 25.4;
console.log(Math.round(angkaC));
console.log(Math.ceil(angkaC));
console.log(Math.floor(angkaC));

// MIN and MAX
console.log(Math.min(12, 4, 5, 123, 456, 0, -1));
console.log(Math.max(12, 4, 5, 123, 456, 0, -1));

//Random Value 0-1
console.log(Math.random());

//Parsing data
let angkaD: string = "123.456";
console.log(parseInt(angkaD));
console.log(parseFloat(angkaD));

let price: number = 52500;
console.log(price.toString());
console.log(price.toLocaleString("id-ID"))
console.log
    price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    })

