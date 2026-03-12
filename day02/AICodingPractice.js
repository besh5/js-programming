// Create an array of strings and add 10 employee
// names to it.
let employees = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Davis",
  "Diana Evans",
  "Ethan Brown",
  "Fiona Wilson",
  "George Clark",
  "Hannah Lee",
  "Ian Miller",
  "Julia Taylor",
];

let employeeRoles = [
  "Manager",
  "Developer",
  "Designer",
  "Analyst",
  "Engineer",
  "Coordinator",
  "Specialist",
  "Technician",
  "Consultant",
  "Administrator",
];
// set first employee to "John Doe"
employees[0] = "John Doe";

//set last employee to "Jane Smith"
employees[employees.length - 1] = "Jane Smith";

console.log("--------------------------------");

// display all the elements in the employees array in reverce erder
for (let i = employees.length - 1; i >= 0; i--) {
  console.log(employees[i]);
}

console.log("--------------------------------");

let numbers = [100, 200, 300, 400, 500, 5, 6, 7, 8, 9, 10, -22, 220000];
// write a program that can display the max and min numbers from the numbers array
// do not use any biuld-in sort or max/min functions
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Max number: " + max);
console.log("Min number: " + min);

console.log("--------------------------------");

//write a program that can sort the numbers array in ascending order withour using any built-in sort function
for (let i = 0; i < numbers.length - 11; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      // swap
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log("Sorted numbers: " + numbers);
 //changes via github
