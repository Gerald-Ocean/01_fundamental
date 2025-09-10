/** 
 * Function : sekumpulan program yang disatukan/dibungkus jadi satu untuk mengerjakan proses tertentu.
 *            selain itu, function juga ditujukan untuk mempermudah penggunaan kode berulang.
 *            (bersifat reusable/modular)
 *            untuk pakai function, pastikan function sudah dibuat
 *Kategori function : Built-in Function dan User-defined Function
 * built-in : function yang dipakai dengan yg sudah ada di javascript
 * user-defined: function yang dipakai oleh user tersebut
 * Aturan penulisan User-defined Function: 
 *      - Nama function mengikuti aturan nama variable.
 *      - Function bisa menerima nilai dinamis dari luar function melalui parameter/argument untuk diolah didalam functionnya.
 *      - Jenis penulisan function ada 3, yaitu : Declarative Function, Function Expression dan Arrow Function
 *      - Function biasanya menghasilkan nilai output yang dikeluarkan melalui "return"
 */

 // Without Function 
 // case : membuat code penjumlahan 
 // INPUT : dua variable yang menampung data untuk dijumlahkan
let angkaA1: number = 10; 
let angkaB1: number = 12;
 // PROCESS : menentukan rumus penjumlahan 
const hasil: number = angkaA1 + angkaB1;
 // OUTPUT : menghasilkan nilai dari process penjumlahan, yang kemudian ditampilkan pada log
console.log(hasil);

// With Function / Convert to Function 
/**
 * Declarative Function
 * 
 * Aturan penulisannya tanpa parameter
 * function namaFunc(){
 *     // taskcode
 * }
 * 
 * Aturan penulisan dengan parameter:
 * function namaFunc(parametrA, parametrB,...){
 *      // taskcode
 * }
 */

// Create Function

// Function WITHOUT PARAMETER
function penjumlahan() {
    // input
    let angkaA1: number = 15;
    let angkaB1: number = 3;

    // process
    const hasil: number = angkaA1 + angkaB1;

    // output
    console.log(hasil);
    return hasil;
}

// Call Function 
penjumlahan;

// Execute Function 
penjumlahan();

// Menampilkan hasil dari function
const hasilFunction = penjumlahan();
console.log(hasilFunction);

// Function WITH PARAMETER (ketika sumber data itu dari satu lokasi function tersebut)
function penjumlahanParameter(_angkaA: number, _angkaB: number){
    if(_angkaA && _angkaB) {
   const hasil : number = _angkaA + _angkaB;
   return hasil;
} else {
    return "Ada parameter yang kosong"
}
}

// Execute in log
console.log(penjumlahanParameter(14,8));
console.log(penjumlahanParameter(3, 78));
// console.log(penjumlahanParameter()); // jika tidak diisi parameter maka akan fail ->

// Exercise : Buat function calculator, yang setiap kali di execute angka dan operasi perhitungannya beda2)
function calculator(angka1: number, angka2: number, operasi: string) {
    if (operasi === "+") {
        return angka1 + angka2;
    } else if (operasi === "-") {
        return angka1 - angka2;
    } else if (operasi === "*") {
        return angka1 * angka2;
    } else if (operasi === "/") {
        return angka1 / angka2;
    } else {
        return "Operasi tidak valid!";
    }
}

// Test calculator
console.log(calculator(25, 5, "+"));  // 30
console.log(calculator(25, 5, "-"));  // 20
console.log(calculator(25, 5, "*"));  // 125
console.log(calculator(25, 5, "/"));  // 5


