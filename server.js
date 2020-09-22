//C:\bootcamp\Works\modulo03> npm install express
//Chamando o express na variável, o require  é uma opção do js do node para chamar o express
//Chamei o express como uma função pra dentro da variável de servidor
//server.listen(5000) -> estou iniciando meu servidor ouvindo a porta 5000, o listen lista a porta que quero
//Depois para ver se está ok o servidor posso testar no terminal -> C:\bootcamp\Works\modulo03> npm start
//server.get, o get é uma função e ele sempre busca pegar algo
//se o cliente enviar alguma coisa ele vai estar dentro deste req(significa request) e ai eu envio uma res(a resposta ao client)
//return res.send("Hi") -> o send é uma função do objeto res para retornar uma msg
//Instalando dependência Nodemon C:\bootcamp\Works\modulo03> npm install -D nodemon   
//Este -D serve para instalar como dependência de desenvolvimento
//O Nodemon vai ficar reiniciando o servidor pra gente toda hora
//após isto trocar o nome de node para nodemon do arquivo package.json em start como abaixo
/*
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },   
*/
//o Require permite que eu pegue arquivos javascript externos
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()
//const videos = require("./data")
//const { reduce } = require('./data')

server.use(express.static('public'))
server.use(routes)
//estou setando qual é o motor de view que irei usar aqui, vou usar por enquanto tudo que for HTML
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    //o autoescape permite usar o html dentro do js para imprimir na tela uma a href por exemplo
    autoescape: false,
    //limpar cache
    noCache:true
})

server.listen(5000, function(){
    console.log("server is running")
})