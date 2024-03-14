//id;firstName;lastName;age
const persons = [];
let inputData = prompt('Enter person data separate by ","');
while (inputData) {
    const arr = inputData.split(',');
    if (findPerson(persons, arr[0]) === -1) {
        const person = new Person(arr[0], arr[1].trim(),
            arr[2].trim(), arr[3]);
        persons.push(person);
    } else {
        alert(`Person with id: ${arr[0]} exists`);
    }
    inputData = prompt('Enter person data separate by ","');
}
printPersons(persons);
printStats(persons);

function findPerson(persons, id) {
    return persons.findIndex(p => p.id === +id);
}

function printPersons(persons) {
    if (persons.length) {
        let container = document.createElement("container");
        root.appendChild(container);
        persons.forEach(p => {
            let personData = document.createElement('p');
            let newPerson = document.createTextNode(p.toString());
            personData.appendChild(newPerson);
            container.appendChild(personData);
        });
    }
}

function printStats(persons) {
    if (persons.length) {
        const start = persons[0].age;
        const minAge = persons.reduce((min, p) => min <= p.age ? min : p.age, start);
        const maxAge = persons.reduce((max, p) => max <= p.age ? p.age : max, start);
        const sumAge = persons.reduce((sum,p)=> sum+p.age,0);
        const avgAge = sumAge/persons.length;
        const p = document.createElement("p");
        const stats = document.createTextNode(`minAge: ${minAge}, maxAge: ${maxAge}, sumAge: ${sumAge}, avgAge: ${avgAge}`);
        p.appendChild(stats);
        root.appendChild(p);
    }
}

function Person(id, firstName, lastName, age) {
    this.id = +id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.toString = function () {
        return `Id: ${this.id}, firstName: ${this.firstName}, lastName: ${this.lastName}, age: ${this.age}`
    }
}