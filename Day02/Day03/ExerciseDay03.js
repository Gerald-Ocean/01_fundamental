// Soal 1 
// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10
// INPUT
var numberX = 9;
for (var index = 0; index <= numberX; index++) {
    console.log("".concat(numberX, " x ").concat(index + 1));
}
console.log("");
// Soal 2 
// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome
var string1 = "madam";
var isPalindrome = true;
for (var i = 0; i <= string1.length / 2; i++) {
    if (string1[i] != string1[string1.length - 1 - i])
        isPalindrome = false;
    break;
}
var result3 = isPalindrome ? "".concat(string1, " is palindrome") : "".concat(string1, " -> not palindrome");
console.log(result3);
// Soal 3 
// Write a code to convert centimeter to kilometer.
//○ Example : 100000 → “1 km
var centi1 = 100000;
var kilo1 = centi1 - 99999;
console.log("".concat(kilo1, " km"));
// Soal 4
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
var idRupiah = 1000;
console.log(idRupiah.toString());
console.log(idRupiah.toLocaleString("id-ID"));
console.log;
idRupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
});
console.log("Rp. ".concat(idRupiah.toLocaleString("id-ID"), ",00"));
// Soal 5 
// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
var originalString = "Hello world";
var stringToRemove = "ell";
var newString = originalString.replace(stringToRemove, "");
console.log(newString);
