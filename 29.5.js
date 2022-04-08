const number = [23, 346, 565, 34, 14, 745, 14, 76, 3412, 234];
const numberSlice = number.slice(3, 8);
// console.log(numberSlice);
// console.log(number)
// const numberSplice = number.splice(3, 4);
// console.log(numberSplice);
// console.log(number);

const numberSplice2 = number.splice(4, 3, 9, 99, 999, 9999, 99999);
console.log(numberSplice2);
console.log(number)