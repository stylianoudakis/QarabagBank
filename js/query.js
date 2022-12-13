const mysql = require('mysql2')

const con  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6405",
    database: "qarabag"
})

const todosContatos = async() => {
    con.connect(function (err) {
        if(err) throw err;
        console.log("Conectado!");
        var sql = "SELECT * FROM contatos";
        con.query(sql, (err, result) => {
            con.end();
            if(err) throw err;
            console.log(JSON.parse(JSON.stringify(result)))
            //console.log(result)
        });
    })
}

module.exports = {todosContatos}