// Variable : Penampung data 
/** 
 * Susunan penulisan variable --> keywordVariable namaVariable = data;
 * initialisation keyword dan nama variable harus ada, declaration belum ada 
 * keywordVariable : var, let, const
 * aturan namaVariable : 
 * - harus diawali dengan huruf atau diawali dgn symbol _ atau $
 * - jika nama variable terdiri dua suku kata atau lebih. maka disusun dengan mode
 * camelCase atau snake_case
 * - sesuaikan nama variable dengan konteks data yang ingin disimpan
 * data : nilai yang ingin disimpan kedalam variable sesuai tipe data yang tersedia di JS
 * tipe data : -
 * -primitive:(string, number, boolean, null, undefined)
 * - non primitve / reference data type : array, object
 */ 
 

// Variable declaration
var message;
console.log(message); undefined

// Variable initialitation
var nama = "Gerald";
console.log(nama);  'Gerald'

// Keyword var : redeclare, reassign
var city = "Solo";
// redeclare
var city = "Bandung";
console.log(city)
// reassign
city = "Semarang";

// Keyword lt : non-redeclare, reassign
let age = 40;
// non-redeclare 
// let age = 20;
// reassign
age = 20;
console.log(age);

// Keyword const : non-redeclare, non=reassign
const PI = 3.14;
// non-redeclare
// const PI = 4.15;
// non-reassign
// PI = 5.16;
console.log(PI)

// Data Type : 
// Primitive 
let region = "East Java"; // string
let weight = 75; // number (integer)
let distance = 10.5 // number (float)
const Nodata = null; // null 
const undefinedData = undefined; // undefined
const isActive = true; //boolean 
// Non-primitve
const products = ["Apel", "Jeruk"]; //array
const job = {
    position: "coder",
    salary: 4000000,
} //object

// Memeriksa tipe data suatu variable
console.log(typeof region);
region = 40;
console.log(typeof region);
console.log(typeof isActive);
