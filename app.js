// Q01
//  Q02
// Q03
var string = ["xzy","abc","omamah"];
//  Q04
var numbers =[1,2,3,4];
// Q05
var bool =[true,false];
// Q06
var mix = ["abc",undefined,12,true];
//  Q07
var qual =[ "SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"
  ];
document.write("QUALIFICATIONS:<br>");
document.write("1)"+ qual[0]  +"<br>  2)" +qual[1] +"<br> 3)" +qual[2] +"<br> 4)" + qual[3]+" <br> 5)"+qual[4]+"<br> 6)"+qual[5]+"<br> 7)"+qual[6]+"<br> 8)"+qual[7]);
// Q08
var students=["MICHEAL" ,"JOHN", "TONY"];
var score =[230,320,480];
var per =["46%","64%","96%"];
document.write(" <br> score of "+ students[0]+ " is" +score[0] + " Persentage: "+per[0] +"<br>");
document.write(" score of "+ students[1]+ " is" +score[1] + " Persentage: "+per[1] +"<br>");
document.write(" score of "+ students[2]+ " is" +score[2] + " Persentage: "+per[2] +"<br>");
// Q09
var color=["red","yellow", "blue", "green"];
var coloruser=prompt("Add color");
color.unshift( coloruser);
var coloruser1=prompt("Add color");
color.push(coloruser1);
document.write(color);
 color.unshift("purple","green")
document.write(color);
 color.shift();
 color.pop();
document.write(color)
var indexno = prompt("WHICH INDEX NO YOU WANT TO ADD COLOR");
var newColor = prompt("WHICH COLOR YOU WANT TO ADD");
color.splice(indexno,0,newColor);
document.write(color);
var del=prompt("enter index no you want to delete color");
var quan=prompt("how many color");
color.splice(del,quan);
document.write(color)
// Q10
var as=[24,1,50,40]
document.write("SCORE OF STUDENTS : " +as)
var as1= as.sort()
document.write( " ORDER SCORE OF STUDENTS : " +as1)
// Q11
var cities= ["karachi","lahore","multan"];
document.write("Cities list :<br>"+cities)
var sel = cities.slice(1,3)
document.write(" Selected Cities list :<br>"+sel)
// Q12
var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join(""); 
console.log(result);
