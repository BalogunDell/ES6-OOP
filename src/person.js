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

class Teacher extends Person {
    constructor(name, gender, age, address, phoneNumber, teacherID){
      super(name, gender, age, address, phoneNumber);
      this.teacherID = teacherID;
      this.teacherSubjects = [];
    }
    
    displayTeacherInfo() {
      console.log(`Name: ${this.name}\nAge: ${this.age}\nPhone Number: ${this.phoneNumber}\nTeacher ID: ${this.teacherID}\nSubjects: ${this.teacherSubjects}`); 
    }
    
    //add subject
    addSubject(subjects) {
        if(Array.isArray(subjects)){
            this.teacherSubjects = this.teacherSubjects.concat(subjects);
        } else {
          this.teacherSubjects.push(subjects);
        }
    }
    
    //Remove Subjects
    removeSubjects(subjectIndex) {
        if(subjectIndex < 0  || subjectIndex >= this.teacherSubjects.length){
          // console.log(subjectIndex);
          console.log('\nInvalid subjects\n');
        } else {
          this.teacherSubjects.splice(subjectIndex, 1);
        }
    }
    
}



console.log('\n\nStudent Class');
const student1 = new Student('abbey', 'male', 30, 'lagos', '0909090', '13493', 3);
student1.displayStudentInfo();
student1.promoteStudent();
console.log('\nAfter Promotion\n');
student1.displayStudentInfo();


const teacher1 = new Teacher('Wale', 'Male', 40, 'Andela', '0908883', 'TCH101');

teacher1.addSubject('French');
teacher1.addSubject(['Mathematics' , 'Biology']);
teacher1.displayTeacherInfo();
teacher1.removeSubjects(-1);


console.log('\nAfer Failed Subject Removal\n');
teacher1.displayTeacherInfo();
teacher1.removeSubjects(1);

console.log('\nAfer Successful Subject Removal\n');
teacher1.displayTeacherInfo();



module.exports = {
    Person,
    Student,
    Teacher
}