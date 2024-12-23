/*
Input Format: N = 6
Result:   
A
A B
A B C
A B C D
A B C D E
A B C D E F
*/

function pattern14(N) {
    // Outer loop for the number of rows.
    for (let i = 0; i < N; i++) {
        // Initialize an empty string for the current row.
        let row = '';
        
        // Inner loop will loop for i times and
        // print alphabets from A to A + i.
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(65 + j) + ' ';
        }
        
        // Print the current row and move to the next line.
        console.log(row);
    }
}

// Here, we have taken the value of N as 5.
// We can also take input from the user.
const N = 5;
pattern14(N);
