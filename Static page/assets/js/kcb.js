function riqi() 
{ 
var a = new Date() 
var myxingqi=a.getDay() 
var b 
switch(myxingqi) 
    { 
      case 0:x="第三节：计算机网络<br>第四节：计算机网络<br>第五节：计算机网络";
      break; 
      case 1:x="第一节：毛概<br>第二节：体育<br>第三节：英语<br>第四节：数学"; 
      break; 
      case 2:x="第一节:web前端<br>第二节：web前端"; 
      break; 
      case 3:x="第一节：形式政治<br>第三节：数学<br>第四节：英语";
      break; 
      case 4:x="第一节：web前端<br>第二节：web前端<br>第三节：毛概";
      break; 
      case 5:x="今天没有课哦！";
      break; 
      case 6:x="第一节：马克思<br>第二节：马克思";
      break; 
    }
    document.getElementById("riqi").innerHTML=x;
}
riqi();