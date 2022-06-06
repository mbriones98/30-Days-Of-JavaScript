const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// EXERCISE 1

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp]= constants;
console.log(`The values are ${e}, ${pi}, ${gravity}, ${humanBodyTemp}, ${waterBoilingTemp}`);

let {width:w, height:h, area, perimeter=90} = rectangle;
console.log(w, h, area, perimeter);

// EXERCISE 2

for(const {name:n} of users) {
    console.log(n);
}

for(const {name:n, skills:s} of users) {
    if(s.length < 2) {
        console.log(n);
    }
}

// EXERCISE 3

for(const {name, capital, languages, population} of oldcountries) {
    console.log(name, capital, languages, population);
}

/*
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [,,jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);
*/

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

let {frontEnd, backEnd, dataBase, dataScience} = student.skills;
frontEnd = [...frontEnd, {skill: "Bootstrap", level: 8}];
backEnd = [...backEnd, {skill: "Express", level: 9}];
dataBase = [...dataBase, {skill: "SQL", level: 8}];
dataScience = [...dataScience, "SQL"];

student.skills = [frontEnd, backEnd, dataBase, dataScience];
console.log(student);