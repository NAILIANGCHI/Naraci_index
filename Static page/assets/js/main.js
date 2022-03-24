function xingqi() 
{ 
var a = new Date() 
var myxingqi=a.getDay() 
var b 
switch(myxingqi) 
{ 
case 0:b="星期日";break; 
case 1:b="星期一";break; 
case 2:b="星期二";break; 
case 3:b="星期三";break; 
case 4:b="星期四";break; 
case 5:b="星期五";break; 
case 6:b="星期六";break; 
default:b="系统错误，无法读取日期！"; 
} 
document.write(b) 
} 
xingqi() 

// var kebiao = new Array();
// mon[3] = "毛概","体育","英语","数学";
// tue[2] = "web前端","web前端";
// wed[3] = "形式政治","数学","英语";
// thu[3] = "web前端","web前端","毛概";
// Fri[0] = "今天没有课哦！";
// sat[2] = "马克思","马克思";

