// Grabbing elements from the DOM
const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const buttonDecimal = document.getElementById('decimal');  // The '.' button

const buttonAdd = document.getElementById('add');
const buttonSubtract = document.getElementById('subtract');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonSubmit = document.getElementById('submit');
const display = document.getElementById('result');

let currentInput = '';  // String to collect the digits
let value1 = '';        // String for the first value
let value2 = '';        // String for the second value
let operation = null;   // To store the operation

// Button click handlers for numbers
function appendNumber(number) {
    currentInput += number;  // Append the clicked number to current input
    display.textContent = currentInput;  // Show the current input to the user
}

// Add event listeners for numbers (0-9)
button0.addEventListener('click', () => appendNumber('0'));
button1.addEventListener('click', () => appendNumber('1'));
button2.addEventListener('click', () => appendNumber('2'));
button3.addEventListener('click', () => appendNumber('3'));
button4.addEventListener('click', () => appendNumber('4'));
button5.addEventListener('click', () => appendNumber('5'));
button6.addEventListener('click', () => appendNumber('6'));
button7.addEventListener('click', () => appendNumber('7'));
button8.addEventListener('click', () => appendNumber('8'));
button9.addEventListener('click', () => appendNumber('9'));

// Add event listener for the decimal point
buttonDecimal.addEventListener('click', () => {
    // Ensure only one decimal point can be added
    if (!currentInput.includes('.')) {
        appendNumber('.');
    }
});

// Operation button handler
function setOperation(op) {
    if (value1 === '') {
        value1 = currentInput;  // Set the first value if not already set
    } else {
        value2 = currentInput;  // If value1 is set, set value2
    }
    currentInput = '';  // Reset current input for next number
    operation = op;     // Store the operation
}

buttonAdd.addEventListener('click', () => setOperation('add'));
buttonSubtract.addEventListener('click', () => setOperation('subtract'));
buttonMultiply.addEventListener('click', () => setOperation('multiply'));
buttonDivide.addEventListener('click', () => setOperation('divide'));

// Submit button to perform calculation
buttonSubmit.addEventListener('click', () => {
    if (value2 === '') {
        value2 = currentInput;  // Set value2 if not already set
    }

    let result = 0;

    // Convert the string values to numbers for calculation
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    }

    // Display the result
    display.textContent = 'The answer is ' + result + '.';

    // Reset values for the next calculation
    currentInput = '';
    value1 = '';
    value2 = '';
    operation = null;
});