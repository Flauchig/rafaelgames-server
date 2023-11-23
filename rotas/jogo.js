const { Router } = require('express');
// const chamando o roteamento do express para criarmos rotas e manipularmos elas  fazendo um requerimento com express

const {getjogos, getJogosId, postJogo, patchJogo, deleteJogo} = require('../controladores/jogo')




const router = Router();



router.get('/', getjogos)
  // usando este '/' estamos buscando em localhost mas para usar em servidores online precisamos definir o camminho do mesmo 


// este codigo aciam ele chama uma rota  e cria uma request e uma response  para colocarmos o codigo

router.get('/:id', getJogosId)
// este formato aqui faz com que podemos pegar pelo id do elemento 
 



router.post('/', postJogo);

router.patch('/:id', patchJogo);
// colocar o id é necessario pois ele precisa buscar o item que que quero fazer a modificação 



router.delete('/:id', deleteJogo);


module.exports = router;


// basicamente este codigo é um moduilo de roteamento usando express

