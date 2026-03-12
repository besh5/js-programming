
let elements = ["Java", 20, 2.5, true, "Cydeo"];
console.log(elements);

console.log("------------------------------------");

let students = ["Vova", "John", "Jane", "Emily"];
console.log(students);

for (let student of students) {
  console.log(student);
}

console.log("------------------------------------");

let employees = ["Alice", "Bob", "Charlie", "David"];
console.log(employees);

employees[0] = "Eve"; // updates the first element of the array to "Eve"
console.log(employees);

employees.push("Frank"); // adds "Frank" to the end of the array
console.log(employees);
employees.unshift("Grace"); // adds "Grace" to the beginning of the array
console.log(employees);

employees.pop(); // removes the last element of the array
console.log(employees);
employees.shift(); // removes the first element of the array
console.log(employees);

console.log("------------------------------------");

