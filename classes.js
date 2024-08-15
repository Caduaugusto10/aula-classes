class Pessoa {
    constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome} , tenho ${this.idade} anos e ${this.altura} de altura!`);
    }
}

const user = new Pessoa("Cadu", 16, 1.82)
const user2 = new Pessoa("Luiz", 17, 1.91)

//console.log(user)
//console.log(user2)

user.seApresentar()
