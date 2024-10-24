package stringcalculator

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

var calculator StringCalculator

func TestEmptyString(t *testing.T) {
	result, err := calculator.Add("")
	assert.Nil(t, err)
	assert.Equal(t, 0, result)
}

func TestSingleNumber(t *testing.T) {
	result, err := calculator.Add("1")
	assert.Nil(t, err)
	assert.Equal(t, 1, result)
}

func TestTwoCommaSeparatedNumbers(t *testing.T) {
	result, err := calculator.Add("1,2")
	assert.Nil(t, err)
	assert.Equal(t, 3, result)
}

func TestThreeCommaSeparatedNumbers(t *testing.T) {
	result, err := calculator.Add("1,2,3")
	assert.Nil(t, err)
	assert.Equal(t, 6, result)
}

func TestTwoSemicolonSeparatedNumbers(t *testing.T) {
	result, err := calculator.Add("1;2")
	assert.Nil(t, err)
	assert.Equal(t, 3, result)
}

func TestTwoNewlineSeparatedNumbers(t *testing.T) {
	result, err := calculator.Add("1\n2")
	assert.Nil(t, err)
	assert.Equal(t, 3, result)
}

func TestMixedSeparators(t *testing.T) {
	result, err := calculator.Add("1\n2,3;4")
	assert.Nil(t, err)
	assert.Equal(t, 10, result)
}

func TestInvalidTerminatorExpression(t *testing.T) {
	_, err := calculator.Add("1,")
	assert.NotNil(t, err)
	assert.EqualError(t, err, "Invalid Terminator Expression")
}

func TestNegativeNumber(t *testing.T) {
	_, err := calculator.Add("1,-1")
	assert.NotNil(t, err)
	assert.EqualError(t, err, "Negative Number Error")
}

func TestNumbersGreaterThanThousand(t *testing.T) {
	result, err := calculator.Add("1001,2")
	assert.Nil(t, err)
	assert.Equal(t, 2, result)
}

func TestManyNumbers(t *testing.T) {
	result, err := calculator.Add("1, 2, 3, 4, 5, 6")
	assert.Nil(t, err)
	assert.Equal(t, 21, result)
}
