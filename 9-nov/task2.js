 
function bring(){
    
    document.getElementById("card").style.display="block" ;

    let name1= document.getElementById("name").value;
    sessionStorage.setItem("name" ,name1 );
    sessionStorage.getItem( name1);
    document.getElementById("one").innerHTML+=(name1);



    let man = document.getElementById("man").checked;
let woman = document.getElementById("woman").checked;
let about = document.getElementById("about").value;
let html = document.getElementById("html").checked;
let css = document.getElementById("css").checked;
let js = document.getElementById("js").checked;
let php = document.getElementById("php").checked;


    


sessionStorage.setItem("mail" ,man );
sessionStorage.setItem("femail" ,woman );
sessionStorage.setItem("about" ,about);
sessionStorage.setItem("html" ,html);
sessionStorage.setItem("css" ,css );
sessionStorage.setItem("js" ,js );
sessionStorage.setItem("php" ,php );

if(sessionStorage.getItem("mail")== "true"){
    document.getElementById("three").innerHTML +="provider";

}
else if (sessionStorage.getItem("femail") == "true"){

    document.getElementById("three").innerHTML +="buyer";

};


document.getElementById("five").innerHTML +=(sessionStorage.getItem("about"));



if(sessionStorage.getItem("html")== "true"){
    document.getElementById("seven").innerHTML +="html ";

};
 if (sessionStorage.getItem("css") == "true"){

    document.getElementById("seven").innerHTML +="css ";

};
if(sessionStorage.getItem("js")== "true"){
    document.getElementById("seven").innerHTML +="js ";

};
 if (sessionStorage.getItem("php") == "true"){

    document.getElementById("seven").innerHTML +="php ";

};





}