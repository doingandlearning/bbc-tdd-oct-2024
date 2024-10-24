import re


def add(string_input: str) -> int:
    if string_input == "":
        return 0
    if string_input.endswith(","):
        raise ValueError("Invalid Terminator Expression")

    delimiter_regexp = re.compile(r"[;,\n]")
    numbers = [int(n) for n in delimiter_regexp.split(string_input) if int(n) < 1000]

    negatives = [num for num in numbers if num < 0]
    if negatives:
        raise ValueError("Negative Number Error")

    final_sum = sum(numbers)
    return final_sum
