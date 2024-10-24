export class StringCalculator {
  add(stringInput: string) {
    if (stringInput === "") {
      return 0;
    }
    if (stringInput.endsWith(",")) {
      throw new Error("Invalid Terminator Expression");
    }

    const delimiterRegExp = /[;,\n]/;
    let numbers = stringInput
      .split(delimiterRegExp)
      .map((n) => parseInt(n))
      .filter((num) => num < 1000);

    let negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error("Negative Number Error");
    }

    let finalSum = numbers.reduce((a, c) => a + c, 0);
    return finalSum;
  }
}
