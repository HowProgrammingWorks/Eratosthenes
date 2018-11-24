'use strict';

const sieveOfEratosthenes = limit => {
  const array = Array(limit).fill(true);
  const primes = [];

  for (let i = 2; i < limit; i++) {
    if (array[i]) {
      for (let j = i * i; j < limit; j += i) {
        array[j] = false;
      }
      primes.push(i);
    }
  }
  return primes;
};

console.log(sieveOfEratosthenes(20));
