let obj ={
    firstName : "mohammad",
    salary : 600,
    age : 25,
};

function employeesInfo(x){
    let info = `The first name is: ${x.firstName}<br/>The age is: ${x.age}<br/>The salary is: ${x.salary}`;
    document.write(info);

}

employeesInfo(obj);