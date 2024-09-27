

let array = [];
let results = {};

// Initialize an empty array to store the parts of the expression
let expressionArray = [];




// Function to update the input and add to the array
function updateInput(value) {
    let inputField = document.getElementById("exp__input");
    
    // Add the operator or variable to the array
    expressionArray.push(value);
    
    // Update the input field to show the current expression
    inputField.value = expressionArray.join('');
    
    console.log("Current Expression Array: ", expressionArray); // Debugging the array
}





for (let i = 1; i <= 100; i++) {
    array.push(i); // Add numbers from 1 to 100
}

function check() {
    let LHS = document.getElementById("L.H.S").value;  
    LHS = parseFloat(LHS); // Convert target to a float

    if (isNaN(LHS)) {
        alert("Invalid number, please enter a valid number.");
        return;
    }

    results = {}; // Reset results
    let epsilon = 1e-6; // Define a tolerance value for floating-point comparison
    if (expressionArray.includes('x') && expressionArray.includes('y')) {
    // Loop through array to find pairs of (x, y)
    for (let i = 0; i < array.length; i++) {
        results[`temp${i}`] = []; // Create a new array to store results for each 'i'

        for (let j = 0; j < array.length; j++) { 
            let x = array[i];
            let y = array[j];

            let expression = expressionArray.join('')
            .replace(/x/g, x)
            .replace(/y/g, y);

            let result = eval(expression); 

            // Compare result with target using the epsilon tolerance
            if (Math.abs(result - LHS) <= epsilon) { 
                results[`temp${i}`].push({ x, y});
            }
        }
    }


    } else {

        if (!results["singleVar"]) {
            results["singleVar"] = [];
        }
        for (i=0; i<array.length; i++) {
              let x = array[i];
              let expression = expressionArray.join('').replace(/x/g, x);

              let result = eval(expression);
              if (Math.abs(result - LHS) <= epsilon) { 
                results["singleVar"].push(x);
                if (Math.abs(result - LHS) < epsilon) {
                    
                  results["singleVar"].push(x); 
                }
            }
        }
    // Check if any results were found
    let anyResults = Object.keys(results).some(key => results[key].length > 0);
    if (!anyResults) {
        alert(`No solutions found for f(x, y) = ${LHS}`);
    } else {
        alert(`Solutions found for f(x, y) = ${LHS}.`);
        document.querySelector("output").innerText = JSON.stringify(results, null, 2);
        
        }
    }
}     


document.getElementById("exp__input").addEventListener("keydown", function(event) {
    if ( event.key === "Backspace") {
        event.preventDefault();
        expressionArray.pop();
        this.value = expressionArray.join('');
    } 
})
;

// Functions to add specific operators/variables
function plus() {
    updateInput('+');
}

function minus() {
    updateInput('-');
}

function divide() {
    updateInput('/');
}

function multiply() {
    updateInput('*');
}

function mod() {
    updateInput('%');
}

function exponent() {
    updateInput('^');
}

function brackets_l() {
    updateInput('(');
}

function brackets_r() {
    updateInput(')');
}

function variable_x() {
    updateInput('x');
}

function variable_y() {
    updateInput('y');
}

function equals() {
    
    console.log("Final Expression: ", expressionArray.join(''));
    
}

const number = array.slice(0,10);
let numberHtml = document.getElementById("1 to 10");
const menu = document.querySelector("Menu");

number.forEach(
    (n)=> {numberHtml.innerHTML +=`<button class="exp__btn" onclick="updateInput(${n})">${n}</button></br>`}
)

menu.appendChild(numberHtml);




