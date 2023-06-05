var database = require("../database/config");

function cadastrarNota(idJogo, avaliacaoSk) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    var instrucao = `INSERT INTO Avaliacao (idAvaliacao, notaUsuario, fkUsuario, fkJogo) VALUES (NULL, '${avaliacaoSk}', 1, ${idJogo})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarNota
}
