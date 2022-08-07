// A função abaixo é Construtora, ela normaliza o objeto. Padroniza
function Pokemon(nome, pontosAtaque, pontosDefesa){
    this.nome = nome //faz referência ao próprio objeto
    this.pontosAtaque = pontosAtaque
    this.pontosDefesa = pontosDefesa
    this.atacar = function (){
        console.log("atacando");
    }
}

//let pineco = {
//    nome: "Pineco",
//    pontosAtaque: 1000,
//    pontosDefesa: 500
//};

//let pikachu = {
//    nome: 'Pikachu',
//    pontosAtaque: 2500,
//    pontosDefesa: 1000
//}

//Para inserir na função construtora, usamos a palavra reservada "new", conforme abaixo:
let pineco = new Pokemon("Pineco", 1000, 500);

let pikachu = new Pokemon ("Pikachu", 2500, 1000);

//Obs.: pineco e pikachu são instâncias do objeto

//console.log(pineco)
//console.log(pikachu) - Posso dar console em cada instância

let jsonPokemons = '{"count":1154,"next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}'

//JSON.parse converte para objeto literal
let listaPokemons = JSON.parse(jsonPokemons);
// podemos imprimir só results, por exemplo: console.log(listaPokemons.results)

//JSON.stringify converte em JSON
let pinecoJson = JSON.stringify(pineco);

//console.log(listaPokemons.results);


console.log(listaPokemons);

//para cada item dentro do RESULTS, vamos criar um novo POKEMON
//e adicionar em uma lista de pokemons

let instanciasPokemons = [];
for (let contador = 0; contador<listaPokemons.results.lenght; contador++){
    let instancia = new Pokemon (
        listaPokemons.results[contador].name,
        (contador + 1) * Math.random() * 1000,
        (contador + 1) * Math.random() * 500
    );
    instanciasPokemons.push(instancia);
}

console.log(instanciasPokemons);