//SPIRAL PRINT

/*
This looks like a daunting task at first. However, the problem can be broken down to five main
components.
•Printing from left to right
•Printing from top to bottom
•Printing from right to left
•Printing from bottom to top
•Keeping a limit on these four operations
*/

var M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

function spiralPrint(M){
    var topRow = 0,
        leftCol = 0,
        btwRow = M.length - 1,
        rightCol = M[0].length - 1

        while(topRow < btwRow && leftCol < rightCol){
            for(var col=0 ; col <= rightCol; col++){
                console.log(M[topRow][col]);
            }
            topRow++
            for(var row= topRow; row <= btwRow; row++){
                console.log(M[row][rightCol]);
            }
            rightCol--;

            if(topRow <= btwRow){
                for(var col = rightCol; col>= 0; col--){
                    console.log(M[btwRow][col]);
                }
                btwRow--
            }

            if(leftCol <= rightCol){
                for(var row = btwRow; row > topRow ; row--){
                    console.log(M[row][leftCol])
                }
                leftCol++;
            }
        }
}

spiralPrint(M)