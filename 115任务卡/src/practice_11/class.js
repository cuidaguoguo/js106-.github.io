class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student) {
        if (student.klass.number === this.number) {
            this.leader = student;
        }else{
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass = this;
    }
    registerJoinListener(student){
        if(student.klass === this){
            console.log("I am Tom. I know Jerry has joined Class 2")
        }
    }
    registerAssignLeaderListener(student){
            this.leader = student;
            console.log("I am Tom. I know Jerry become Leader of Class 2.")
        }

}
module.exports = Class;

