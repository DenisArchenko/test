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
let cash = prompt("Введите обязательную статью расходов в этом месяце");
let cost = prompt("Во сколько это обойдется?");
let info = alert(money / 30);
appData.expenses = cost;
console.log(appData);