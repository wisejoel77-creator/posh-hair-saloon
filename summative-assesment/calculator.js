const calculationHistory = [];

function add(a, b) {                    
const result = a + b;
calculationHistory.push({ operation: 'add', operands: [a, b], result });
return result;
}
function subtract(a, b) {
const result = a - b;
calculationHistory.push({ operation: 'subtract', operands: [a, b], result });
return result;
}
function multiply(a, b) {
const result = a * b;
calculationHistory.push({ operation: 'multiply', operands: [a, b], result });
return result;
}
function divide(a, b) {
if (b === 0) {
throw new Error('Cannot divide by zero');
console.log('Error: Cannot divide by zero');
return null;
}

const result = a / b;
calculationHistory.push({ operation: 'divide', operands: [a, b], result });
return result;
}

function getHistory() {
return calculationHistory;
}

function displayHistory() {
console.log('Calculation History:');
calculationHistory.forEach((calc, index) => {
console.log(`
    ${index + 1}. ${calc.operation}(${calc.operands.join(', ')}) = ${calc.result}`);
});
}

module.exports = {
add,
subtract,
multiply,
divide,
getHistory,
displayHistory
};

add(5, 3);
subtract(10, 4);                     
displayHistory();
