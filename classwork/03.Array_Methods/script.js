// let a = 'farhad haciyev'

// console.log(a.toUpperCase().slice(0, 1) + a.slice(1, 6));

  const students = [
    {
        name: "Farhad",
        age: 19,
        gender: "Male"
    }
    ,
    {
        name: "Elmir",
        age: 18,
        gender: "Male"
    }
    ,
    {
        name: "Aysu",
        age: 20,
        gender: "Female"
    }
    ,
    {
        name: "Isa",
        age: 18,
        gender: "Male"
    }
    ,
    {
        name: "Turale",
        age: 16,
        gender: "Female"
    }

  ]




let sumAge = 0
let sumIndex = 0
let mult = 1
students.map((student) => sumAge += student.age)
students.map((student, index) => sumIndex += index)
let femage = students.filter((student) => student.gender == "Female")
femage.map((student) => mult *= student.age)
console.log(femage);


  console.log(students.map((student) => student.age));
  console.log(students.map((student) => student.gender));
  console.log(students.map((student) => student.name));  
  console.log(students.filter((student) => student.age >= 20));
  console.log(students.filter((student) => student.gender == "Female"));
  console.log(students.filter((student) => student.name.startsWith("I")));
  console.log(students.filter((student) => student.name.includes("r")));
  console.log(students.filter((student) => student.age % 2 == 1));
  console.log(students.filter((student) => student.age % 2 == 0));
  console.log(students.map((student, index) => index));
  console.log(students.filter((student, index) => index > 1 && index % 2 == 0));
  console.log("sum", sumAge);
  console.log("sum", sumIndex);
  console.log("mult", mult);
  


