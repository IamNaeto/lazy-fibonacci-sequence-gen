function fibonacciGenerator(start, end) {
  // Cache to store previously calculated Fibonacci numbers
  const cache = {};

  // Closure to generate Fibonacci numbers
  function* generator() {
    let [prev, curr] = [0, 1];

    for (let i = 0; i <= end; i++) {
      if (i >= start) {
        yield curr;
      }

      // Store the current Fibonacci number in the cache
      cache[i] = curr;

      // Calculate the next Fibonacci number using the cache
      if (cache[i + 1] === undefined) {
        [prev, curr] = [curr, prev + curr];
        cache[i + 1] = curr;
      } else {
        [prev, curr] = [curr, cache[i + 1]];
      }
    }
  }

  return generator();
}

const start = 1;
const end = 10;

const fibGen = fibonacciGenerator(start, end);

for (const num of fibGen) {
  console.log(num);
}
