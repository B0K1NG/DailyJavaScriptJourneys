// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind == 'car' || kind == 'truck'
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  
  if (option1 < option2) {
    return `${option1} is clearly the better choice.`
  } else {
    return `${option2} is clearly the better choice.`
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  // The vehicle is less than 3 years old
  // The cost is 80% the original price it had when it was brand new

  // If it is more than 10 years old it costs 50 % of its original price

  // If it is no older than 10 years but older than 3 years it costs 70% original price

  if (age < 3) {
    return 0.8 * originalPrice
  } else if (age > 10) {
    return 0.5 * originalPrice
  } else {
    return 0.7 * originalPrice
  }
}
