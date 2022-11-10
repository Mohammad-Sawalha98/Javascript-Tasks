let x=document.getElementById("main");
// x.style.border="5px";
x.style.height="60px";
x.style.width="540px";
// x.style.backgroundColor="red";


function familyfun(){
    
let f=document.getElementById("family").value;
console.log(f);
let m=document.getElementById("main");
if(f=="arial"){
    m.style.fontFamily="Arial, Helvetica, sans-serif ";
}
else if (f=="times new roman"){
    m.style.fontFamily="'Times New Roman', Times, serif";
}
else if (f=="georgia"){
    m.style.fontFamily="Georgia, 'Times New Roman', Times, serif ";
}

}


function sizefun(){

    let s=document.getElementById("size").value;
    let m=document.getElementById("main");
    // if(s=="12pt"){
    //     m.style.fontSize="12px";
    // }
    // else if(s=="14pt"){
    //     m.style.fontSize="14px";
    // }
    // if(s=="16pt"){
    //     m.style.fontSize="16px";
    // }
    m.style.fontSize=s+"px";
}


function italicfun(){
let r=document.getElementById("italic").checked;
if(r==true){
    document.getElementById("main").style.fontStyle="italic"
}
else{
    document.getElementById("main").style.fontStyle="normal"
}


}


function boldfun(){
let b = document.getElementById("bold").checked;
if(b){
    document.getElementById("main").style.fontWeight="bold";
}
else{
    document.getElementById("main").style.fontWeight="normal" ;
}

};
function underlinefun(){
    let u = document.getElementById("underline").checked;
    if(u){
        document.getElementById("main").style.textDecoration="underline";
    }
    else{
        document.getElementById("main").style.textDecoration="none" ;
    }



}

