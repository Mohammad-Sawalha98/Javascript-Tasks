async function get()
{
    const name =await fetch("https://www.breakingbadapi.com/api/characters");
const x= await name.json();
console.log(name) ;   
console.log(x);

// document.getElementById("name").innerHTML=x[0].name;
// document.getElementById("BB").src=x[0].img;
    
for(i=0 ; i<x.length ;i++)
{
    document.writeln("<h1>"+ x[i].name + "</h1> <img src=' " +  x[i].img + "'/>");
    // document.writeln("<img src=' " +  x[i].img + "'/>");
    //  document.writeln(`<img src='${x[i].img}' />`);


}

}
get();

