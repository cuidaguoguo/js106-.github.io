module.exports = function main(inputs) {
    var datbase = require('./datbase'); //引用datbase.js
    var loadAllItems = datbase.loadAllItems();
    var loadPromotions = datbase.loadPromotions();
    var prices1=0;
    var prices2=0;
    var trade = []; //购买的物品和数量
    var number = [];//购买的数量
    var bill = [];//比对账单
    var Preferentialbill = [];//优惠账单
    var Preferentialbill1 = [];//优惠账单
    var Preferentialbill2 = [];//优惠账单

    //得出购买的物品和数量
    for (var i=0;i<inputs.length;i++){
        if(inputs[i].indexOf('-') > 0){
            trade.push({barcode:inputs[i].split("-")[0],count:parseInt(inputs[i].split("-")[1])});
        }
        else {
             trade.push({barcode:inputs[i],count:1});
        }
    }
    // console.log(trade);
     //得出每一样的物品和数量
    for(var j=0;j<trade.length;){
        var pc = 0;
        var counts = 0;
        for(var k=0;k<trade.length;k++){
            if (trade[j].barcode===trade[k].barcode){
                  counts+=trade[j].count;
                  pc++;
            }
        }
        number.push({barcode:trade[j].barcode,count:counts});
        j+=pc;
    }
    // console.log(number)
    //比对账单
    for (var a=0;a<loadAllItems.length;a++){
        for(var b=0;b<number.length;b++){
            if(loadAllItems[a].barcode === number[b].barcode){
                var price=loadAllItems[a].price*number[b].count;
                bill.push({barcode:number[b].barcode,name:loadAllItems[a].name,count:number[b].count,price:price,danprice:loadAllItems[a].price,unit:loadAllItems[a].unit});
            }
        }
    }
    // console.log(bill);
    //优惠账单
    for(var ff=0;ff<bill.length;ff++){
        for(var mm=0;mm<3;mm++){
            if(loadPromotions[0].barcodes[mm] === bill[ff].barcode && bill[ff].count>2){
                 // bill[ff].count-=1;
                 Preferentialbill2.push({barcode:bill[ff].barcode,name:bill[ff].name,unit:bill[ff].unit});
            }
        }
    }
    for(var f=0;f<bill.length;f++){
        for(var m=0;m<3;m++){
            if(loadPromotions[0].barcodes[m] === bill[f].barcode && bill[f].count>2){
                 bill[f].count--;
            }
        }
        Preferentialbill.push({barcode:bill[f].barcode,count:bill[f].count,name:bill[f].name,price:bill[f].count*bill[f].danprice});
    }
    for (var l=0;l<loadAllItems.length;l++){
        for(var z=0;z<Preferentialbill.length;z++){
            if(loadAllItems[l].barcode===Preferentialbill[z].barcode){
                 var price1 = loadAllItems[l].price*Preferentialbill[z].count;
                 Preferentialbill1.push({barcode:Preferentialbill[z].barcode,name:loadAllItems[l].name,count:Preferentialbill[z].count,price:price1,danprice:loadAllItems[l].price})
            }
        }
    }
    // console.log(Preferentialbill2);
    //拼接字符串
    var expectText = '***<没钱赚商店>购物清单***\n';
    for(var v=0;v<bill.length;v++){
         expectText+="名称："+bill[v].name+"，数量："+bill[v].count+bill[v].unit+",单价："+parseFloat(bill[v].danprice).toFixed(2)+"(元) ，"+"小计："+parseFloat(Preferentialbill1[v].price).toFixed(2)+"(元)\n";
    }
    expectText += '----------------------\n' +
            '挥泪赠送商品：\n';
    for (var s=0;s<Preferentialbill2.length;s++){
        expectText+="名称："+Preferentialbill2[s].name+"，数量："+"1"+Preferentialbill2[s].unit+"\n";
    }
    expectText += '----------------------\n' ;
    for(var ss=0;ss<Preferentialbill.length;ss++){
        var prices1=prices1+ Preferentialbill[ss].price;
    }
    for(var dd=0;dd<bill.length;dd++){
        var prices2=prices2+bill[dd].price;
    }
    var prices3 = parseFloat(prices2).toFixed(2)-parseFloat(prices1).toFixed(2);
    expectText+="总计："+parseFloat(prices1).toFixed(2)+"(元)\n";
    expectText+="节省："+parseFloat(prices3).toFixed(2)+"(元)\n";
    expectText += '----------------------\n' ;
    console.log(expectText);
     return expectText;
};