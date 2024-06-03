var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT 
        score as score
                    FROM quizz
                    WHERE fkusuario = ${idUsuario}
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarMediaGeral(Quantidade) {

    console.log("ACESSEI a MEDIDA MODEL para buscar a media dos usuários, function buscarMediaGeral()", Quantidade);

    var instrucaoSql = `select 
    round(avg(q.score)) 'Quantidade'
    from tsound.quizz as q`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarQuantidadePessoas() {

    console.log("ACESSEI a MEDIDA MODEL para buscar a quantidade dos usuários, function buscarQuantidadePessoas()");

    var instrucaoSql = `select count(u.nome) as quantidade_pessoas
    from tsound.usuario as u;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarPessoaComMaisAcertos() {

    console.log("ACESSEI a MEDIDA MODEL para buscar a pessoa com mais acertos dos usuários, function buscarPessoaComMaisAcertos()");

    var instrucaoSql = `select u.nome as pessoa_com_mais_acertos from usuario as u inner join quizz as q on u.id  = q.fkUsuario 
    where q.score = (select max(score) from quizz) limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMediaGeral,
    buscarQuantidadePessoas,
    buscarPessoaComMaisAcertos
}

