const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const contato = require("./Contato")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.post('/contato', function(req,res){
    res.send(req.body.nome + "<br>" + req.body.idade);
});

app.post('/contato'), function(req, res){
    contato.create({
      nome: req.body.nome,
      idade: req.body.idade,
      cidadania: req.body.cidadania,
      provincia: req.body.provincias,
      presente: req.body.presente,
      origem: req.body.origem,
      ano: req.body.partida,
      email: req.body.email,
      mensagem: req.body.mensagem
      }).then(function(){
          res.redirect('/contato')
      }).catch(function(erro){
          res.send("Não foi possível enviar seus dados!" + erro)
      })
  }

  app.listen(8080);