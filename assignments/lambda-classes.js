// CODE here for your Lambda Classes

class Person {
    constructor(attrPers) {
        this.name = attrPers.name,
            this.age = attrPers.age,
            this.location = attrPers.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attrInst) {
        super(attrInst);
        this.specialty = attrInst.specialty,
            this.favLanguage = attrInst.favLanguage,
            this.catchPhrase = attrInst.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject} with ${this.name}!`;
    }
    grade(Student, subject){
        return `${Student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attrStu) {
        super(attrStu);
        this.previousBackground = attrStu.previousBackground,
            this.className = attrStu.className,
            this.favSubjects = attrStu.favSubjects
    }
    listsSubjects() {
        array.forEach(this.favSubjects)
    }
}


const brit = new Instructor({
    name: 'Brit',
    location: 'Ottawa',
    age: 31,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `C-eh-N-eh-D-eh spells Canada!`
});

const jerry = new Student({
    name: 'Jerry',
    location: 'Houston',
    age: 19,
    previousBackground: 'Middle School Student',
    className: 'JS 102',
    favSubjects: ['english', 'math', 'programming']
});

const franklin = new Student({
    name: 'Franklin',
    location: 'Dallas',
    age: 24,
    previousBackground: 'WhatABurger Emp',
    className: 'JS 101',
    favSubjects: ['pottery', 'math', 'programming']
});


  console.log(brit.demo('Javascript-IV'));
  console.log(jerry.listsSubjects());