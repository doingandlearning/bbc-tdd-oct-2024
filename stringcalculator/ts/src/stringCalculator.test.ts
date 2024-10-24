import { StringCalculator } from "./stringCalculator";
import { test, expect, beforeEach } from "vitest";

let calculator;

beforeEach(() => {
  calculator = new StringCalculator();
});

test("it should return 0 for an empty string", () => {
  const result = calculator.add("");
  expect(result).toEqual(0);
});

test(`should return 1 for an string with "1" in it`, () => {
  const result = calculator.add("1");
  expect(result).toEqual(1);
});

test("should add together two comma separated values (1,2)", () => {
  const result = calculator.add("1,2");
  expect(result).toEqual(3);
});

test("should add together three comma separated values (1,2,3)", () => {
  const result = calculator.add("1,2,3");
  expect(result).toEqual(6);
});

test("should add together two semicolon separated values (1;2)", () => {
  const result = calculator.add("1;2");
  expect(result).toEqual(3);
});

test("should add together two newline separated values (1\n2)", () => {
  const result = calculator.add("1\n2");
  expect(result).toEqual(3);
});

test("should add together two mixed separated values (1\n2,3)", () => {
  const result = calculator.add("1\n2,3");
  expect(result).toEqual(6);
});

test("should add together three mixed separated values (1\n2,3;4)", () => {
  const result = calculator.add("1\n2,3;4");
  expect(result).toEqual(10);
});

test("should fail if the string is terminated by a separator (1,)", () => {
  expect(function () {
    calculator.add("1,");
  }).toThrow(new Error("Invalid Terminator Expression"));
});

test("should fail if the string contains a negative number (1,-1)", () => {
  expect(function () {
    calculator.add("1,-1");
  }).toThrow(new Error("Negative Number Error"));
});

test("should ignore numbers over one thousand (1001,2)", () => {
  const result = calculator.add("1001,2");
  expect(result).toEqual(2);
});

test("should handle any number of values (1, 2, 3, 4, 5, 6)", () => {
  const result = calculator.add("1, 2, 3, 4, 5, 6");
  expect(result).toEqual(21);
});
