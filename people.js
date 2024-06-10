const personName = ['hira','anny','habiba'];
let s = 5;
let name = "hira anny "
module.exports = personName;
module.exports = s;

//module.exports = person

const textFun = ()=>{
    console.log("text function ");
}
setTimeout(() =>{
    console.log('text for setTimeOut');
},1000);

module.exports = {
    personName,
    s,
    name,
    textFun
}

