/**
 * Array : Tipe data yang berisi sekumpulan data. 
 * (untuk menampung data2 secara sekaligus)
 * data yang disimpan memiliki tipe yang sama. 
 * tiap data pada array memiliki alamat index, yang dimulai dari index ke = 0
 * Tujuan : untuk mempermudah pengelolaan data.
 * Aturan penulisan: 
 * keywordVariable : nameVariable = [data1, data2, ... dst]
 * -- Example : let numbs: number [] = [1, 2, 3, 4];
 * -- Example : let abjad: string [] = ["a", "b", "c", "d"];
 * -- Example : let student: (string | number)[] = ["Gerald", 20]; // union types
 * -- Example : let product: [string, number, number, boolean] = ["TV, 12, 14000000", true] // tuples types array 
 */

// Case without array : kita ingin mencatat kumpulan nama produk
let baju : string = "Baju";
let topi: string = "Topi";

// With Array:
let productsName: string [] = ["Baju", "Topi", "Handphone"];
console.log(productsName);
console.log(typeof productsName);

// specific access 
console.log(productsName[0]); // Harus dalam bentuk number / string

// define array with Array constructor 
let productsPrice: number[] = new Array (35000, 25000, 150000);
console.log(productsPrice);
console.log(productsPrice[1])

// Mengganti salah satu data array menggunakan konsep re-assign
productsPrice[1] = 18000;
console.log(productsPrice);

// Access all data in array 
console.log(productsName[0]);
     console.log(productsName[1]);
    console.log(productsName[2]);
    
// with loop 
let printList: string = "";
for (let index: number = 0; index < 3; index++){
 printList += `${index + 1}. ${productsName[index]} \n`;
}
console.log(printList);
/**
 * 1. Baju
 * 2. Topi
 * 3. Handphone
 */

// Array function 
// array.push(newData) : menambahkan data baru ke dalam array
productsName.push("Celana");
console.log(productsName);

// array.pop() : menghapus data terakhir pada array
productsName.pop();
console.log(productsName);

// array.unshift(newData) : menambahkan data baru pada awal array
productsName.unshift("Sandal")
console.log(productsName);

// array.shift() : menghapus data pertama pada array
productsName.shift();
console.log(productsName);

// array.splice() : untuk menghapus data pada index tertentu
// contoh array.splice(pilihanIndex, jumlahYangDihapus)
productsName.splice(1, 1); // menghapus 1 data pada index ke 1
console.log(productsName);

// array.indexOf(data) : untuk mengetahui index dari data yang dicari
console.log(productsName.indexOf("Handphone")); // 1

// array.reverse() : membalikkan urutan data pada array
productsName.reverse();
console.log(productsName);

// array.sort() : mengurutkan data pada array (berdasarkan urutan abjad / angka) (berdasarkan kode ASCII)
productsName.sort();
console.log(productsName);
 
const abjad:string[]= ["A", "B", "c", "C", "a", "Z", "b"];
abjad.sort();
console.log(abjad);

// for...of : access value in array without index
for (const value of productsName){
    console.log(value);
}

// Penggabungan data array 
const studentsA: string[]=["Andre", "Edo"];
const studentsB: string[]=["Zafran", "Beni"];
// Cara 1 : menggunakan array function concat
const students: string[] = studentsA.concat(studentsB, "Ruben"); // penambahan Ruben
console.log(students)

// Cara 2 : menggunakan spread operator
const studentList: string[] = [...studentsA, ...studentsB];
console.log(studentList);

// Array destructure : cara untuk mengeluarkan nilai suatu array untuk menjadi variabel yg berdiri sendiri
const product: [string, number, number, boolean] = ["TV", 12, 1400000, true];
let [namaProduk, stok, harga] = product;
console.log(namaProduk);
console.log(stok);
console.log(harga);

// Array 2 dimensi : didalam array ada array 
const products: [string,number, number][] = [
    ["Laptop", 12, 3560000],
    ["Printer", 20, 4500000],
    ["Keyboard", 4, 120000],
];
console.log(products)

// cara akses : array[indexArrayLuar] [indexArrayDalam]
console.log(products[1][0]);

// Exercise
// code
let productList: string = "";
for (let i = 0; i < products.length; i++) {
    productList += `${i + 1}. ${products[i][0]} tersedia ${products[i][1]}pcs, Rp ${products[i][2].toLocaleString('id-ID')},00\n`
}
console.log(productList);

// code 2 
let printProduct: string = ""
for (let index = 0; index < products.length; index++) {
    printProduct += `${index + 1}. ${products[index][0]} tersedia ${products[index][1]}pcs, Rp ${products[index][2].toLocaleString("id-ID")},00\n`;
}

/**
 * 1. Laptop tersedia 12pcs, Rp 3.560.000,00
 * 2. Printer tersedia 20pcs, Rp 450.000,00
 * 3. Keyboard tersedia 4pcs, Rp 120.000,00
 */





