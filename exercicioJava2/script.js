let btCalcular = document.querySelector("#btCalcular");
let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");

btCalcular.onclick = function(){
    somarValores();
}
function somarValores(){
    let soma = Number(number1.value) - Number(number2.value);
    number3.value = soma;
}
