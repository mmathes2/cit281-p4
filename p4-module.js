//Part 4 import data
const { data } = require("./p4-data.js");
//Part 5
function getQuestions() {
  const quest = [];
  for (const inquiries of data) {
    quest.push(inquiries.question);
  }
  return quest
}

function getAnswers() {
  //same thing as above
  const ans = [];
  for (const resp of data) {
    ans.push(resp.answer);
  }
  return ans
}

let getQuestionsAnswers = () => {
  const newData = JSON.parse(JSON.stringify(data)); 
  return newData; 
};

let getQuestion = (number) => {
  if (typeof number !== "number") {
    return {
      error: "Question number must be a number",
      question: "",
      number: "",
    };
  }
  if (number < 1) {
    return { error: "Question number must be >= 1", question: "", number: "" };
  }
  if (number > 3) {
    return {
      error: "Question number must be less than the number of questions (3)",
      question: "",
      number: "",
    };
  }
  let varia = data[number - 1];
  return {
    error: "",
    number: number,
    question: varia.question,
  };
};

let getAnswer = (number) => {
  if (typeof number !== "number") {
    return {
      error: "Answer number must be a number",
      question: "",
      number: "",
    };
  }
  if (number < 1) {
    return { error: "Answer number must be >= 1", answer: "", number: "" };
  }
  if (number > 3) {
    return {
      error: "Answer number must be less than the number of answer (3)",
      question: "",
      number: "",
    };
  }
  let varia = data[number - 1];
  return {
    error: "",
    number: number,
    question: varia.answer,
  };
};
let getQuestionAnswer = (number) => { 
  if (typeof number !== "number") {
    return {
      error: "Question number must be a number",
      question: "",
      number: "",
    };
  }
  if (number < 1) {
    return { error: "Question number must be >= 1", question: "", number: "" };
  }
  if (number > 3) {
    return {
      error: "Question number must be less than the number of questions (3)",
      question: "",
      number: "",
    };
  }
  let varia = data[number - 1];
  return {
    error: "",
    number: number,
    question: varia.question,
    answer: varia.answer
  };
} 

//TESTING FROM CANVAS PAGE
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit


// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

//part 6
module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};
