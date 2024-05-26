//Task
const students = ['Ibrahim', 'Aysu', 'Tural', '9', 0, true, undefined, 'Isa', 'Elmir', 'Ferhad', 'Ramil']

console.log('1. Loop values of students (for)');
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
console.log(` 
2. Loop values of students (for_of)`);

for (student of students){
    console.log(student);
}

console.log(` 
3. Loop only strings values of studens (for)`);

for(i = 0; i < students.length; i++) {
    if(typeof students[i ] === 'string'){
        console.log(students[i]);
    }
    else{
        continue
    }
}

console.log(` 
4. Loop only number values of studens (for_of)`);

for(number of students){
    if(typeof number == 'number'){
        console.log(number);
    }
    else{
        continue
    }
}

console.log(` 
5. Loop only true values of studens (for)`);

for(i = 0; i < students.length; i++) {
    if(students[i]){
        console.log(students[i]);
    }
    else{
        continue
    }
}

const numbers = [4, 7, 8, 12, 22, 9, 12]

console.log(` 
6. Loop only even values of numbers (for)`);

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0){
        console.log(numbers[i]);
    }
    else{
        continue
    }
}

console.log(` 
7. Loop only odd values of numbers (for_of)`);

for(oddNumber of numbers) {
    if(oddNumber % 2 == 1){
        console.log(oddNumber);
    }
    else{
        continue
    }
}

console.log(` 
8. Sum values of numbers (for)`);

let sum = 0
for(i = 0; i < numbers.length; i++) {    
    sum += numbers[i]
}
console.log(sum);

console.log(` 
9. Mult values of numbers (for_of)`);

mult = 1
for(number of numbers){
    mult *= number
}
console.log(mult);

console.log(` 
10. Show all values except 12 (for/continue)`);

for(i = 0; i < numbers.length; i++){
    if(numbers[i] == 12){
        continue
    }
    else{
        console.log(numbers[i]);
    }
}

console.log(` 
11. Sum values of numbers (reduce)`);

let result = numbers.reduce((sum, prev) => sum + prev, 0)
console.log(result);

const users = [
    {
        id: 1,
        name: 'Isa',
        age: 19,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Aysu',
        age: 20,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Ramil',
        age: 13,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Tural',
        age: 33,
        gender: 'male'
    },
    {
        id: 6,
        name: 'Ayxan',
        age: 25,
        gender: 'male'
    },
]

console.log(` 
12. Sum age of users (reduce)`);

let res = users.reduce((sum, prev) => sum + prev.age, 0)
console.log(res);

console.log(` 
13. Mult age of users (reduce)`);

let resi = users.reduce((mult, prev) => mult * prev.age, 1)
console.log(resi);

console.log(` 
14. Console keys of user(for_in)`);

for(key in users[0]){
    console.log(key);
}

console.log(` 
15.Console values of user(for_in)`);

for(value in users[0]){
    console.log(users[0][value]);
}