const banco = {
  conta: "23505-4",
  saldo: 100.42,
  tipoConta: "Corrente",
  agencia: "001",
  buscarSaldo: function () {
    alert(`Saldo atual: ${banco.saldo}`);
  },
  realizarDeposito: function (vlr) {
    this.saldo = this.saldo + vlr;
    alert(`Depósito realizada com sucesso! Saldo atual R$ ${this.saldo}`);
  },
  realizarSaque: function (vlr) {
    if (this.saldo < vlr) {
      alert(`Saldo insuficiente! Saldo atual R$ ${this.saldo}`);
    } else {
      this.saldo = this.saldo - vlr;
      alert(`Saque realizada com sucesso! Saldo atual R$ ${this.saldo}`);
    }
  },
  buscarConta: function () {
    alert(`O número da sua conta é ${this.conta}`);
  },
};

banco.buscarSaldo();
banco.realizarDeposito(15);
banco.realizarSaque(200);
banco.buscarConta();
