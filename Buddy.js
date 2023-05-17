function buddy(start, limit) {
  function sumOfProperDivisors(num) {
    let sum = 1; // Include 1 as a proper divisor
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum;
  }

  for (let n = start; n <= limit; n++) {
    const m = sumOfProperDivisors(n) - 1;
    if (m > n && sumOfProperDivisors(m) - 1 === n) {
      return [n, m];
    }
  }

  return "Nothing";
}

console.log(buddy(10, 50)); // Output: [48, 75]
console.log(buddy(48, 50)); // Output: [48, 75]
