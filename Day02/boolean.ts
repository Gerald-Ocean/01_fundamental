// Boolean : data yang hanya memiliki 2 nilai, yaitu true atau false 
let isActive1: boolean = true; // kalo boolean langsung true tanpa symbol apapun
let isDeleted: boolean = false;

// cara menghasilkan nilai boolean 
// 1. Berdasarkan tipe data lain 
// (dibagi jadi) 2 TRUTHLY & FALSY
// TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(12));
console.log(Boolean(-12));
console.log(Boolean(true));
console.log(Boolean([]))
console.log(Boolean ( [1, 2, 0]));
console.log(Boolean({}));
console.log(Boolean({ name: "Gerald"}));

// FALSY 
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

// 2. Comparison Operator : >, <, >=, <=, ==, ===
let valueA: number = 10;
let valueB: number = 5;

console.log(valueA > valueB);
console.log(valueA < valueB);
console.log(valueA <= 10);
console.log(valueB >= 5);
console.log(valueB != 5);
// console.log(valueB == "5");
// biasakan pakai --> console.log(valueB === "5");

// 3. Logical Operator : AND (&&), OR (||), NOT(!)
// AND : akan menghasilkan nilai TRUE jika antar nilai yang dibandingkan semua bernilai true
// contoh AND 
console.log(Boolean("ABC") && Boolean(2)); 
console.log(Boolean("ABC") && Boolean(0) && true);
console.log(valueA > 9 && valueB < 6)

// OR : akan menghasilkan nilai TRUE jika salah satu data bernilai true
console.log(Boolean(" ") || Boolean(0));
console.log(Boolean("") || Boolean(0));
console.log(Boolean("") || Boolean(0) || true);

// NOT : membalikan nilai 
console.log(!Boolean(valueA));
console.log(!(valueA === 10) || valueB === 5);


