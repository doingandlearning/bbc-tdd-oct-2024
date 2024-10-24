def fizzbuzz(input):
    if input <= 0 or not isinstance(input, int):
        raise ValueError("Only positive integers.")
    
    if input % 3 == 0 and input % 5 == 0:
        return "FizzBuzz"
    
    if input % 3 == 0:
        return "Fizz"
    
    if input % 5 == 0:
        return "Buzz"
    
    return str(input)
