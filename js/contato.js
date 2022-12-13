const db = require('./db')

const Contato = db.sequelize.define('contato',{
    cidadaoNome: {
        type: db.Sequelize.STRING
    },
    cidadaoIdade: {
        type: db.Sequelize.INTEGER
    },
    cidadania: {
        type: db.Sequelize.STRING
    },
    provincias: {
        type: db.Sequelize.STRING
    },
    presenteQarabag: {
        type: db.Sequelize.BOOLEAN
    },
    cidadaoCidade: {
        type: db.Sequelize.STRING
    },
    cidadaoAnoPartida: {
        type: db.Sequelize.INTEGER
    },
    cidadaoEmail: {
        type: db.Sequelize.STRING
    },
    cidadaoMensagem: {
        type: db.Sequelize.STRING
    }
})

//Contato.sync({force: true})

module.exports = Contato;