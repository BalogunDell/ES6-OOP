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

const person1 = new Person('Abbey','Male', 30,'Anthony','0703376565');
console.log(person1.phoneNumber);