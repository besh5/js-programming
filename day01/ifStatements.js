let score = 50;

if (score >= 60) {
  console.log("You passed the exam!");
} else {
  console.log("You failed the exam.");
}

console.log("----------------------------------------");

let number = 1000;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

console.log("----------------------------------------");

score = 600;
if (score > 100 || score < 0) {
  console.log("Invalid score. Score must be between 0 and 100.");
  if (score >= 60) {
    console.log("You passed the exam!");
  } else if (score < 60 && score >= 0) {
    console.log("You failed the exam.");
  }
} else {
  console.log("Invalid score. Score must be between 0 and 100.");
}
