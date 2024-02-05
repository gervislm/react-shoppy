/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {Number} Total Price
 */

export const totalPrise = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};
