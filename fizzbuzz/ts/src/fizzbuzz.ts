export function fizzbuzz(input: number) {
  if (input <= 0 || !Number.isInteger(input)) {
    throw new Error("Only positive integers.");
  }

  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }

  if (input % 3 === 0) {
    return "Fizz";
  }

  if (input % 5 === 0) {
    return "Buzz";
  }
  return input.toString();
}
