const db = require('./db')

const Contato = db.sequelize.define('contato',{
    nome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    cidadania: {
        type: db.Sequelize.STRING
    },
    provincia: {
        type: db.Sequelize.STRING
    },
    presente: {
        type: db.Sequelize.TINYINT
    },
    origem: {
        type: db.Sequelize.STRING
    },
    ano: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.STRING
    }
})

module.exports = Contato;