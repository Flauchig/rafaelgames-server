const fs = require('fs'); 


 function getFavoritos(){ 

    return JSON.parse(fs.readFileSync("favoritos.json")); 
    
// co comando JSON.parse  ele analisa uma string e transforma em um objeto javascript



}

function deletaFavoritoById(id){
    // Lê o conteúdo do arquivo "favoritos.json" e o converte em um objeto JavaScript
    const jogos = JSON.parse(fs.readFileSync("favoritos.json"));

    // Filtra os jogos com base no ID fornecido, removendo o jogo correspondente
    const jogosFiltrados = jogos.filter(jogo => jogo.id !== id);

    // Escreve a lista de jogos filtrada de volta no arquivo "favoritos.json"
    fs.writeFileSync("favoritos.json", JSON.stringify(jogosFiltrados));
}
function insereFavoritoById(id){

    const jogos = JSON.parse(fs.readFileSync("jogo.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
    // chamando os arquivos json



    const JogoInserido = jogos.find(jogo => jogo.id === id);
    const NovaListaFavoritos = [...favoritos, JogoInserido];
    //fazendo a busca dos jogos inserdos e buscando pelo id para trazer para os favoritos

    fs.writeFileSync( "favoritos.json", JSON.stringify(NovaListaFavoritos));






}


function existeJogoFavorito(id) {
    // Obtém a lista completa de todos os jogos
    const jogos = getFavoritos();

    // Utiliza o método 'some' para verificar se pelo menos um jogo possui o ID fornecido
    return jogos.some(jogo => jogo.id === id);
    // Retorna 'true' se ao menos um jogo tiver o ID correspondente ao 'id' fornecido,
    // caso contrário, retorna 'false'
}







module.exports = {

    getFavoritos,
    deletaFavoritoById,
    insereFavoritoById,
    existeJogoFavorito
 
}