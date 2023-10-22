let nota1 = 0;
let nota2 = 0;
let nota3 = 0;

const calculaMedia = (nota1, nota2, nota3) => {
  return (nota1 + nota2 + nota3) / 3;
};

nota1 = parseFloat(prompt("Digite a 1ª nota"));
nota2 = parseFloat(prompt("Digite a 2ª nota"));
nota3 = parseFloat(prompt("Digite a 3ª nota"));

console.log("Média " + calculaMedia(nota1, nota2, nota3));
