let array = [];
let results = [];
let expressionArray = [];

function updateInput(value) {
    let inputField = document.getElementById("exp__input");
    expressionArray.push(value);
    inputField.value = expressionArray.join('');
    console.log("Current Expression Array: ", expressionArray);
}

for (let i = 1; i <= 200; i++) {
    array.push(i); // Add numbers from 1 to 100
}

function reset() {
    document.getElementById("exp__input").value ="";
}
function back() {
    expressionArray.pop();
        document.getElementById("exp__input").value = expressionArray.join('');
}

    function check(event) {
        event.preventDefault();
        let outputElement = document.getElementById("output");
        let LHS = document.getElementById("L.H.S").value;  
        LHS = parseFloat(LHS); // Convert LHS to a float
    
        if (isNaN(LHS)) {
            alert("Invalid number, please enter a valid number.");
            return;
        }
    
        results = {}; // Reset results
        let epsilon = 1e-6; // Define tolerance for floating-point comparison
    
        if (expressionArray.includes('x') && expressionArray.includes('y')) {
            // Loop through array to find pairs of (x, y)
            for (let i = 0; i < array.length; i++) {
                results[`temp${i}`] = []; // Store results for each 'i'
    
                for (let j = 0; j < array.length; j++) { 
                    let x = array[i];
                    let y = array[j];
    
                    let expression = expressionArray.join('')
                        .replace(/x/g, x)
                        .replace(/y/g, y);
    
                    let result = eval(expression); 
    
                    // Compare result with LHS using epsilon tolerance
                    if (Math.abs(result - LHS) <= epsilon) { 
                        results[`temp${i}`].push({ x, y });
                    }
                }
            }
    
        } else {
            if (!results["singleVar"]) {
                results["singleVar"] = [];
            }
            for (i = 0; i < array.length; i++) {
                let x = array[i];
                let expression = expressionArray.join('').replace(/x/g, x);
    
                let result = eval(expression);
                if (Math.abs(result - LHS) <= epsilon) { 
                    results["singleVar"].push(x);
                }
            }
        }
    
        // Filter out empty result arrays
        let nonEmptyResults = Object.entries(results).filter(([key, value]) => value.length > 0);
    
        // Check if any results were found
        if (nonEmptyResults.length === 0) {
            outputElement.innerText = `No solutions found for f(x, y) = ${LHS}`;
        } else {
            // Format the output
            let formattedResults = `Solutions found for f(x, y) = ${LHS}\nnumber of solutions: ${nonEmptyResults.length};
            \n`;
    
             nonEmptyResults.forEach(([key, value]) => {
                value.forEach(pair => {
                    if (pair.x !== undefined && pair.y !== undefined) {
                        formattedResults += `x = ${pair.x}, y = ${pair.y}\n`;
                    } else if (pair.x !== undefined) {
                        formattedResults += `x = ${pair.x}\n`;
                    }
                });
            });

            outputElement.innerText = formattedResults;
        }
    
        // Debugging
        console.log(results);
    }
    

document.getElementById("exp__input").addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault();
        expressionArray.pop();
        this.value = expressionArray.join('');
    }
});

function plus() { updateInput('+'); }
function minus() { updateInput('-'); }
function divide() { updateInput('/'); }
function multiply() { updateInput('*'); }
function mod() { updateInput('%'); }
function exponent() { updateInput('^'); }
function brackets_l() { updateInput('('); }
function brackets_r() { updateInput(')'); }
function variable_x() { updateInput('x'); }
function variable_y() { updateInput('y'); }
let functions = {};

for (let i =0; i <10; i++) {
    functions[`number_${i}`] = function() {
        updateInput(`${i}`);
    };
}




