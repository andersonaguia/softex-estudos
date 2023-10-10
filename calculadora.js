let numeros = [];
let contador = 0;
let operacao = "";

while (numeros.length < 2) {
  numeros.push(parseFloat(prompt(`"Digite o ${contador + 1}º numero:`)));
  contador++;
}

let operacaoDefinida = false;

operacao = prompt("Digite a operação desejada");

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

alert(
  `O resultado de ${numeros[0]} ${operacao} ${numeros[1]} = ${calculadora(
    numeros,
    operacao
  )}`
);
