/**
 * Created by Administrator on 2017/11/16.
 */
function calculatescore() {
    var score=0;
    var fillblock=["统一建模语言","封装性","继承性","多态性"];
    var aLi = document.querySelectorAll('.fillblanks1');
    for(var i=0;i<fillblock.length;i++){
        if(aLi[i].value===fillblock[i]){
            score+=5;
        }
    }
    var userChoice=[];
    var userchoice1=[];
    var userchoice2=[];
    var Choice=["B","A",["A","B","D"],["A","B","C"],"false","true"];
    var choice1=$('input:radio[name="textbox"]:checked').val();
    userChoice.push(choice1);
    var choice2=$('input:radio[name="textbox1"]:checked').val();
    userChoice.push(choice2);
    var choice3=document.getElementsByName("checkbox1");
    for (var j=0;j<choice3.length;j++){
        if(choice3[j].checked){
            userchoice1.push(choice3[j].value);
        }
    }
    userChoice.push(userchoice1);
    var choice4=document.getElementsByClassName("inputbox1");
    for (var k=0;k<choice4.length;k++){
        if(choice4[k].checked){
            userchoice2.push(choice4[k].value);
        }
    }
    userChoice.push(userchoice2);
    var choice5=$('input:radio[name="radio1"]:checked').val();
        userChoice.push(choice5);
    var choice6=$('input:radio[name="radio2"]:checked').val();
        userChoice.push(choice6);
    for(var p=0;p<Choice.length;p++){
        if(Choice[p]===userChoice[p]){
            score+=10;
        }
    }
    var text=document.getElementById("text").value;
    if(text=="模型是对现实世界的简化和抽象。模型是对所研究的系统、过程、事物或是概念的一种表达形式。可以是物理实体；可以是某种图形；或是一种数学表达式。"){
        score+=20;
    }
    swal({
        title: "最后成绩为：",
        text: score,
        type: "success"
    });
}
