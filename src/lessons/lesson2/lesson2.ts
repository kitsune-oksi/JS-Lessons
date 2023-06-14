console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827
// https://medium.com/nuances-of-programming/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-9e46cf4abff9

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(el1: number) {
    return function (el2: number) {
        return el1 + el2
    }
}

console.log('task 1 ====>', sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 1;
    return function () {
        return count++
    }
}

const counter = makeCounter();
console.log('task 2 ====>', counter());
console.log(counter());
const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounterUpgrade = function (num: number) {
    let count = num;

    function changeBy(val: number) {
        return count += val
    }

    return {
        increase: function () {
            return changeBy(1)
        },
        decrease: function () {
            return changeBy(-1)
        },
        reset: function () {
            return count = 0
        },
        set: function () {
            return count = num
        }
    }
}

const counterUpgrade = makeCounterUpgrade(2);
console.log('task 3 ====>', counterUpgrade.increase())
console.log(counterUpgrade.increase())
console.log(counterUpgrade.increase())
console.log(counterUpgrade.decrease())
console.log(counterUpgrade.reset())
console.log(counterUpgrade.set())
console.log(counterUpgrade.decrease())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(numOfEl: number) {
    if (numOfEl === 0) {
        return 0
    }
    if (numOfEl === 1) {
        return function (el: number) {
            return el
        }
    }
    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= numOfEl) {
            _arguments.length = numOfEl;
            return _arguments.reduce((acc, n) => n + acc)
        } else return helper;
    }

    return helper
}

// @ts-ignore
console.log('task 4 ====>', superSum(0))
// @ts-ignore
console.log(superSum(3)(2)(5)(3))
// @ts-ignore
console.log(superSum(3)(2)(5, 3))
// @ts-ignore
console.log(superSum(3)(2, 5, 3))
// @ts-ignore
console.log(superSum(3)(2, 5)(3))
// @ts-ignore
console.log(superSum(3)(2, 5)(3, 9))


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//     Сделайте три варианта решения:
//     1. С использованием цикла.
//     2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     3. С использованием формулы арифметической прогрессии.

function sumToVar1(n: number) {
    let result: number = 0;
    if (n === 0) {
        return n
    }
    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result
}

console.log('task 5.1 ====>', sumToVar1(100))

// @ts-ignore
function sumToVar2(n: number) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return n + sumToVar2(n - 1)
}

console.log(sumToVar2(100))

function sumToVar3(n: number) {
    return n * (n + 1) / 2;
}

console.log(sumToVar3(100))

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// @ts-ignore
function factorial(n: number) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n-1)
}

console.log('task 5.2 ====>',factorial(5))

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// @ts-ignore
function fib(n: number) {
    if (n <= 1) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

console.log('task 5.3 ====>',fib(3))
console.log(fib(7))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};