
function choose(u){

    let x= document.getElementById("country").value;
    let f=document.getElementById("flag");
    f.height="400";
    f.width="550";

if(x== "canada"){
    f.src="/pics/canada.png";
}
else if (x=="germany"){
   f.src="/pics/germany.jpg"
}
else if (x=="italy"){
   f.src="/pics/italy.jfif"
}
};

