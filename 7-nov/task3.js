var strings= ["ali","mercer","madrasa","rashed2","emad","hala"];

function shorterInArray(att){
    let shortest=50000;
    let str="";
    for(let i=0; i<att.length;i++){

        if (att[i].length < shortest){ 
            shortest=att[i].length;
            str =att[i];
            
        }
        
    }
    return str
}

let hi=shorterInArray(strings);
document.write(hi);