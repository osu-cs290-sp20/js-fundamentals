console.log("Hello world!");

var x = 16;
console.log("== typeof(x):", typeof(x));

x = "some string";
console.log("== typeof(x):", typeof(x));

console.log("\n========================");
console.log("== Numbers");
console.log("========================");

var y = 16.128;
console.log("== typeof(y):", typeof(y));

console.log("== 9 / 5:", 9 / 5);

console.log("\n========================");
console.log("== Comparisons");
console.log("========================");

console.log("== 2 == 2:", 2 == 2);
console.log("== 2 == 3:", 2 == 3);
console.log("== 2 == '2':", 2 == '2');
console.log("== 2 == 2.0:", 2 == 2.0);
console.log("== 2 == '2.0':", 2 == '2.0');

console.log("== 2 === '2':", 2 === '2');
console.log("== 2 === 2.0:", 2 === 2.0);
console.log("== 2 === '2.0':", 2 === '2.0');
console.log("== 2 !== 3:", 2 !== 3);

console.log("== 2 < 3:", 2 < 3);
console.log("== 2 <= 3:", 2 <= 3);

console.log("\n========================");
console.log("== Strings");
console.log("========================");

var str1 = "This is a string.";
var str2 = 'This is also a string.';
var str3 = 'This is a "string inside a string".';

var longerString = str1 + str2;
console.log("== longerString:", longerString);
console.log("== longerString + 1234:", longerString + 1234);
var anotherStr = str1 + 5678;
console.log("== anotherStr:", anotherStr);

console.log("== str1.length:", str1.length);
console.log("== str1[5]:", str1[5]);
str1[5] = 'x';
console.log("== str1:", str1);
