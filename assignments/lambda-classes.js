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
        //return this.favSubjects;
        this.favSubjects.forEach (itemsInArray => console.log(itemsInArray));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(attrPM) {
        super(attrPM);
        this.gradClassName = attrPM.gradClassName,
        this.favInstructor = attrPM.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
    }
    debugsCode(Student,subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
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
    favSubjects: ['pottery', 'biology', 'Lambda DS']
});

const mike = new Student({
    name: 'Mike',
    location: 'Los Santos',
    age: 45,
    previousBackground: 'FIB consultant',
    className: 'JS 103',
    favSubjects: ['pottery', 'biology', 'Lambda DS']
});

const josh = new ProjectManagers({
    name: 'Josh',
    location: 'Utah',
    age: 35,
    gradClassName: 'CS1',
    favInstructor: brit
});

console.log(mike.speak());
console.log(brit.demo('Javascript-IV'));
console.log(brit.grade(mike, 'build week unit 2'));
jerry.listsSubjects();
console.log(franklin.PRAssignment('React Week 2'));
console.log(mike.sprintChallenge('Advanced Javascript'));
console.log(josh.standUp('#Web25_help'));
console.log(josh.debugsCode(franklin, 'Comp Sci 1'));
