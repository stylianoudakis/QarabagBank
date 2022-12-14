//Apps
const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require("body-parser");
const contato = require("./js/contato");
const registros = require("./js/query");

//Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

//Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Ativos estáticos
app.use(express.static(__dirname, + '/'));

//Rotas
app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.htm");
});

app.get('/sobre', function(req,res){
    res.render('sobre');
});

app.get('/inicio', function(req,res){
    res.render('inicio');
});

app.get('/dados', function(req, res){  
    const banco = require('./js/query');
    const dados =  banco.todosContatos();
    res.send('Dados enviados ao console.')
});

//Formulário para banco de dados

app.post('/contato', function(req,res){
    contato.create({
        cidadaoNome: req.body.cidadaoNome,
        cidadaoIdade: req.body.cidadaoIdade,
        cidadania: req.body.cidadania,
        provincias: req.body.provincias,
        presenteQarabag: req.body.presenteQarabag,
        cidadaoCidade: req.body.cidadaoCidade,
        cidadaoAnoPartida: req.body.cidadaoAnoPartida,
        cidadaoEmail: req.body.cidadaoEmail,
        cidadaoMensagem: req.body.cidadaoMensagem
        }).then(function(){
            res.send("<h1>Dados enviados com sucesso!</h1>" + "<strong>Cidadão: </strong>"+ req.body.cidadaoNome);
        }).catch(function(erro){
            res.send("Não foi possível enviar seus dados!<br>" + erro)
        })
});

//Servidor
app.listen(8080, function(){
    console.log("Servidor Rodando!");
});