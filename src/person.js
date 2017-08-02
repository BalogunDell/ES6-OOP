 /**
  * @class Person
  * @classdesc creates a new person instance
  */
 class Person {
    /**
     * initializes the class props
     * @param {String} name 
     * @param {String} gender 
     * @param {Number} age 
     * @param {String} address 
     * @param {String} phoneNumber 
     */
    constructor(name, gender, age, address, phoneNumber) { 
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    
    /**
     * returns name 
     * @return {String} name 
     */
    getName() {
       return this.name; 
    }

    /**
     * Sets a new name
     * @param {String} name
     * @return {Void}
     */
    setName(name) {
        this.name = name;
    }
}

 /**
  * @class Student
  * @classdesc creates a new Student instance and extends Person class
  */
class Student extends Person {

    /**
     * 
     * @param {String} name 
     * @param {String} gender 
     * @param {Number} age 
     * @param {String} address 
     * @param {String} phoneNumber 
     * @param {String} studentID 
     * @param {Number} studentClass 
     */
    constructor(name, gender, age, address, phoneNumber, studentID, studentClass) {
        super(name, gender, age, address, phoneNumber);
        this.studentID = studentID;
        this.studentClass = studentClass;
    }
    
    /**
     * Returns student information
     * @return {String} Student Information
     */
    displayStudentInfo() {
      return `Name: ${this.name}\nAge: ${this.age}
        \nPhone Number: ${this.phoneNumber}
        \nStudent ID: ${this.studentID}
        \nStudent Class: ${this.studentClass}`;  
    }
    
    /**
     * Promotes student by increasing the class
     * @return {Void}
     */
    promoteStudent() {
        this.studentClass += 1; 
    }
}

/**
 * @class Teacher
 * @classdesc creates a new teacher instance and extends the Person class 
 */
class Teacher extends Person {
    /**
     * 
     * @param {String} name 
     * @param {String} gender 
     * @param {Number} age 
     * @param {String} address 
     * @param {String} phoneNumber 
     * @param {String} teacherID  
     */
    constructor(name, gender, age, address, phoneNumber, teacherID){
      super(name, gender, age, address, phoneNumber);
      this.teacherID = teacherID;
      this.teacherSubjects = [];
    }
    
    /**
     * Returns Teacher's information
     * @return {String} Teacher's Information
     */
    displayTeacherInfo() {
      return `Name: ${this.name}
        \nAge: ${this.age}
        \nPhone Number: ${this.phoneNumber}
        \nTeacher ID: ${this.teacherID}
        \nSubjects: ${this.teacherSubjects}`; 
    }
    
    /**
     * Adds subject to the class member of the teacher's class
     * @param {Array | String} subjects
     * @return {Void}
     */
    addSubject(subjects) {
        if(Array.isArray(subjects)){
            this.teacherSubjects = this.teacherSubjects.concat(subjects);
        } else {
          this.teacherSubjects.push(subjects);
        }
    }
    
    /**
     * Removes subject from the teacher's list of subjects
     * @param {Number} subjectIndex
     * @return {Array} teacher's subjects
     */
    removeSubjects(subjectIndex) {
        if (subjectIndex < 0  || subjectIndex >= this.teacherSubjects.length) {
          return 'Invalid subjects';
        } else {
          this.teacherSubjects.splice(subjectIndex, 1);
        }
    }
    
}

module.exports = {
    Person, Student, Teacher
};