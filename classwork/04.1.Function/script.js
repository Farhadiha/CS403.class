
// Task
const arr1 = [5, 8, 2, 11, 9]
const arr2 = [50, 8, 25, 12, 19]

// 1.calcMult of arrays in function

// function calcMult(anyArray) {
//     mul = 1
//     anyArray.map(item => mul *= item)
//     console.log(mul);
// }

const calcMult = (anyArray) => {
    mul = 1
    anyArray.map(item => mul *= item)
    console.log(mul);
}

calcMult(arr1)
calcMult(arr2)

// 2.get only odd values 

// function oddValue(anyArray) {
//     let myNumber = anyArray.filter(item => item % 2 == 1)
//     console.log(myNumber);
// }

const oddValue = (anyArray) => {
    let myNumber = anyArray.filter(item => item % 2 == 1)
    console.log(myNumber);
}

oddValue(arr1)
oddValue(arr2)

// 3.get only even values

// function evenValue(anyArray) {
//     let myNumber = anyArray.filter(item => item % 2 == 0)
//     console.log(myNumber);
// }

const evenValue = (anyArray) => {
    let myNumber = anyArray.filter(item => item % 2 == 0)
    console.log(myNumber);
}

evenValue(arr1)
evenValue(arr2)


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
        age: 30,
        gender: 'male'
    },
]

// 4.write function that return name of users

// function userName (anyObj) {
//     let objName = anyObj.map(item => item.name)
//     console.log(objName);
// }

const userName = (anyObj) => {
    let objName = anyObj.map(item => item.name)
    console.log(objName);
}

userName(users)

// 5.write function that return gender of users

// function userGender (anyObj) {
//     let objGender = anyObj.map(item => item.gender)
//     console.log(objGender);
// }

const userGender = (anyObj) => {
    let objGender = anyObj.map(item => item.gender)
    console.log(objGender);
}

userGender(users)

// 6.write function that return age of users

// function userAge (anyObj) {
//     let objAge = anyObj.map(item => item.age)
//     console.log(objAge);
// }

const userAge = (anyObj) => {
    let objAge = anyObj.map(item => item.age)
    console.log(objAge);
}

userAge(users)

// 7.write function that return only male of users

// function userGenderMale (anyObj) {
//     let objGenderMale = anyObj.filter(item => item.gender == "male")
//     console.log(objGenderMale);
// }

const userGenderMale = (anyObj) => {
    let objGenderMale = anyObj.filter(item => item.gender == "male")
    console.log(objGenderMale);
}

userGenderMale(users)

// 8.write function that return users whose age is greater than 20 

// function userAge20 (anyObj) {
//     let objAge20 = anyObj.filter(item => item.age > 20)
//     return objAge20
// }

const userAge20 = (anyObj) => {
    let objAge20 = anyObj.filter(item => item.age > 20)
    return objAge20
}

console.log(userAge20(users))

// 9.write function that take firstName,lastName,age as parametr then call and
//  give these values to function(age can be empty,give default value)

// function getValue(firstName, lastName, age = '---') {
//     return `${firstName}` + `${lastName}` + `${age}`
// }

const getValue = (firstName, lastName, age = '---') => {
    return `${firstName} ${lastName} ${age}`
}

console.log(getValue("Farhad", "Hajiyev", 19));

// function info(anyObj, age = 0) {
//     return anyObj.name + ' ' + anyObj.gender + ' ' + anyObj.age
// }

// console.log(users[0]);