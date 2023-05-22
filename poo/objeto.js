class Anime {
    constructor(nome) {
        this.nome = nome;
    }
}

let anime1 = new Anime("Dragon Ball");
console.log(anime1);

let pessoa = {
    nome: 'Kheronn',
}

pessoa.falar = function (){
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.falar();