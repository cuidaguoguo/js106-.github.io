function main() {
    console.log('1. 添加学生',
                 '2. 生成成绩单',
                 '3. 退出');

var answer = require('readline-sync').question("请输入你的选择（1～3）：\n");
    switch(answer){
            case '1':
                addStudentInfo();
                break;
            case '2':
                printInfor();
                break;
            case '3':
                process.exit(1);
    }
}
 //添加学生的函数
function addStudentInfo(){
	var Info = require('readline-sync').question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n");

	if(judgeformat(Info)){
		console.log("\n\n学生"+ Info.split(",")[0] + "的成绩被添加\n\n");
	}
	main();
}
 //判断输入学生信息的格式
var studens = [];  //存放学生信息
function judgeformat(Info) {
    var Storeinformation = Info.split(",");
    if(Storeinformation.length != 8){
		var Infos = require('readline-sync').question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n");
		judgeformat(Infos);
	}else{
		var total = 0;
		for(var i = 4;i< 8 ;i++){
			total += parseInt(Storeinformation[i].split(":")[1]);
		}

		var average = total/4;

		var oneStudent = {};
		oneStudent["name"] = Storeinformation[0];
		oneStudent["studentId"] = Storeinformation[1];
		oneStudent["nation"] = Storeinformation[2];
		oneStudent["klass"] = Storeinformation[3];
		oneStudent["math"] = Storeinformation[4].split(":")[1];
		oneStudent["chinese"] = Storeinformation[5].split(":")[1];
		oneStudent["English"] = Storeinformation[6].split(":")[1];
		oneStudent["programme"] = Storeinformation[7].split(":")[1];
		oneStudent["average"] = average;
		oneStudent["total"] = total;

		studens.push(oneStudent);
		return true;
}
}
module.exports = main;