const conectar = async () => {
	if(global.conexao && global.conexao.state != 'disconnected')
		return global.conexao
	const mysql = require('mysql2/promise')		
	const con  = mysql.createConnection("mysql://stlndks:6405@localhost:3306/qarabag")
	console.log('Conectado ao banco!')
	global.conexao = con
	return conexao
}

const todosContatos = async() => {
	const con = await conectar()
	const [linhas] = await con.query('SELECT * FROM contatos')
	return await linhas
}

module.exports = {todosContatos}
