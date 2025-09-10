// Conditional Statement : code yang ditujukan untuk memberikan pilihan eksekusi 
//                         program sesuai kondisi yang diberikan. 
// **
// * - if : untuk satu kondisi 
// * - if...else : untuk dua kondisi 
// * - if...else if...else : untuk 3 kondisi atau lebih 
// * - switch...case : pengkondisian dalam bentuk validasi kecocokan data

// contoh data : 
let nama1: string = "edo";
let usia: number = 20;
let email: string = "edo@gmail.com"

// IF STATEMENT
/**
 * Aturan penulisan :
 * if(condition){
 *      // taskcode
 * }
 * note : 
 * - condition : kondisi yang diinginkan berdasarkan nilai boolean yg didapat
 *               dari TRUTHLY/FALSY/COMPARISON/LOGICAL
 * - taskcode : kumpulan baris program yang ingin dijalankan ketika condition terpenuhi (nilainya true)
 */
// case : memvalidasi batas usia 
var printMessage: string = "";

if(usia > 17){
    console.log(usia);
    printMessage = "Verifikasi usia anda berhasil";
}
console.log(printMessage);

// IF...ELSE STATEMENT
/**
 * Aturan penulisan : 
 * if(condition){
 *         // taskcode
 * }
 */
usia = 17;
if(usia > 17) {
    printMessage = "Verifikasi usia anda berhasil";
}   else {
    printMessage = "Verifikasi usia anda gagal, belum cukup umur"
}    

console.log(printMessage);

// case : memeriksa data variable email apakah benar itu email
email = "edo@gmail.com";
if(email ===  "edo@gmail.com") {
    printMessage = "Email anda adalah email yang benar";
} else {
    printMessage = "Email anda adalah email yang salah"
}

console.log(printMessage); 

if(email.includes("@") && email.endsWith(".com")) {
    console.log(email.includes("@"));
    printMessage = "Email benar"
} else {
    printMessage = "Email anda salah";
}

console.log(printMessage);

// IF...ELSE IF...ELSE 
/**
 * Aturan penulisan
 * if(condition){
 *      // taskcode
 * ) else if(condition){
 *     // taskcode
 * )else}
 *     // taskcode
 * }
 */

let examValue: number = 100
let examResult: string = ""; // variable penampung output
if (examValue >= 90) {
    examResult = "A";
} else if (examValue >= 80) {
    examResult = "B";
} else if (examValue >= 70) {
    examResult = "C";
} else {
    examResult = "F";
}
console.log(examResult);

// SWITCH CASE 
/**
 * Aturan penulisan :
 * switch(variableOfValue){
 *       case "A";
 *            - taskcode
 *       case "B";
 *            - taskcode
 *       case "C";
 *            - taskcode
 *       default:
 *            - taskcode
 * }
 */

let pekerjaan: string = "Doctor";

switch (pekerjaan) {
    case "Doctor": 
        console.log("Memeriksa pasien");
        break;
    case "Coder":
        console.log("Membuat aplikasi");
        break;
    case "Driver":
        console.log("Mengendarai Mobil");
        break;
    default:
        console.log("Tidak diketahui");
}

// Ternary operator : operator yang merepresantasikan pengkondisian
/**
 * Aturan penulisan :
 * let value:string = condition ? mainValue : optionValue;
 * 
 */

// Verifkasi Usia
usia = 18;
// cara 1
let resultTernary: string = usia > 17 ? "Verifikasi usia berhasil" : "Verifikasi usia gagal";
console.log(resultTernary); 

// cara ke 2 
resultTernary = `Verifikasi usia ${usia> 17 ? "berhasil" : "gagal"}`;

