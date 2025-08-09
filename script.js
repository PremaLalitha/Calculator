let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    let actualValue = value === '×' ? '*' : value;
    currentInput += actualValue;
    display.value = currentInput.replace(/\*/g, '×');
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput.replace(/\*/g, '×');
}

function calculateResult() {
    try {
        if (currentInput === '') return;
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '/' || key === '*') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});