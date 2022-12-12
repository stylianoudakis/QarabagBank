const Sequelize = require("sequelize")

const sequelize = new Sequelize ('qarabag', 'stlndks', '6405',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}