// Task 1
// const day = 6.5;
// switch (day) {
//     case 1:
//         console.log('Pirmadienis');
//         break;
//     case 2:
//         console.log('Antradienis');
//         break;
//     case 3:
//         console.log('Treciadienis');
//         break;
//     case 4:
//         console.log('Ketvirtadienis');
//         break;
//     case 5:
//         console.log('Penktadienis');
//         break;
//     case 6:
//         console.log('Sestadienis');
//         break;
//     case 7:
//         console.log('Sekmadienis');
//         break;
//     default:
//         console.log('Tokios dienos nera');
//         break;
// }

// Task 2
// let grade = 'A';

// switch (grade) {
//     case 'A':
//         grade = 'Good job';
//         break;
//     case 'B':
//         grade = 'Pretty good';
//         break;
//     case 'C':
//         grade = 'Passed';
//         break;
//     case 'D':
//         grade = 'Not so good';
//         break;
//     case 'F':
//         grade = 'Failed';
//         break;
//     default:
//         grade = 'Unknown grade'
// }

// console.log(grade);

// Task 3
// const fruit = "Pineapple";

// switch (fruit) {
//   case "Apple":
//   case "Banana":
//   case "Orange":
//     console.log("Skanu!");
//     break;
//   case "Pineapple":
//     console.log("Neskanu");
//     break;
//   default:
//     console.log("Tokio maisto nevalgau");
// }

// Task 4
// const fruit = 'Orange';

// if (fruit === 'Apple' || fruit === 'Banana' || fruit === 'Orange') {
//     console.log('Skanu!');
// } else if (fruit === 'Pineapple') {
//     console.log('Neskanu');
// } else console.log('Tokio maisto nevalgau');

// Task 5

const fruits = ['Apple', 'Banana', 'Orange', 'Pineapple'];
const persons = [
    {
        id: 1,
        firstName: 'Jonas'
    },
    {
        id: 2,
        firstName: 'Petras'
    },
    {
        id: 3,
        firstName: 'Ona'
    }
];

// Includes

// const check = persons.map(person => person.id).includes(1);
// console.log(check);

// const filteredPersons = persons.filter(person => person.id === 2 && person.firstName === 'Petras');
// console.log(filteredPersons);

// const check2 = fruits.includes('Apple');
// console.log(check2);

// push() ideda i masyvo pabaiga

// fruits.push('Blueberry');
// persons.push({ id:4, firstName: 'Edvardas' });
// console.log(fruits);
// console.log(persons);

// Unshift() ideda i masyvo pradzia

// fruits.unshift('Cherry');
// persons.unshift({ id:0, firstName: 'Arnas' });
// console.log(fruits);
// console.log(persons);


// Array.isArray() tikrina ar tai yra masyvas
const isArray = Array.isArray(fruits);
console.log(isArray);

const data = {
    id: 1,
    firstName: 'Arnas'
};

if('firstName' in data) {
    console.log('Yra');
} else console.log('Nera');