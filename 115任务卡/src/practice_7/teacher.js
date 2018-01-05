import Person from "../../src/practice_2/person.js";
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+" I am a Teacher. I teach Class "+this.klass.number+".";
        } else{
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }
    }
    introduceWith(studentJerry){
        if(this.klass === studentJerry.klass){
            return super.introduce()+" I am a Teacher. I teach Jerry."
        }else{
            return super.introduce()+" I am a Teacher. I don't teach Jerry."
        }
    }
}
module.exports = Teacher;
