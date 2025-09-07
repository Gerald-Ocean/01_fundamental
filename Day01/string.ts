// String : data yang terdiri dari karakter huruf, symbol atau angka
// yang ditandai dengan symbol quotes ("" / '' / ``)
let namaToko: string = "SPORT STATION";
//namatoko = 20; tidak bisa karena hanya boleh diisi dengan string 

// Menggabungkan data string
let alamat:string = "Jl.Pemuda No. 40 Semarang Jawa Tengah";

// Menggabungkan data string
// Cara 1 : menggunakan operator penjumlahan +
let printToko: string = namaToko + " " + alamat;
console.log(printToko); 

// Cara 2 : Menggunakan template literal / backtick (atau ``)
printToko = `${namaToko} ${alamat}`;
console.log(printToko); 

// Fungsi bawaan tipe data 
let greeting :string = "Hello, Purwadhika Student";

// length : menghitung panjang karakter pada data string
console.log(greeting.length);

//toLowerCase() : merubah karakter jadi huruf kecil
console.log(greeting.toLocaleLowerCase());

// toUpperCase() : merubah karakter jadi huruf besar 
console.log(greeting.toUpperCase());

// includs ("data") : memastikan suatu karakter ada didalam string 
console.log(greeting.includes("Hello"));
console.log(greeting.includes("Halo"));

//split : merubah data string menjadi data array
console.log(greeting.split(" "));

// replace : mengganti kata tertentu
console.log(greeting.replace("Hello", "Halo"));
