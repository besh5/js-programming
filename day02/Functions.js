/*
 * greetings - a simple function that outputs a welcome message
 *
 * When called, this function logs two lines to the console:
 *   1. A basic greeting word
 *   2. A more detailed welcome message indicating entry into JavaScript
 *
 * @returns {void} No value is returned; the function performs console output only.
 */
function greetings() {
  console.log("hello");
  console.log("Welcome to JS");
}

greetings();

console.log("------------------------------");

/*
 * displayName - logs a personalized greeting using the provided name.
 *
 * The function accepts a single parameter `name` and outputs a message
 * of the form "Hello <name>" to the console. If no name is passed, it
 * defaults to "Unknown".
 *
 * @param {string} [name="Unknown"] - The name to include in the greeting.
 * @returns {void} This function does not return a value; side effects only.
 */
function displayName(name = "Unknown") {
  console.log(`Hello ${name}`);
}

displayName("Alice");
displayName("Bob");
displayName("Charlie");
displayName();

console.log("------------------------------");

function addNumbers(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}
let result = addNumbers(5, 10);

console.log("Result: " + result);
result = addNumbers(5, 10, 15);
console.log("Result: " + result);

console.log("------------------------------");


