package stringcalculator

import (
	"errors"
	"strconv"
	"strings"
)

type StringCalculator struct{}

func (sc StringCalculator) Add(input string) (int, error) {
	if input == "" {
		return 0, nil
	}

	if strings.HasSuffix(input, ",") || strings.HasSuffix(input, ";") || strings.HasSuffix(input, "\n") {
		return 0, errors.New("Invalid Terminator Expression")
	}

	// Remove delimiters and split input into fields
	replacer := strings.NewReplacer(",", " ", ";", " ", "\n", " ")
	replacedInput := replacer.Replace(input)
	numberStrings := strings.Fields(replacedInput)

	var sum int
	var negatives []int

	for _, numStr := range numberStrings {
		num, err := strconv.Atoi(numStr)
		if err != nil {
			return 0, err
		}
		if num < 0 {
			negatives = append(negatives, num)
		}
		if num < 1000 {
			sum += num
		}
	}

	if len(negatives) > 0 {
		return 0, errors.New("Negative Number Error")
	}

	return sum, nil
}
