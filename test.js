// const obj = {
//     name: "alex"
// };
// const arr = [1, 3, 5, 6];

//  - to string
// 1)
console.log(typeof(String(4)))
// 2)
console.log(typeof('ww' + "4"))
console.log('https://vk.com/catalog/' + 5)
//  - to number
// 1)
console.log(typeof(Number('5')));
// 2)
console.log((5  + +"5"));
// 3)
console.log(typeof(parseInt('15px', 10)))
let ans = +prompt('Hello?', '');
// 0, ',', null, undefined, NaN - false

let swither = null;

if (swither) {
    console.log('working...')
}

swither = 1;
if (swither) {
    console.log('working...')
}
// 2)
console.log(typeof(Boolean('5')))
// 3)
console.log(typeof(!!'5'))
alert('hELLO world');