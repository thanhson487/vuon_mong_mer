import { includes } from "lodash";

export const formatCurrency = (value) => {
    value = value.toString();
    
  if (!value) return '';
  if (!value.match(/[0-9]/g)) return '';
  const reverseString = value.match(/[0-9]/g).reverse().join('');
  if (includes(value, '-')) {
    return `-${reverseString
      .match(/.{1,3}/g)
      .join(',')
      .split('')
      .reverse()
      .join('')}`;
  }
  return reverseString
    .match(/.{1,3}/g)
    .join(',')
    .split('')
    .reverse()
    .join('');
};
