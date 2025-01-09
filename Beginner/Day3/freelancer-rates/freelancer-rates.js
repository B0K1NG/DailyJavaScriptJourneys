// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {

  let rate = dayRate(ratePerHour); // Determing the day rate

  let numberOfDays = budget / rate; // Determing the number of days

  return Math.floor(numberOfDays); // Rounding the number
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  let months = Math.floor(numDays/22);

  let remainingDays = numDays % 22;

  let fullMonthRate = dayRate(ratePerHour) * 22;

  let discountedMonthRate = fullMonthRate * (1 - discount);

  let remainingDaysRate = remainingDays * dayRate(ratePerHour)

  let totalCost = (months * discountedMonthRate) + remainingDaysRate

  return Math.ceil(totalCost)
}
