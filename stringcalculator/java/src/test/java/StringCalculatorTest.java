import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class StringCalculatorTest {

    private StringCalculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new StringCalculator();
    }

    @Test
    public void testShouldReturn0ForEmptyString() {
        int result = calculator.add("");
        assertEquals(0, result);
    }

    @Test
    public void testShouldReturn1ForStringWith1() {
        int result = calculator.add("1");
        assertEquals(1, result);
    }

    @Test
    public void testShouldAddTwoCommaSeparatedValues() {
        int result = calculator.add("1,2");
        assertEquals(3, result);
    }

    @Test
    public void testShouldAddThreeCommaSeparatedValues() {
        int result = calculator.add("1,2,3");
        assertEquals(6, result);
    }

    @Test
    public void testShouldAddTwoSemicolonSeparatedValues() {
        int result = calculator.add("1;2");
        assertEquals(3, result);
    }

    @Test
    public void testShouldAddTwoNewlineSeparatedValues() {
        int result = calculator.add("1\n2");
        assertEquals(3, result);
    }

    @Test
    public void testShouldAddTwoMixedSeparatedValues() {
        int result = calculator.add("1\n2,3");
        assertEquals(6, result);
    }

    @Test
    public void testShouldAddThreeMixedSeparatedValues() {
        int result = calculator.add("1\n2,3;4");
        assertEquals(10, result);
    }

    @Test
    public void testShouldFailIfStringIsTerminatedBySeparator() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.add("1,");
        });
        assertEquals("Invalid Terminator Expression", exception.getMessage());
    }

    @Test
    public void testShouldFailIfStringContainsNegativeNumber() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.add("1,-1");
        });
        assertEquals("Negative Number Error", exception.getMessage());
    }

    @Test
    public void testShouldIgnoreNumbersOverOneThousand() {
        int result = calculator.add("1001,2");
        assertEquals(2, result);
    }

    @Test
    public void testShouldHandleAnyNumberOfValues() {
        int result = calculator.add("1,2,3,4,5,6");
        assertEquals(21, result);
    }
}
