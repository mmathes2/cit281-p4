//import data 
const {   getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer, } = require("./p4-module.js");
//Part 7 
const http = require("http"); 
const fs = require('fs'); 
const hostname = '127.0.0.1'; 
const port = 8080; 
const server = http.createServer((req, res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => { 
        if (err){ 
            console.log(err); 
            res.statusCode = 500; 
            res.setHeader("Content-Type", "text/html"); 
            res.end("Error processing request"); 
        }else{ 
            res.statusCode = 200; 
            console.log("URL:", req.url); 
            res.setHeader("Content-Type", "text/html"); 
            res.write(data); 
            res.end(); 
        }})
})
const fastify = require('fastify')();

fastify.get("/cit/question", (request, reply) => { 
   let response = { 
      error: "", 
      statusCode: "200", 
      questions: getQuestions() 
   }
   console.log(response)
    reply
     .code(200)
     .header("Content-Type", "application/json")
    .send(response)
 }); 

 fastify.get("/cit/answer", (request, reply) => {
   let response = { 
      error: "", 
      statusCode: "200", 
      answers: getAnswers()
   }
    reply
     .code(200)
     .header("Content-Type", "application/json; charset=utf-8")
    .send(response)
 }); 

 fastify.get("/cit/questionanswer", (request, reply) => {
   let response = { 
      error: "", 
      statusCode: "200", 
      questions_answers: getQuestionsAnswers()
   }
    reply
     .code(200)
     .header("Content-Type", "application/json; charset=utf-8")
    .send(response)
 }); 

 fastify.get("/cit/question/:number", (request, reply) => {
   let response = { 
      error: "", 
      statusCode: "200", 
      question: getQuestion(number), 
      number: number 
   }
    reply
     .code(200)
     .header("Content-Type", "application/json; charset=utf-8")
    .send(response)
 }); 
 
 fastify.get("/cit/answer/:number", (request, reply) => {
   let response = { 
      error: "", 
      statusCode: "200", 
      answer: getAnswer(number), 
      number: number
   }
    reply
     .code(200)
     .header("Content-Type", "application/json; charset=utf-8")
    .send(response)
 }); 
 
 fastify.get("/cit/questionanswer/:number", (request, reply) => {
   let response = { 
      error: "", 
      statusCode: "200", 
      question: getQuestion(number),
      answer: getAnswer(number)
   }
    reply
     .code(200)
     .header("Content-Type", "application/json; charset=utf-8")
    .send(response)
 }); 
 
 fastify.get("*", (request, reply) => {
   let response = { 
      error: "route not found", 
      statusCode: "404"
   }
   reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
   .send(response)
}); 
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
