import { expect, test } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

test("returns the string '1' for the integer 1", () => {
  expect(fizzbuzz(1)).toBe("1");
});

test("it should throw an error for zero", () => {
  expect(() => fizzbuzz(0)).toThrowError("Only positive integers.");
});

test("it should throw an error for a non-integer value", () => {
  expect(() => fizzbuzz(1.5)).toThrowError("Only positive integers.");
});

test("it should return the string 'Fizz' for multiples of 3", () => {
  expect(fizzbuzz(9)).toBe("Fizz");
  expect(fizzbuzz(18)).toBe("Fizz");
  expect(fizzbuzz(21)).toBe("Fizz");
});

test("it should return the string 'Buzz' for multiples of 5", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(25)).toBe("Buzz");
  expect(fizzbuzz(100)).toBe("Buzz");
  expect(fizzbuzz(40)).toBe("Buzz");
});

test("it should return the string 'FizzBuzz' for multiples of 3 and 5", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
  expect(fizzbuzz(30)).toBe("FizzBuzz");
  expect(fizzbuzz(45)).toBe("FizzBuzz");
  expect(fizzbuzz(60)).toBe("FizzBuzz");
});

test("it should return the string value of any other number", () => {
  expect(fizzbuzz(2)).toBe("2");
  expect(fizzbuzz(17)).toBe("17");
});
