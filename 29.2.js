const products = [
    'Dell hardcore i29 200GB Leptop',
    'iPhone 1tb camra flashlight Phone',
    'Dell yellow leptop with black camera',
    '1X20 lenovo commertial yeoga Leptop',
    'LG supernova leptop',
    'htc low price Phone',
    'Dell perpol color phone with leptop'

];
const searching = 'Dell';
const output = [];
for (const proudct of products) {
    if (proudct.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(proudct);
    }
}
console.log(output)
// for (const product of products) {
//     if (product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product)
//     }
// }
// console.log(output)
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product)
//     }
// }
// console.log(output)

// const searching = 'Dell';
// const output = [];

// for (const product of products) {
//     if (product.toLowerCase().startsWith(searching.toLowerCase())) {
//         output.push(product)
//     }
// }
// console.log(output)
// /* for (const product of products) {
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product)
//     }
// }
// console.log(output) */


// /* for (const product of products) {
//     if (product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }
// console.log(output) */
