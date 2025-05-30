// Chap 38 to 42
// // Ques1
// function power (a, b) {
//     return a ** b;
// }
// let result = power(2, 3);
// console.log("Result:", result);
// Ques2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let year = 2024;
// if (isLeapYear(year)) {
//     console.log(year + " is a Leap Year");
// } else {
//     console.log(year + " is not a Leap Year");
// }

// Ques3
// function getS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function getArea(a, b, c){
//     let s = getS(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) *(s - c));
//     return area;
// }
// let a = 3, b = 4, c = 5;
// let area = getArea(a, b, c);
// console.log("Area of triangle is:", area)
// Ques4
// function getAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }
// function getPercentage(m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     return (total / 300) * 100;
// }
// function mainFunction(m1, m2, m3) {
//     let avg = getAverage(m1, m2, m3);
//     let perc = getPercentage(m1, m2, m3);

//     console.log("Average Marks:", avg);
//     console.log("Percentage:", perc + "%");
// }
// mainFunction(85, 90, 95);
// // Ques5
// function customIndexOf(text, char) {
//     for (let i = 0; i < text.length; i++){
//         if (text[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// let result = customIndexOf("hello", "e");
// console.log("Index:", result);
// Ques6
// function removeVowels(sentence) {
//     let result = "";
//     for (let i = 0; i < sentence.length; i++) {
//         let ch = sentence[i].toLowerCase();
//         if(ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
//             result += sentence[i]; // add only non-vowels
//         }
//     }
//     return result;
// }
// let sentence = "JavaScript is Fun";
// let noVowels = removeVowels(sentence);
// console.log("Without vowels:", noVowels);
// Ques7
// function countVowelsPairs(text) {
//     let count = 0;
//     text = text.toLowerCase();

//     for (let i = 0; i < text.length - 1; i++){
//         let pair = text[i] + text[i + 1];
//         switch (pair) {
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":
//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":
//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":
//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":
//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }
// let sentence = "Please read this application and give me gratuity";
// let result = countVowelsPairs(sentence);
// console.log("Vowel pairs found:", result);
// Ques8
// function toMeters(km) {
//     return km * 1000;
// }
// function toFeet(km) {
//     return km * 3280.84;
// }
// function toInches(km) {
//     return km * 39370.1;
// }
// function toCentimeters(km) {
//     return km * 100000;
// }
// let distance = 5;
// console.log("Distance in meters:", toMeters(distance));
// console.log("Distance in feet:", toFeet(distance));
// console.log("Distance in inches:", toInches(distance));
// console.log("Distance in centimeters:", toCentimeters(distance));
// Ques9
// function calculateOvertime(hoursWorked) {
//   let overtimeHours = hoursWorked - 40;

//   if (overtimeHours > 0) {
//     let overtimePay = overtimeHours * 12;
//     return overtimePay;
//   } else {
//     return 0;
//   }
// }
// let hours = 45;
// let pay = calculateOvertime(hours);
// console.log("Overtime Pay: Rs.", pay);
// Ques10
// function giveNotes(amount) {
//   let hundreds = Math.floor(amount / 100);
//   let remainder = amount % 100;

//   let fifties = Math.floor(remainder / 50);
//   remainder = remainder % 50;

//   let tens = Math.floor(remainder / 10);

//   console.log("100 notes:", hundreds);
//   console.log("50 notes:", fifties);
//   console.log("10 notes:", tens);
// }

// let amount = 470;
// giveNotes(amount);


