

const { Router } = require('express');
const { getFavorito, postFavorito, deletaFavorito } = require('../controladores/favorito');




const router =  Router(); 


router.get('/', getFavorito );

router.post('/:id', postFavorito);

router.delete('/:id', deletaFavorito);


module.exports = router;
