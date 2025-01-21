// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstTotal = Number(array1.join(''));
  let secondTotal = Number(array2.join(''));

  return firstTotal + secondTotal;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueStr = String(value);
  let result = valueStr.split('').reverse().join('');

  return valueStr === result;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === '') {
    return 'Required field';
  }

  const numInput = Number(input);
  if (isNaN(numInput)) {
    return 'Must be a number besides 0';
  }

  if (numInput === 0) {
    return 'Must be a number besides 0';
  }

  return '';

}