function missingNumber(arr) {
    // If an array has 7 elements and 1 is missing, 
    // the numbers go from 1 to 8 (which is arr.length + 1)
    const totalNumbers = arr.length + 1;

    for (let i = 1; i <= totalNumbers; i++) { 
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            return i; // <-- Fixed: Returns the actual missing number
        }
    }
    return -1;
}

const arr = [8, 2, 4, 5, 3, 7, 1];
console.log(missingNumber(arr)); // Outputs: 6