import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class FizzBuzzTest {

    @Test
    public void testReturnsString1ForInteger1() {
        assertEquals("1", FizzBuzz.fizzbuzz(1));
    }

    @Test
    public void testShouldThrowErrorForZero() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            FizzBuzz.fizzbuzz(0);
        });
        assertEquals("Only positive integers.", exception.getMessage());
    }

    @Test
    public void testShouldThrowErrorForNonIntegerValue() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            FizzBuzz.fizzbuzz(1.5);
        });
        assertEquals("Only positive integers.", exception.getMessage());
    }

    @Test
    public void testShouldReturnFizzForMultiplesOf3() {
        assertEquals("Fizz", FizzBuzz.fizzbuzz(9));
        assertEquals("Fizz", FizzBuzz.fizzbuzz(18));
        assertEquals("Fizz", FizzBuzz.fizzbuzz(21));
    }

    @Test
    public void testShouldReturnBuzzForMultiplesOf5() {
        assertEquals("Buzz", FizzBuzz.fizzbuzz(5));
        assertEquals("Buzz", FizzBuzz.fizzbuzz(25));
        assertEquals("Buzz", FizzBuzz.fizzbuzz(100));
        assertEquals("Buzz", FizzBuzz.fizzbuzz(40));
    }

    @Test
    public void testShouldReturnFizzBuzzForMultiplesOf3And5() {
        assertEquals("FizzBuzz", FizzBuzz.fizzbuzz(15));
        assertEquals("FizzBuzz", FizzBuzz.fizzbuzz(30));
        assertEquals("FizzBuzz", FizzBuzz.fizzbuzz(45));
        assertEquals("FizzBuzz", FizzBuzz.fizzbuzz(60));
    }

    @Test
    public void testShouldReturnStringValueOfAnyOtherNumber() {
        assertEquals("2", FizzBuzz.fizzbuzz(2));
        assertEquals("17", FizzBuzz.fizzbuzz(17));
    }
}
