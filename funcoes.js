let numeros = [];
let contador = 0;
let operacao = "";
let usuario = "";

function oi (){
    alert("Olá, este é um programa para calcular.");
    return
}

function obtemNome (usuario){
    return usuario;
}

const calculadora = (numeros, operacao) => {
  if (operacao === "+") {
    return numeros[0] + numeros[1];
  } else if (operacao === "-") {
    return numeros[0] - numeros[1];
  } else if (operacao === "*") {
    return numeros[0] * numeros[1];
  } else if (operacao === "/") {
    return numeros[0] / numeros[1];
  } else {
    alert("Operação inválida, tente novamente!");
    throw new Error("Operação Inválida, tente novamente!");
  }
};

oi();

usuario = prompt("Digite seu nome:");

while (numeros.length < 2) {
  numeros.push(parseFloat(prompt(`Digite o ${contador + 1}º numero:`)));
  contador++;
}

let operacaoDefinida = false;

operacao = prompt("Digite a operação desejada");

alert(
  `${obtemNome(usuario)}, o resultado de ${numeros[0]} ${operacao} ${numeros[1]} = ${calculadora(
    numeros,
    operacao
  )}`
);