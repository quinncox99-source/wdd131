



function testIt(){
let number=document.getElementById("number").value;
let name=document.getElementById("name").value;
let expireM=document.getElementById("month").value;
let expireY=document.getElementById("year").value;
let cvc=document.getElementById("CVV").value;
let succeed=true;

if(number.replaceAll(" ","").length !=16){
console.log(number.replaceAll(" ",""));   
succeed=false;
}
console.log(expireM);
console.log(expireY);
if(parseInt(expireY)>=26){
    if(parseInt(expireM) <=4)
    succeed=false;
}
if(cvc.length !=3){
console.log(cvc.replaceAll(" ",""));   
succeed=false;
}
console.log(name);
if(name==""|| name==null){
    succeed =false;
}

if(succeed){
    alert('Welcome User!');
}else{
    alert("ERROR, information invalid");
}
}