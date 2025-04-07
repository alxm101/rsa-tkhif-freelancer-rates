import { dayRate, daysInBudget, priceWithMonthlyDiscount } from './freelancer-rates.js';

console.log("Day rate (89):", dayRate(89)); // should be 712
console.log("Days in budget (20000, 89):", daysInBudget(20000, 89)); // should be 28
console.log("Price with discount (89, 230, 0.42):", priceWithMonthlyDiscount(89, 230, 0.42)); // should be 97972
