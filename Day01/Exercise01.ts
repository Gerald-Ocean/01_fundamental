// Soal 1 : write a code to find area of rectangle rectangleLength: 5,rectangleWidth: 3
// note : penulisan sebelum rectangle (satu, dua etc) supaya tidak terpanggil lagi 
// INPUT
const saturectangleLength: number = 5;
const saturectangleWidth: number = 3; 
// PROCESS
const rectangleArea : number = saturectangleLength * saturectangleWidth;
// OUTPUT
console.log(`The area of the rectangle is ${rectangleArea}`);  

// Soal 2 : Write a code to find perimeter of rectangle 
// ○ Example : length = 5, width = 3
// ○ Output : 16
// INPUT
const duarectangleLength: number = 5;
const duarectangleWidth: number = 3;
// PROCESS 
const rectanglePerimeter : number = 2 * (duarectangleLength + duarectangleWidth);
// OUTPUT
console.log(`The perimeter of rectangle is ${rectanglePerimeter}`); 

// Soal 3 : Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539
// INPUT 
const radius: number = 5;
// PROCESS 
const diameter : number = 2 * radius;
const circumference : number = 2 * radius * Math.PI;
const area :  number = Math.PI * radius * radius;
// OUTPUT 
console.log(`Diameter = ${diameter}`); // 10
console.log(`Circumference = ${circumference}`);
console.log(`area = ${area}`);

// Soal 4 : Write a code to find angles of triangle if two angles are given.
//○ Example : a = 80, b = 65
// Output : 35
// INPUT 
const angleA : number = 80;
const angleB : number = 65;
// PROCESS 
const angleC : number = angleA - angleB;
// OUTPUT 
console.log(`one of the angle of the triangle is ${angleC}`);

// Soal 5 : Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day'
// Example (1)
// INPUT 
const totalDays1: number = 400;
// PROCESS 
const years1: number = Math.floor(totalDays1 / 365); 
const remainingDaysAfterYears1: number = totalDays1 % 365;
const months1: number = Math.floor(remainingDaysAfterYears1 / 30);
const days1: number = remainingDaysAfterYears1 % 30;
// OUTPUT 
console.log(`${totalDays1} days = ${years1} year - ${months1} months ${days1} - days`);

// Example (2)
// INPUT 
const totalDays2: number = 366
// PROCESS 
const years2: number = Math.floor(totalDays2 / 366);
const remainingDaysAfterYears2: number = totalDays2 % 365;
const months2: number = Math.floor(remainingDaysAfterYears2 / 30);
const days2: number = remainingDaysAfterYears2 % 30;
// OUTPUT
console.log(`${totalDays2} days = ${years2} years - ${months2} months - ${days2} days`); 

// Soal 6 : Write a code to get difference between dates in days.
// ○ Example : date1 = 2022-01-20, date2 = 2022-01-22
// ○ Output : 2
// INPUT 
const date1: string = "2022-01-20";
const date2: string = "2022-01-22";
// PROCESS
const firstDate: Date = new Date(date1);
const secondDate: Date = new Date(date2);
const differenceInMs: number = secondDate.getTime() - firstDate.getTime();
const differenceinDays: number = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
// OUTPUT 
console.log(`The difference between ${date1} and ${date2} is ${differenceinDays}`);
