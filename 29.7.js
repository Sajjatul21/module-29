function addNumber(num1, num2) {
    // console.log(arguments[4])
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }

    return result;
}
const sum = addNumber(45, 6, 5, 46, 25, 3);
console.log(sum)