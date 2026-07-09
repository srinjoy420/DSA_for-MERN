let str = "swiss";
let char = {};

// Step 1: Count the frequency of each character
for (let key of str) {
    char[key] = (char[key] || 0) + 1;
}

console.log("Character Counts:", char); 
// Output: { s: 3, w: 1, i: 1 }

// Step 2: Find the first character with a count of 1
for (let key of str) {
    if (char[key] === 1) {
        console.log("First non-repeating character:", key); 
        break; // Stop the loop immediately after finding the first one
    }
}