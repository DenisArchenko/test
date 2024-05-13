'use strict'
let money;
let time;
function start() {
     money = +prompt("Ваш бюджет на месяц?");
     time = prompt("Введите дату в формате YYYY-MM-DD");
     while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
     };
};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько это обойдется?"); 
    
        if (isNaN(a) &&  (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 && !isNaN(b))  {
            console.log('Done!');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    };
};

chooseExpenses();

function chooseOptExpensec(){
    for (let q = 0; q < 3; q++){
    let c = prompt("Статья необезательных расходов");

    if (isNaN(c) && (typeof(c)) != null && (typeof(c)) != '') {
        appData.optionalExpenses[q+1] =c;
        console.log("kaif")
    } else{
       q--;
    }
}
};
chooseOptExpensec();

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

function detectDayBudget (){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на день: " + appData.moneyPerDay);
};
// detectDayBudget();
function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Что-то пошло не так");
    };
};


function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.mothIncome = save/100/12*percent;
        alert("Доход с депозита в мес. равен " + appData.mothIncome);   
    }
};
// checkSavings();

console.log(appData);
