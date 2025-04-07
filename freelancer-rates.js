
export function dayRate(hourlyRate) {
  return hourlyRate * 8;
}


export function daysInBudget(budget, hourlyRate) {
  return Math.floor(budget / dayRate(hourlyRate));
}


export function priceWithMonthlyDiscount(hourlyRate, numDays, discount) {
  const dayRateValue = dayRate(hourlyRate);
  const billableDaysInMonth = 22;
  const fullMonths = Math.floor(numDays / billableDaysInMonth);
  const remainingDays = numDays % billableDaysInMonth;

  const discountedMonthlyCost = billableDaysInMonth * dayRateValue * (1 - discount);
  const remainingCost = remainingDays * dayRateValue;

  return Math.ceil(fullMonths * discountedMonthlyCost + remainingCost);
}
