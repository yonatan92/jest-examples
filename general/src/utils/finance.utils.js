/**
 * @param {number} p - the principal amount
 * @param {number} t - time the money is invested or borrowed for
 * @param {number} r - annual interest rate
 * @param {number} n - number of times that interest is compounded per unit t, 
 *                     for example if interest is compounded monthly and t is 
 *                     in years then the value of n would be 12. 
 *                     If interest is compounded quarterly and t is in years 
 *                     then the value of n would be 4.
 */
export const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
};
