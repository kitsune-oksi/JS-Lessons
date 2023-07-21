console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

let pendingPromise = new Promise(() => {
    console.log('Promise is created');
})
console.log('=====> Task 01', pendingPromise);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let resolvePromise = new Promise((resolve) => {
    resolve()
    console.log('Promise Data');
})
console.log('=====>Task 02', resolvePromise);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

let regectedPromise = new Promise((resolve, reject) => {
    reject()
    console.log('Promise Error');
})
console.log('=====>Task 03', regectedPromise);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let resolveTimoutPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
        console.log('Promise is resolve!');
    }, 3000)
    console.log('Promise Data');
})
console.log('=====>Task 04', resolveTimoutPromise);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

let handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName: string) {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError(paramName: string) {
        console.log(`Promise is rejected with error: ${paramName}`);
    }
}

export const createPromiseHandle = () => {
    // @ts-ignore
    handlePromise.promise = new Promise((resolve, reject) => {
        // @ts-ignore
        handlePromise.resolve = resolve;
        // @ts-ignore
        handlePromise.reject = reject;
    });
    console.log('=====>Task 05', handlePromise.promise);
}

export const resolvePromiseHandle = () => {
    if (handlePromise.resolve) {
        // @ts-ignore
        handlePromise.resolve();
        // @ts-ignore
        handlePromise.onSuccess('{}')
    } else {
        console.log('Promise isn`t create')
    }
}

export const rejectPromiseHandle = () => {
    if (handlePromise.reject) {
        // @ts-ignore
        handlePromise.reject();
        handlePromise.onError('')
    } else {
        console.log('Promise isn`t create')
    }
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

let resolveTimoutNamePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('My name is');
    }, 1000)
})

const onSuccess = (param: any) => `${param} Oxi`;

const print = (param: any) => console.log(param);

resolveTimoutNamePromise
    .then(value => onSuccess(value))
    .then(newValue => print(newValue))

// Task 07
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let nameAnnaPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({name: "Anna"});
    }, 2000)
})

let agePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({age: 16});
    }, 3000)
})

let cityPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({city: ''});
    }, 4000)
})

const generalPromise = Promise.all([nameAnnaPromise, agePromise, cityPromise]);

generalPromise
    .then((reults => {
        console.log('=====>Task 7', Object.assign(reults[0], reults[1], reults[2]));
    })
)


// just a plug
export default () => {
};