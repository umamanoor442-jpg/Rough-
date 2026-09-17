

function calculate(){
var num1= +prompt("Enter first number")
var  op=  prompt("Enter an operator")
var  num2= +prompt("Enter second number")


if(op== "+" | op== "-" | op== "*" | op== "/" | op== "%" ){
if(op== "+"){
    var add = num1 + num2 
    alert(add)

}
else if(op== "-"){
    var sub = num1 - num2 
    alert(sub)
}
else if(op=="*"){
    var multi = num1 * num2 
    alert(multi)
}
else if(op=="/"){
    var divide = num1 / num2 
    alert(divide)
}
else if(op=="%"){
var mod = num1 % num2 
alert(mod)
}
}
else{
    alert("that is not an assignment")
}

}




