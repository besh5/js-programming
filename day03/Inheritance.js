
class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(this.name + " is eating.");
    }

}

class Student extends Person{
    //attributes: name, age, grade
    //methods: constructor(), study(), eat()
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }

    study(){
        console.log(this.name + " is studying.");
    }
}

class Teacher extends Person{
    //attributes: name, age, salary
    //methods: constructor(), teach(), eat()
    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }

    teach(){
        console.log(this.name + " is teaching.");
    }

    
}

let student1 = new Student("Alice", 20, "A");
console.log(student1);
