

let array = [];
let results = {};

// Populating the array with values from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    array.push(i); // Add numbers from 1 to 1000
}

function check() {
    let target = prompt('Type a number for f(x, y) = xy / (x + y)');
    target = parseFloat(target); // Convert target to a float

    if (isNaN(target)) {
        alert("Invalid number, please enter a valid number.");
        return;
    }

    results = {}; // Reset results
    let epsilon = 1e-6; // Define a tolerance value for floating-point comparison

    // Loop through array to find pairs of (x, y)
    for (let i = 0; i < array.length; i++) {
        results[`temp${i}`] = []; // Create a new array to store results for each 'i'

        for (let j = i + 1; j < array.length; j++) { // Avoid repeating the same pair twice
            let x = array[i];
            let y = array[j];

            let result = (x * y) / (x + y); // Compute f(x, y) = xy / (x + y)

            // Compare result with target using the epsilon tolerance
            if (Math.abs(result - target) < epsilon) { 
                results[`temp${i}`].push({ x, y, result });
            }
        }
    }

    // Check if any results were found
    let anyResults = Object.keys(results).some(key => results[key].length > 0);
    if (!anyResults) {
        alert(`No pairs (x, y) found for f(x, y) = ${target}`);
    } else {
        alert(`Pairs found for f(x, y) = ${target}. Check console for details.`);
    }



    console.log(results); 

}
