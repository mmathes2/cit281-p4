# cit281-p4
![image](https://github.com/mmathes2/cit281-p4/assets/134009490/8fb3904f-66fb-4904-b979-8fc57a40a592)

In a world, where code can have questions and answers requested by the server url....
## create files, initialize Node, and add fastify 
```npm init ``` ```npm install --save fastify``` 
## create data file 
```
// Question and answer data array
const data = [
  {
    question: "Q1",
    answer: "A1",
  },
  {
    question: "Q2",
    answer: "A2",
  },
  {
    question: "Q3",
    answer: "A3",
  },
];

// Export statement must be below data declaration - no hoisting with const
module.exports = {
  data,
};
```
## import data from p4-data.js 
<img width="335" alt="Screenshot 2023-06-08 at 11 20 09 AM" src="https://github.com/mmathes2/cit281-p4/assets/134009490/6d96a6fb-1f33-4120-848f-18ad1906458b">
## create code and test functions 
``` getQuestions()``` -> returns array where each array element is a question 
```getAnswers() ``` -> returns an array of strings where each array element is an answer
```getQuestionsAnswers()``` -> returns a copy of the original data array of objects
``` getQuestion(number="")``` -> returns question, number, and error 
```getAnswer(number ="")``` -> returns answer, number, and error
```getQuestionAnswer(number="") ``` -> returns question, answer, number, and error 
test functions 
## export code module functions 
export all functions 
<img width="233" alt="Screenshot 2023-06-08 at 11 24 20 AM" src="https://github.com/mmathes2/cit281-p4/assets/134009490/4ec252a0-8fef-4938-96f3-0930c2b760ba">

## create REST API server 
routes: 
```/cit/question ```
```/cit/answer ```
```/cit/questionanswer ```
```/cit/question/:number ```
```/cit/answer/:number ```
```/cit/questionanswer/:number ```
```*``` 
## extra credit 
add POST and/or DELETE 
