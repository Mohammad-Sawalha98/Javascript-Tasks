 
 
 
 async function InfoOfUsers(){

 const name =await fetch("https://www.breakingbadapi.com/api/characters");
 const x= await name.json();
// console.log(name);
// console.log(x);
 for(i=0;i<x.length;i++){

   document.getElementById("select").innerHTML+= ("<option value='" + x[i].name + "'>"+ x[i].name +"</option><br>");


 };



 }
 InfoOfUsers();


 async function hello(){
  const hi =await fetch("https://www.breakingbadapi.com/api/characters");
  const bye= await hi.json();

let select = document.getElementById('select');//net
        let value2 = select.options[select.selectedIndex].value;// bulit in function we can make it with for loop

console.log(value2);

for(i=0;i<bye.length;i++){

if(value2==bye[i].name){
document.getElementById("pic").src=bye[i].img;
}

}
 } 
