function extractNumber(n) {
    let lastDigit = '';
    let finalDigit = '';
    while (n > 0) {
        lastDigit = n % 10;
        n = Math.floor(n / 10);
        finalDigit = lastDigit + finalDigit; // Prepend the digit
    }
    console.log(finalDigit);
}

extractNumber(7789);
