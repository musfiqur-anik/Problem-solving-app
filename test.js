let array = [];
let results = [];
let expressionArray = [];
let functions = {};

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
            LHS = parseFloat(LHS); 
        
            if (isNaN(LHS)) {
                alert("Invalid number, please enter a valid number.");
                return;
            }
        
            let show_result = document.querySelector(".show_result");
            if (!show_result) {
                show_result = document.createElement('h1');
                show_result.classList.add('show_result');
                show_result.innerText = "Results:";
                outputElement.prepend(show_result); 
            }
        
            show_result.style.display = "block"; 
        
            results = {}; 
            let epsilon = 1e-6; 
        
            expressionArray.forEach((Element, index) => {
                
                if (((expressionArray[index + 1] === "y") && (Element === "x")) || 
                    ((expressionArray[index + 1] === "x") && (Element === "y"))) {
                    expressionArray.splice(index + 1, 0, "*");
                }
               
                for (let i = 0; i < 10; i++) {
                    if (((Element === "x") || (Element === "y")) && expressionArray[index - 1] === i.toString()) {
                        expressionArray.splice(index, 0, "*");
                    }
                }
            });
        
            console.log(expressionArray);
        
            
            if (expressionArray.includes('x') && expressionArray.includes('y')) {
                for (let i = 0; i < array.length; i++) {
                    results[`temp${i}`] = []; 
        
                    for (let j = 0; j < array.length; j++) {
                        let x = array[i];
                        let y = array[j];
        
                        let expression = expressionArray.join('')
                            .replace(/x/g, x)
                            .replace(/y/g, y);
        
                        // Replace invalid exponentiation syntax with Math.pow
                        expression = expression.replace(/(\d+|\w+)\s*\*\*\s*(\d+|\w+)/g, 'Math.pow($1, $2)');
        
                        try {
                            let result = eval(expression); 
        
                            
                            if (Math.abs(result - LHS) <= epsilon) { 
                                results[`temp${i}`].push({ x, y });
                            }
                        } catch (error) {
                            console.error("Error evaluating expression:", expression, error);
                        }
                    }
                }
        
            } else {
               
                if (!results["singleVar"]) {
                    results["singleVar"] = [];
                }
                if (!results["singleVarY"]) {
                    results["singleVarY"] = [];
                }
        
                for (let i = 0; i < array.length; i++) {
                    let x = array[i];
                    let expressionX = expressionArray.join('').replace(/y/g, ""); 
                    expressionX = expressionX.replace(/x/g, x); 
        
                   
                    expressionX = expressionX.replace(/(\d+|\w+)\s*\*\*\s*(\d+|\w+)/g, 'Math.pow($1, $2)');
        
                    try {
                        let resultX = eval(expressionX);
                        if (Math.abs(resultX - LHS) <= epsilon) { 
                            results["singleVar"].push({ x });
                        }
                    } catch (error) {
                        console.error("Error evaluating expression:", expressionX, error);
                    }
                }
        
                for (let i = 0; i < array.length; i++) {
                    let y = array[i];
                    let expressionY = expressionArray.join('').replace(/x/g, ""); 
                    expressionY = expressionY.replace(/y/g, y); 
        
                    
                    expressionY = expressionY.replace(/(\d+|\w+)\s*\*\*\s*(\d+|\w+)/g, 'Math.pow($1, $2)');
        
                    try {
                        let resultY = eval(expressionY);
                        if (Math.abs(resultY - LHS) <= epsilon) { 
                            results["singleVarY"].push({ y });
                        }
                    } catch (error) {
                        console.error("Error evaluating expression:", expressionY, error);
                    }
                }
            }
        
            let nonEmptyResults = Object.entries(results).filter(([key, value]) => value.length > 0);
        
          
            if (nonEmptyResults.length === 0) {
                outputElement.innerText = `No solutions found for f(x, y) = ${LHS}`;
            } else {
               
                let formattedResults = `Solutions found for f(x, y) = ${LHS}\nNumber of solutions: ${nonEmptyResults.length};\n`;
        
                nonEmptyResults.forEach(([key, value]) => {
                    value.forEach(pair => {
                        if (pair.x !== undefined) {
                            formattedResults += `x = ${pair.x}\n`;
                        }
                        if (pair.y !== undefined) {
                            formattedResults += `y = ${pair.y}\n`;
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
function exponent() {       
    let inputField = document.getElementById("exp__input");
    expressionArray.push("**");
    inputField.value = expressionArray.join('');
    console.log("Current Expression Array: ", expressionArray);
}



for (let i =0; i <10; i++) {
    functions[`number_${i}`] = function() {
        updateInput(`${i}`);
    };
}




