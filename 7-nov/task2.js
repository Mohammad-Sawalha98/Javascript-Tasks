var x=prompt("inter the first number" , 0  ); 
var y=prompt("inter the second number" , 0 ) ;
function largestNumber (x , y){
  
 
    if(x>y){
return x

}
else{
    return y 
}

}
document.write("the two numbers are:" + x + "and" + y + " and the largest number is" +  largestNumber(x,y))