const fs = require('fs'); 



function getTodosJogos(){ 

    return JSON.parse(fs.readFileSync("jogo.json")); 
    
// co comando JSON.parse  ele analisa uma string e transforma em um objeto javascript



}

function getJogosById(id){

    const jogos = JSON.parse(fs.readFileSync("jogo.json")); 

    const jogoFiltrado = jogos.filter(livro => livro.id === id)[0]; 
    // como estamos bucando o filtro por id ele sempre vai buscar por um elemento pois, não tem como ter dois objetos com o mesmo id é colocado no indice 0 porque busca um filtro de um elelemtnto so 


    return jogoFiltrado



}


function insereNovojogo(novoJogo){

    const jogos = JSON.parse(fs.readFileSync("jogo.json"));

    const novaListaDeJogos =  [...jogos, novoJogo]; 
    // esta aqui é unma  mecanica chamada  spread  que é quando usamos os (...),basicamente ele espande o array permitindo que eles sejam passado por parâmetros. 


    fs.writeFileSync("jogo.json", JSON.stringify(novaListaDeJogos)); 

}

function modificaJogo(modificacoes, id){
    let jogosAtuais = JSON.parse(fs.readFileSync("jogo.json")); 
    // foi colocado um let ao invez da const porque uma const é inmodificavel  no caso com let eu posso modificar os valores que tem dentro.1

    const indiceModificado = jogosAtuais.findIndex(jogo => jogo.id === id); 
    // o método findindex  em arrays retorna um indice  do primeiro elemento que traz alguma condição de busca.

    const conteudoMudado  = {...jogosAtuais [indiceModificado], ...modificacoes }
    // este código esta fazendo um spread que expande um objeto de array 
    //jogosAtuais[indiceModificado]: está acessando um objeto específico dentro do array jogosAtuais, usando o índice retornado pelo findIndex anteriormente.
    // e o segundo spread vai fazer as modificações  no caso mudar o nome ou caso nao tenho o nome ira criar um novo

    jogosAtuais[indiceModificado] = conteudoMudado; 

    fs.writeFileSync("jogo.json",  JSON.stringify(jogosAtuais) );
    // aqui estamos aplicando a mudança do codigo e usando um stringfy para para converter os objetos ou valores javascript em JSON.


}

function excluiJogo(id){

    let jogosAtuais = JSON.parse(fs.readFileSync("jogo.json"));


    const removerIndice = jogosAtuais.findIndex(jogo => jogo.id === id);
    
    if (removerIndice !== -1) {
        jogosAtuais.splice(removerIndice, 1);
        //esta condição aqui usando o splice serve para remover um indice do array

        fs.writeFileSync("jogo.json",  JSON.stringify(jogosAtuais) );

        console.log(`Jogo com o ID ${id} removido com sucesso`);



    } else {

        console.log(`Nenhum Jogo foi encontrado com este ID ${id}`); 


    }

}


// Função que verifica se um jogo com um determinado ID existe na lista de jogos
function existeJogo(id) {
    // Obtém a lista completa de todos os jogos
    const jogos = getTodosJogos();

    // Utiliza o método 'some' para verificar se pelo menos um jogo possui o ID fornecido
    return jogos.some(jogo => jogo.id === id);
    // Retorna 'true' se ao menos um jogo tiver o ID correspondente ao 'id' fornecido,
    // caso contrário, retorna 'false'
}


module.exports ={

    getTodosJogos,
    getJogosById, 
    insereNovojogo, 
    modificaJogo, 
    excluiJogo,
    existeJogo
    
}

// aqui estamos chamando uma função  de serviço  que de inicio esta lendo  um arquivo JSON