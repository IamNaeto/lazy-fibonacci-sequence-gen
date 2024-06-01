# Fibonacci Generator with Caching and User-Defined Range

## Description

This project demonstrates a Fibonacci sequence generator in JavaScript that includes caching for improved performance and allows the user to define a range of indices to generate. The generator function yields Fibonacci numbers within a specified range and avoids calculating the entire sequence upfront, enhancing memory efficiency.

## Features

- **Caching Mechanism**: Previously calculated Fibonacci numbers are stored in a cache to improve performance for repeated requests.
- **User-Defined Range**: The generator function accepts a starting and ending index, allowing users to retrieve a specific portion of the Fibonacci sequence.

## Implementation Details

- A closure is used to store the state of the sequence and the cache.
- The generator function yields the next Fibonacci number each time it's called.
- The generator function first checks the cache for the requested number. If the number is not cached, it calculates it using the traditional recursive approach and stores it in the cache for future use.
