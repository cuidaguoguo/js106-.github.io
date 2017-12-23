function main() {
    console.log('1. 添加学生',
                 '2. 生成成绩单',
                 '3. 退出');

var answer = require('cli-interact').question("请输入你的选择（1～3）：\n");
    switch(answer){
            case '1':
                addStudentInfo();
                break;
            case '2':
                printInfo();
                break;
            case '3':
                process.exit(1);
    }
}
 //添加学生的函数
function addStudentInfo(){
	var Info = require('cli-interact').question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n");
	var Name = Info.split(",");
	if(judgeformat(Info)){
		console.log("\n\n学生"+ Name[0] + "的成绩被添加\n\n");
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
//打印学生成绩单
function printInfo(){
	var transcript = require('cli-interact').question("请输入学生学号（格式： 学号, 学号,...），按回车提交：\n");
	if(judgetranscript(transcript)){
		console.log("\n\n学生"+ Name[0] + "的成绩被添加\n\n");
	}
	main();
}
//检查是否输入的是学号
function judgetranscript(Info) {
    var transcript = Info.split(",");
    for (var i = 0; i < transcript.length; i++) {
        if (isNaN(parseInt(transcript[i]))) {
            var Infos = require('cli-interact').question("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n");
            judgetranscript(Infos)

        }
    }
    var scoreList = "\n\n成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n";
    for (var i = 0; i < transcript.length; i++) {
        for (var j = 0; j < studens.length; j++) {
            if (studens[j].studentId == arr[i]) {
                scoreList += studens[j].name + "|" + studens[j].math + "|" + studens[j].chinese + "|" + studens[j].English + "|" + studens[j].programme + "|" + studens[j].average + "|" + studens[j].total + "\n";
                continue;
            }
        }
    }
    scoreList += getallAverages(studens);
    console.log(scoreList);
}
function getallAverages(Infos){
	console.log(Infos);
	var allAverage = 0;
	var list = [];
	for(var k = 0;k<Infos.length;k++){
		allAverage += parseInt(Infos[k].total);
		list.push(Infos[k].total);
	}
	allAverage = allAverage / Infos.length;

	list.sort();
	var midder = 0;
	if(list.length % 2 == 0){
		midder = (list[list.length/2-1] + list[list.length/2]) / 2;
	}else{
		var index = Math.ceil(list.length/2)
		midder = list[index-1];
	}

return "全班总分平均数："+ allAverage + "\n" + "全班总分中位数：" + median + "\n\n";
}
module.exports = main;