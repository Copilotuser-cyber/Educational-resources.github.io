function calculate() {
    try {
        // Check if the user typed "66+99="
        if (currentDisplay === '66+99=') {
            showPasswordPrompt(); // Show password prompt
            return; // Don't perform calculation
        }

        // Normal calculation logic
        const result = eval(currentDisplay.replace('=', ''));
        currentDisplay = result.toString();
        updateDisplay();
    } catch (error) {
        currentDisplay = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}
