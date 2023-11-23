const fs = require("fs");

// Define o nome do arquivo
const arquivo = "jogos.json";

// Verifica se o arquivo já existe
if (fs.existsSync(arquivo)) {
  // Lê o conteúdo do arquivo e converte para objeto JavaScript
  const dadosAntigos = JSON.parse(fs.readFileSync(arquivo));

  // Cria um novo objeto com os dados adicionais
  const novoDado = { id: '3', nome: 'Jogo 3' };

  // Adiciona o novo objeto à lista de dados antigos
  const dadosAtualizados = [...dadosAntigos, novoDado];

  // Converte a lista de dados atualizados para JSON
  const dadosAtualizadosJSON = JSON.stringify(dadosAtualizados);

  // Escreve os dados atualizados no arquivo
  fs.writeFileSync(arquivo, dadosAtualizadosJSON);

  // Lê o conteúdo do arquivo atualizado e imprime no console
  const dadosAtualizadosLidos = JSON.parse(fs.readFileSync(arquivo));
  console.log(dadosAtualizadosLidos);
} else {
  // Cria um novo arquivo e escreve o objeto inicial nele
  const dadosIniciais = [ { id: '1', nome: 'Jogo 1' }, { id: '2', nome: 'Jogo 2' } ];
  const dadosIniciaisJSON = JSON.stringify(dadosIniciais);
  fs.writeFileSync(arquivo, dadosIniciaisJSON);
  console.log("Arquivo criado com dados iniciais.");
}