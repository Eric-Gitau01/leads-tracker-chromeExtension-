function fizzBuzz() {
    let number = parseInt(document.getElementById('number').value); // Convert input to a number
    let resultEl = document.getElementById('result');
    let result = '';

    // Validate input before starting the loop
    if (isNaN(number) || number <= 0) {
        resultEl.innerHTML = 'Please enter a valid positive number.';
        return;
    }

    // Generate the FizzBuzz sequence
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'fizzbuzz ';
        } else if (i % 3 === 0) {
            result += 'fizz ';
        } else if (i % 5 === 0) {
            result += 'buzz ';
        } else {
            result += i + ' ';
        }
    }

    resultEl.innerHTML = result.trim(); // Print the full sequence
}