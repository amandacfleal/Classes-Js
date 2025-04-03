class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
  }

  trabalhar() {
    console.log(`Estou trabalhando como ${this.cargo}.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`Estou gerenciando o departamento ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Estou programando em ${this.linguagem}.`);
  }
}

// Exemplos de uso
const gerente = new Gerente("Amanda", 23, "Gerente", "Recursos Humanos");
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

const desenvolvedor = new Desenvolvedor("Ruan", 28, "Desenvolvedor", "JavaScript");
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
