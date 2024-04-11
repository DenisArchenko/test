'use strict'
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    svings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько это обойдется?"); 

    if ((typeof(a)) === "string" &&  (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50)  {
        console.log('Done!');
        appData.expenses[a] = b;
    } else {
        i--;
    }
}
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько это обойдется")
//     if ((typeof(a)) === "string" &&  (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50)  {
//     i++;
//     console.log('Done!');
//     appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько это обойдется")
//     if ((typeof(a)) === "string" &&  (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50)  {
//         i++;
//         console.log('Done!');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// }
// while (i < 2);
console.log(appData);

let info = alert("Ваш бюджет на день: " + money / 30);

