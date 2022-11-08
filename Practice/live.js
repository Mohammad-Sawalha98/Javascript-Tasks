


//string methods

let text = "Yazeed abu AL-zoooz";
document.write(text.length);//19




document.write("<br> " + "<br>" + "<br>" + "<br>");

let fruits =  "Apple, Banana, Kiwi";

let part = fruits.slice(7,13);
document.write(part)// Banana

document.write("<br> " + "<br>" + "<br>" + "<br>");

//array

let letters="a,b,c,d,e";
let myarray =letters.split(",");//myarray=["a","b","c","d","e"]
document.write(myarray[2]);

document.write("<br> " + "<br>" + "<br>" + "<br>");

//object

const person = {
    firstName:"Rama", 
    lastName:"Sawalha", 
    age:"21", 
    eyeColor:"blue",
    myMethod: function(){
        return this.firstName + " " +  this.lastName;
    }
    };
    
    
    person.firstName="Hassan";
    document.write(person.myMethod());
    
    
    document.write("<br> " + "<br>" +  "<br>" + "<br>");

//function

function nisreen(a,b){
    return a*b
}

document.write(nisreen(5,6));