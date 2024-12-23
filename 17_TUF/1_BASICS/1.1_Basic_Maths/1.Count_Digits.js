
function countDigits(N) {
  let count = 0;
  while (N > 0) {
          N = Math.floor(N / 10);
          count++;
  }
  return count;
}

countDigits(12345);
module.exports = countDigits;