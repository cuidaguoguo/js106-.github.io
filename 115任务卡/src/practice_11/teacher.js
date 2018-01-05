import Person from "../../src/practice_10/person.js";
class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        if (this.klasses) {
            let teachClass = [];
            for (let i in this.klasses) {
                teachClass.push(this.klasses[i].number);
            }
            return super.introduce() + " I am a Teacher. I teach Class " + teachClass + ".";
        } else {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
    }
}
module.exports = Teacher;
