public class FizzBuzz {
    public static String fizzbuzz(int input) {
        if (input <= 0) {
            throw new IllegalArgumentException("Only positive integers.");
        }

        if (input % 3 == 0 && input % 5 == 0) {
            return "FizzBuzz";
        }

        if (input % 3 == 0) {
            return "Fizz";
        }

        if (input % 5 == 0) {
            return "Buzz";
        }

        return Integer.toString(input);
    }

    public static String fizzbuzz(double input) {
        if (input <= 0 || input != (int) input) {
            throw new IllegalArgumentException("Only positive integers.");
        }
        return fizzbuzz((int) input);
    }
}
