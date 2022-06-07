const Student = {
    firstName: "M",
    lastName: "B",
    age: 18,
    skills: ['HTML', 'CSS', 'JS']
}

const newStudent = JSON.stringify(Student)
localStorage.setItem('student', newStudent);