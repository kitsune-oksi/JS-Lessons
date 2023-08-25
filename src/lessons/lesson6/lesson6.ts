console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface studentStruct {
    name: string,
    surname: string,
    group: number,
    academicPerformance: [number, number, number, number, number]
}

class Student implements studentStruct {
    public average: number

    constructor(
        public name: string,
        public surname: string,
        public group: number,
        public academicPerformance: [number, number, number, number, number]
    ) {
        this.average = this.getAverage()
    }

    getAverage() {
        return this.academicPerformance.reduce((acc, number) => acc + number, 0) / this.academicPerformance.length
    }
}

const student1 = new Student('Ann', 'Smith', 1, [3, 2, 4, 5, 3]);
const student2 = new Student('Sasha', 'Bring', 2, [5, 4, 4, 5, 4]);
const student3 = new Student('Dora', 'Links', 1, [4, 5, 4, 3, 4]);

const students = [student1, student2, student3];

function compareAcademicPerformance(a: Student, b: Student) {
    let aAver = a.getAverage();
    let bAver = b.getAverage();
    return aAver - bAver;
}

const averageStudents = students.sort(compareAcademicPerformance)

function getGoodStudents(students: Student[]) {
    let goodStudents: Student[] = [];
    students.forEach((el) => {
        if (!el.academicPerformance.some(el => el < 4)) {
            goodStudents.push(el)
        }
    })
    return goodStudents
}

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class ExampleClass {
    constructor(
        public a: string = 'a',
        public b: string = 'b'
    ) {
    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

type CustomerType = 'surname' | 'name' | 'address' | 'accountNumber'

class Customer {
    constructor(
        private surname: string,
        private name: string,
        private address: string,
        private accountNumber: number
    ) {
    }

    getInfo() {
        return `name: ${this.name} surname: ${this.surname} address: ${this.address} accountNumber: ${this.accountNumber}`
    }

    getField(field: CustomerType): string | number {
        return this[field]
    }

    setField(field: CustomerType, newValue: string) {
        if (field === 'accountNumber') {
            this[field] = Number(newValue)
        } else if (field === 'surname' || field === 'name' || field === 'address') {
            this[field] = newValue
        } else {
            throw new Error('Property does not exist')
        }
    }
}

const customer1 = new Customer('Smith', 'Ann', 'NY', 234432)
console.log(customer1.getField("surname"));
customer1.setField('surname', 'Kitik')
console.log(customer1.getField("surname"));


// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};