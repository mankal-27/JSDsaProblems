function pattern14(N) {
    // Outer loop for the number of rows.
    for (let i = 0; i < N; i++) {
        // Initialize an empty string for the current row.
        let row = '';
        
        // Inner loop will loop from 0 to N-i-1 times and
        // print alphabets from A to A + (N-i-1).
        for (let j = 0; j < N - i; j++) {
            row += String.fromCharCode(65 + j) + ' ';
        }
        
        // Print the current row and move to the next line.
        console.log(row);
    }
}

// Here, we have taken the value of N as 6.
// We can also take input from the user.
const N = 6;
pattern14(N);
