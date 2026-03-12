
let school = "Cydeo";
console.log(school);
console.log(school.length);
console.log(school.toUpperCase());
console.log(school.toLowerCase());
console.log(school.charAt(0));
console.log(school[0]); // same as charAt(0)
console.log(school.charAt(3));
console.log(school.charAt(5));
  //returns empty string if index is out of range

  for (let i = 0; i < school.length; i++) {
    console.log(school.charAt(i));
  }
  console.log("------------------------------");

let expectedResult = "JavaScript";
let actualResult = "javaScript";

console.log(expectedResult === actualResult);
  //false, because of case sensitivity

console.log(expectedResult.toLowerCase() === actualResult.toLowerCase());
  //true, because we are comparing in lowercase

//console.log(expectedResult.equalsIgnoreCase(actualResult));
  //this will not work, because equalsIgnoreCase is not a method in JavaScript

let str = "python python";

str = str.replace("python", "javascript");
console.log(str);
str = str.replace(/python/g, "javascript");
  //this will replace all occurrences of "python" with "javascript"
console.log(str);

let email = "john.doe@example.com";
let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));
console.log(domain);

let employeeName = "John Doe";
let employeeSalary = 110_000;

console.log(`My name is ${employeeName} and my salary is $${employeeSalary}`);