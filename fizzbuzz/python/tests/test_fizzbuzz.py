from app.fizzbuzz import fizzbuzz
import pytest

def test_returns_string_1_for_integer_1():
    assert fizzbuzz(1) == "1"

def test_should_throw_error_for_zero():
    with pytest.raises(ValueError, match="Only positive integers."):
        fizzbuzz(0)

def test_should_throw_error_for_non_integer_value():
    with pytest.raises(ValueError, match="Only positive integers."):
        fizzbuzz(1.5)

def test_should_return_fizz_for_multiples_of_3():
    assert fizzbuzz(9) == "Fizz"
    assert fizzbuzz(18) == "Fizz"
    assert fizzbuzz(21) == "Fizz"

def test_should_return_buzz_for_multiples_of_5():
    assert fizzbuzz(5) == "Buzz"
    assert fizzbuzz(25) == "Buzz"
    assert fizzbuzz(100) == "Buzz"
    assert fizzbuzz(40) == "Buzz"

def test_should_return_fizzbuzz_for_multiples_of_3_and_5():
    assert fizzbuzz(15) == "FizzBuzz"
    assert fizzbuzz(30) == "FizzBuzz"
    assert fizzbuzz(45) == "FizzBuzz"
    assert fizzbuzz(60) == "FizzBuzz"

def test_should_return_string_value_of_any_other_number():
    assert fizzbuzz(2) == "2"
    assert fizzbuzz(17) == "17"
