

console.log("Test started");

try{
console.log(result);
} catch(error){
    console.log("Error: " + error.message);
} finally{
    console.log("This will always run");
}

console.log("Test stopped");
