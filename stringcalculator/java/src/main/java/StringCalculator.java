import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StringCalculator {
    public int add(String stringInput) {
        if (stringInput.equals("")) {
            return 0;
        }
        if (stringInput.endsWith(",")) {
            throw new IllegalArgumentException("Invalid Terminator Expression");
        }

        String delimiterRegExp = "[;,\\n]";
        List<Integer> numbers = Arrays.stream(stringInput.split(delimiterRegExp))
                                      .map(Integer::parseInt)
                                      .filter(num -> num < 1000)
                                      .collect(Collectors.toList());

        List<Integer> negatives = numbers.stream()
                                         .filter(num -> num < 0)
                                         .collect(Collectors.toList());
        if (!negatives.isEmpty()) {
            throw new IllegalArgumentException("Negative Number Error");
        }

        return numbers.stream().mapToInt(Integer::intValue).sum();
    }
}
