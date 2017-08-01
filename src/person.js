 class Person {
    constructor(name, gender, age, address, phoneNumber) { 
        // console.log('person class');
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    getName() {
       return this.name; 
    }

    setName(name) {
        this.name = name;
    }
}

//Class student inheriting from the super class
class Student extends Person {
    constructor(name, gender, age, address, phoneNumber, studentID, studentClass) {
        super(name, gender, age, address, phoneNumber);
        this.studentID = studentID;
        this.studentClass = studentClass;
    }
    
    displayStudentInfo() {
      console.log(`Name: ${this.name}\nAge: ${this.age}\nPhone Number: ${this.phoneNumber}\nStudent ID: ${this.studentID}\nStudent Class: ${this.studentClass}`);  
    }
    
    promoteStudent() {
        this.studentClass += 1; 
    }
}

console.log('\n\nStudent Class');
const student1 = new Student('abbey', 'male', 30, 'lagos', '0909090', '13493', 3);
student1.displayStudentInfo();
student1.promoteStudent();
console.log('\nAfter Promotion\n');
student1.displayStudentInfo();