const user = {
    'first-name': "Farhad",
    lastName: "Hajiyev",
    age: 19,
    info: {
        city: "Baku",
        address: "I.Dadasov",
    },
    edu: {
        uni: "ASOIU",
        point: 620
    },
    work: null
    }

// user.lastName = "Zakirli"

// console.log(user["first-name"]);
// console.log(user.lastName)

let usr = {
    firstName: 'Ulfet',
    edu: {
        uni: "ASOIU"
    }
 }
let usr1 = {
    firstName: 'Zakir',
    edu: {
        uni: "ADA"
    }
}
let usr2 = { 
    firstName: 'Farid',
    edu: {
        uni: "ADAU"
    }
}



usr = user
usr1 = {... user}
usr2 = structuredClone(user)

console.log(user);
console.log(usr);
console.log(usr1);
console.log(usr2);



console.log(user["first-name"]);
console.log(user.lastName)