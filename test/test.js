const assert = require('chai').assert;
const app = require('../src/person.js');
console.log(app);

describe('Person', function(){
    it('Should initialize person with the right name', function(){
        let person1 = new app.Person('Abbey');
        assert.equal(person1.name, 'Abbey');
    });


    it('Should return the undefined', function(){
        let person1 = new app.Person('Shola');
        assert.equal(person1.setName('Wale'), undefined);
            
            it('Should return the set name', function(){
            assert.equal(person1.getName(), 'Shola');
        });
    });


    it('Should return new class of student', function(){
        let person1 = new app.Student('abbey', 'male', 30, 'lagos', '0909090', '13493', 3);
        assert.equal(person1.promoteStudent(), undefined);

            it('Should return the set name', function(){
            assert.equal(person1.studentClass, 4);
        });
    });


    it('Should update teacher subject and return undefined', function(){
        let person1 = new app.Teacher('Wale', 'Male', 40, 'Andela', '0908883', 'TCH101');
        assert.equal(person1.addSubject('Mathematics', 'English', 'Economics'), undefined);

        it('Should return list subjects', function(){
        assert.equal(person1.teacherSubjects, ['Mathematics', 'English', 'Economics']);

         }); 
    
    });

    it('Should update teacher subject and return undefined', function(){
        let person1 = new app.Teacher('Wale', 'Male', 40, 'Andela', '0908883', 'TCH101');
        assert.equal(person1.addSubject('Mathematics', 'English', 'Economics'), undefined);

        it('Should return updated subject list when one subject is removed', function(){
          assert.equal(person1.removeSubjects(2), ['Mathematics', 'English']);

         });
    });

    
});