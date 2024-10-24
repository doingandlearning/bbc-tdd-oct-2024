import unittest
from string_calculator import add


class TestStringCalculator(unittest.TestCase):
    def test_should_return_0_for_empty_string(self):
        result = add("")
        self.assertEqual(result, 0)

    def test_should_return_1_for_string_with_1(self):
        result = add("1")
        self.assertEqual(result, 1)

    def test_should_add_two_comma_separated_values(self):
        result = add("1,2")
        self.assertEqual(result, 3)

    def test_should_add_three_comma_separated_values(self):
        result = add("1,2,3")
        self.assertEqual(result, 6)

    def test_should_add_two_semicolon_separated_values(self):
        result = add("1;2")
        self.assertEqual(result, 3)

    def test_should_add_two_newline_separated_values(self):
        result = add("1\n2")
        self.assertEqual(result, 3)

    def test_should_add_two_mixed_separated_values(self):
        result = add("1\n2,3")
        self.assertEqual(result, 6)

    def test_should_add_three_mixed_separated_values(self):
        result = add("1\n2,3;4")
        self.assertEqual(result, 10)
# TODO: handle floats 
    def test_should_fail_if_string_is_terminated_by_separator(self):
        with self.assertRaises(ValueError) as context:
            add("1,")
        self.assertEqual(str(context.exception), "Invalid Terminator Expression")

    def test_should_fail_if_string_contains_negative_number(self):
        with self.assertRaises(ValueError) as context:
            add("1,-1")
        self.assertEqual(str(context.exception), "Negative Number Error")

    def test_should_ignore_numbers_over_one_thousand(self):
        result = add("1001,2")
        self.assertEqual(result, 2)

    def test_should_handle_any_number_of_values(self):
        result = add("1,2,3,4,5,6")
        self.assertEqual(result, 21)


if __name__ == "__main__":
    unittest.main()
