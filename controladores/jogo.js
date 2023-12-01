const { 
    getTodosJogos, 
    modificaJogo, 
    excluiJogo, 
    getJogosById, 
    insereNovojogo, 
    existeJogo 
} = require("../servicos/jogo");

function getjogos(req, res) {
    try {
        const jogos = getTodosJogos();
        res.send(jogos); // Envia a lista de todos os jogos como resposta
    } catch (error) {
        res.status(500); // Define o status da resposta como erro interno do servidor
        res.send(error.message); // Envia a mensagem de erro como resposta
    }
}

function getJogosId(req, res) {
    try {
        const id = req.params.id;  
        if (!id || isNaN(id)) {
            res.status(422); // Define o status da resposta como erro de solicitação inválida
            res.send("ID inválido"); // Envia mensagem de erro para ID inválido
            return;
        }

        const jogo = getJogosById(id);

        if (!jogo) {
            res.status(404); // Define o status da resposta como não encontrado
            res.send("Jogo não encontrado"); // Envia mensagem de jogo não encontrado
            return;
        }

        res.send(jogo); // Envia os detalhes do jogo correspondente ao ID como resposta
    } catch (error) {
        res.status(500); // Define o status da resposta como erro interno do servidor
        res.send(error.message); // Envia a mensagem de erro como resposta
    }
}

function postJogo(req, res) {
    try {
        const novoJogo = req.body;
        if(req.body.nome){

            insereNovojogo(novoJogo); // Insere um novo jogo

            res.status(201); // Define o status da resposta como criado
            res.send("Jogo inserido com sucesso!"); // Envia mensagem de sucesso

        }else {

            res.status(422); // Define o status da resposta como erro de solicitação inválida
            res.send("Nome inválido"); // Envia mensagem de erro para nome inválido
        }
       
    } catch (error) {
        res.status(500); // Define o status da resposta como erro interno do servidor
        res.send(error.message); // Envia a mensagem de erro como resposta
    }
}

function patchJogo(req, res) {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            res.status(422); // Define o status da resposta como erro de solicitação inválida
            res.send("ID inválido"); // Envia mensagem de erro para ID inválido
            return;
        }

        if (!existeJogo(id)) {
            res.status(404); // Define o status da resposta como não encontrado
            res.send("Jogo não encontrado"); // Envia mensagem de jogo não encontrado
            return;
        }

        const body = req.body;
        modificaJogo(body, id); // Modifica um jogo existente

        res.send("Item modificado com sucesso!"); // Envia mensagem de sucesso
    } catch (error) {
        res.status(500); // Define o status da resposta como erro interno do servidor
        res.send(error.message); // Envia a mensagem de erro como resposta
    }
}

function deleteJogo(req, res) {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) { 

            // isNaN (is Not a Number) em JavaScript é usada para verificar se um valor não é um número. Ela retorna true se o valor fornecido não for um número e false se for um número ou puder ser convertido para um número; caso contrário, retorna true

            res.status(422); // Define o status da resposta como erro de solicitação inválida
            res.send("ID inválido"); // Envia mensagem de erro para ID inválido
            return;
        }

        if (!existeJogo(id)) {
            res.status(404); // Define o status da resposta como não encontrado
            res.send("Jogo não encontrado"); // Envia mensagem de jogo não encontrado
            return;
        }

        excluiJogo(id); // Exclui um jogo existente
        res.send(`O jogo com o ID ${id} foi excluído com sucesso`); // Envia mensagem de sucesso
    } catch (error) {
        res.status(500); // Define o status da resposta como erro interno do servidor
        res.send(error.message); // Envia a mensagem de erro como resposta
    }
}

module.exports = {
    getjogos,
    getJogosId,
    postJogo,
    patchJogo,
    deleteJogo
};
