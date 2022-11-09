function create(){

    let x=document.getElementById("first").value;
    if(x.length<6){
    document.getElementById("tooshort").removeAttribute("hidden");
    }
    else {
        document.getElementById("second").removeAttribute("disabled");
    }
}

function repeat(){
    let x=document.getElementById("first").value;
let y=document.getElementById("second").value;
if(y!=x){
    document.getElementById("donotmatch").removeAttribute("hidden");
}
else if(y==x){
    document.getElementById("sub").removeAttribute("hidden");

}

}