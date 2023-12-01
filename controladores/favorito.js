const { getFavoritos, insereFavoritoById, deletaFavoritoById, existeJogoFavorito } = require("../servicos/favorito");




function getFavorito(req, res){

        try {
            const jogos = getFavoritos();
            res.send(jogos);
            
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }


}

function postFavorito(req, res){
            
    try {
        
        const id = req.params.id;
        insereFavoritoById(id);
        res.status(201);
        res.send("Favorito inserido com sucesso!");

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }


}

function deletaFavorito(req, res){

try {

    const id = req.params.id;

    if (!id || isNaN(id)) {

        res.status(422);
        res.send("ID inválido");
        return;
        
    }


    if(!existeJogoFavorito(id)){

        res.status(404); // Define o status da resposta como não encontrado
        res.send("Jogo não encontrado"); // Envia mensagem de jogo não encontrado
        return;

    }

    deletaFavoritoById(id);
    res.send(`O jogo com o ID ${id} foi excluído com sucesso`); // Envia mensagem de sucesso


    
} catch (error) {
    res.status(500); //
    res.send(error.message); // Envia mensagem
    
}




}






module.exports = {
        getFavorito,
        postFavorito,
        deletaFavorito,


}