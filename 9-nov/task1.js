
function bring(){
   
    document.getElementById("card").style.display="block" ;

    let name1= document.getElementById("name").value;
    localStorage.setItem("name" ,name1 );
    localStorage.getItem( name1);
    document.getElementById("one").innerHTML+=(name1);

    let age = document.getElementById("age").value;
    localStorage.setItem("age" ,age );
    document.getElementById("tow").innerHTML +=(localStorage.getItem("age"));


    let man = document.getElementById("man").checked;
let woman = document.getElementById("woman").checked;
let about = document.getElementById("about").value;
let uni = document.getElementById("uni").value;
let html = document.getElementById("html").checked;
let css = document.getElementById("css").checked;
let js = document.getElementById("js").checked;
let php = document.getElementById("php").checked;


    


localStorage.setItem("mail" ,man );
localStorage.setItem("femail" ,woman );
localStorage.setItem("about" ,about);
localStorage.setItem("uni" ,uni);
localStorage.setItem("html" ,html);
localStorage.setItem("css" ,css );
localStorage.setItem("js" ,js );
localStorage.setItem("php" ,php );

if(localStorage.getItem("mail")== "true"){
    document.getElementById("three").innerHTML +="mail";

}
else if (localStorage.getItem("femail") == "true"){

    document.getElementById("three").innerHTML +="femail";

};


document.getElementById("five").innerHTML +=(localStorage.getItem("about"));
document.getElementById("six").innerHTML +=(localStorage.getItem("uni"));


if(localStorage.getItem("html")== "true"){
    document.getElementById("seven").innerHTML +="html ";

};
 if (localStorage.getItem("css") == "true"){

    document.getElementById("seven").innerHTML +="css ";

};
if(localStorage.getItem("js")== "true"){
    document.getElementById("seven").innerHTML +="js ";

};
 if (localStorage.getItem("php") == "true"){

    document.getElementById("seven").innerHTML +="php ";

};


}