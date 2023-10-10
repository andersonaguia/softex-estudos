class DadosPessoa {
  nome: string;
  salario: number;
  idade: number;
  possuiDiploma: boolean;
}

let pessoa1 = new DadosPessoa();
pessoa1.nome = "Silvester Stalone";
pessoa1.salario = 1500;
pessoa1.idade = 45;
pessoa1.possuiDiploma = false;

console.log(pessoa1);

let pessoa2 = new DadosPessoa();
pessoa2.nome = "James bond";
pessoa2.salario = 1500;
pessoa2.idade = 38;
pessoa2.possuiDiploma = true;

console.log(pessoa2);
