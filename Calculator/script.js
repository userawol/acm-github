const inputBox = document.getElementById('inputbox');
let currentInput = '';

// Function to handle button clicks
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            // Evaluate the expression when "=" is pressed
            try {
                currentInput = currentInput.replace('X', '*').replace('−', '-');
                inputBox.value = eval(currentInput);
                currentInput = inputBox.value;  // Update for next operations
            } catch {
                inputBox.value = 'Error';
                currentInput = '';
            }
        } else if (value === 'C') {
            // Clear the input when "C" is pressed
            currentInput = '';
            inputBox.value = '';
        } else {
            // Add input to the current expression
            currentInput += value;
            inputBox.value = currentInput;
        }
    });
});



