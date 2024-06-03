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

// function buscarMediaGeral(Quantidade) {

//     console.log("ACESSEI a MEDIDA MODEL para buscar a media dos usuários, function buscarMediaGeral()", Quantidade);

//     var instrucaoSql = `select 
//     round(avg(q.score)) 'Quantidade'
//     from tsound.quizz as q`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasMedidas
    // buscarMediaGeral
}
//     buscarMedidasEmTempoReal
// }
