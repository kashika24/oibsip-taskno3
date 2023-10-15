const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const resultElement = document.getElementById('result');

// Function to convert temperature
function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid temperature.';
        return;
    }

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        resultElement.textContent = `Result: ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        resultElement.textContent = `Result: ${celsius.toFixed(2)}°C`;
    }
}
convertButton.addEventListener('click', convertTemperature);
