const express = require('express');
//aqui estou chamando uma requisição express

const cors = require('cors');
// o cors é um  mecanismo de segurança que permite controlar as requisições dos navgadores. 

const rotajogo = require('./rotas/jogo');

const rotaFavorito = require('./rotas/favorito');

const app = express();
// aqui estou chamando uma aplicação express


app.use(express.json());
//este codigo é para receber body de arquivos tipo json 

app.use(cors({origin: "*"}));

// aqui estamos chamando o cors e usando o * para permitir o acesso de qualquer origem

const port = 8000;
// aqui esta sendo criado uma porta para o teste no localhost


app.use('/jogos', rotajogo);
// aqui estamos definindo o path de busca na url 

app.use('/favoritos', rotaFavorito);


app.listen(port, () =>{

    console.log(`chamando a porta ${port}`)



})

// aqui foi criado um listen  para chamar a porta em si  e foi feito um console.log para chamar um teste do mesmo 


// para dar hot reload foi instalado um nodemon que é um sistema do node que faz isso para o dev

// e para chamar o comando é so fazermos nodemon.nomeDoArquivojsnode