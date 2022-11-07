/* Task 1*/
// var x = 5 ;
// var y = 7 ;

// if ( x > y ){
// document.write(x) ;

// }
// else{
//     document.write(y) ;
// }



// /* Task 2 */ 
// var x = 5;
// var y = -4;
// var z = 2;
// var r = x * y *z ; 

// if (r>0){
//     function myFunction() {
//         alert("the sign is +") };


// }
// else{
//     function myFunction() {
//         alert("the sign is -") };

// }



// /* Task 3 */ 

// var a=5;
// var b=4;
// var c=3;
// if (a>b && a>c && b>c) {
//     function order() {
//         alert("a b c") };

// }
// else if (b>a && b>c && c>a){
//     function order() {
//         alert("b c a") };

// }
// else if (c>b && c>a && b>a){
//     function order() {
//         alert("c b a") };

// }



// if to switch

// let mark =80;




// switch (mark) {
   

//     case  (mark<0 && mark > 100):
//         document.write("Invalid Entry")
//         break;
//     case  (0 ) :
//         document.write("Fail")
//         break;

//     case (1) :
//         document.write("D")
//         break;


//     case (2):
//         document.write("C")
//         break;

//     case (3) :
//         document.write("B")
//         break;

//     case (4) :
//         document.write("A")
//         break;

//     case (5) :

//         document.write("A+")
//         break;

       
       
// }

// let color ="red";




// switch (color) {


//     case "red":
//         document.write("red");
//         break;
//     case "blue":
//         document.write("blue");
//         break;

//     case   "green" :
//         document.write("green");
//         break;


//     case "yellow"  :
//         document.write("yellow");
//         break;

//     case "grey"  :
//         document.write("grey");
//         break;

//     default :
//         document.write("choose a color");

// }
// var x=5;
// document.write(typeof(x)) ;

document.write("task 1" + "<br>");
let text = "";
let i = 0
for ( ; i < 5; ) {
  text += "The number is " + i + "<br>";
  i++;
  if (i==2)
  break
}
document.write(text) ;


document.write("task 2" + "<br>");

let hi = ""
let z = 0;

do {
  hi += "<br>The number is " + z;
  z++;
}
while (z < 6);  
document.write(hi);
