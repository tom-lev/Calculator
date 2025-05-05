const display = document.getElementById('display');
// Select ONLY the calculator buttons inside the .buttons container
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

// Calculator button logic
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Dark mode toggle button logic
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
