function printPattern7(n) {
    let pattern = '';
    // Upper part of the pattern
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += "*";
        }
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " ";
        }
        pattern += "\n";
    }
    return pattern;
}

function printPattern8(n) {
    let pattern = '';
    // Lower part of the pattern
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            pattern += ' ';
        }
        for (let j = 0; j < 2 * (n - i) - 1; j++) {
            pattern += '*';
        }
        for (let j = 0; j < i; j++) {
            pattern += ' ';
        }
        pattern += '\n';
    }
    return pattern;
}

// Combine both patterns
function printFullPattern(n) {
    let fullPattern = printPattern7(n) + printPattern8(n);
    console.log(fullPattern);
}

printFullPattern(6);
