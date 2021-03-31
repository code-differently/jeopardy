
let questionBank = {
    "General": [
        "What is a Front End Developer?",
        "You’re stuck on a coding problem. Do you go to your superior for help, or continue to work on the issue by yourself?",
        "What do you find interesting about coding?",
        "Describe your experience with pair programming. What are the benefits of this coding method?",
        "Describe your personal debugging process.", 
        "Describe your coding experiences using JavaScript.", 
        "What is the difference between UX and UI?", 
        "What Is The Difference Between Responsive And Adaptive Development?"
    ],
    "CLI and Git": [
        "What is the CLI?",
        "What is a CLI Application or Tool?",
        "What is Git?",
        "What is the benefit of Git?", 
        "What is a Repository?", 
        "What is GitHub?", 
        "How are GitHub and Git different from one another?",
        "What are three common git commands and what does each do?"
    ],
    "HTML": [
        "What does HTML stand for?",
        "Describe HTML.",
        "What is HTML5?",
        "What is the Global Structure?",
        "What is Anchor tag and how can you open an URL into a new tab when clicked?",
        "Define attributes in HTML tag.",
        "How can we comment in HTML?",
        "What are inline elements and block-level elements in HTML? List some examples.",
        "What are <br> tags in HTML?",
        "Explain the following tags: doctype, html, head, body",
        "Why are Meta tags used in HTML?",
        "Explain the difference between an ordered list and an unordered list.",
        "Define forms in HTML",
        "How many levels of heading tags are there?",
        "Why do we use the 'required' attribute in HTML Forms?",
        "What is an IDE?",
        "Do You Know What Is The Importance Of The Html Doctype?"
    ],
    "CSS": [
        "What does CSS stand for?",
        "Explain CSS.",
        "Cite different types of CSS and explain their differences: external, internal, inline",
        "Why is the external style sheet useful?",
        "What is a CSS Selector?",
        "What is the difference between padding and margin?",
        "What is the difference between class and id?",
        "What is the CSS box model?",
        "What is a CSS pseudo-class?",
        "Explain the term Responsive web design.",
        "What is CSS flexbox?",
        "What is CSS grid?",
        "What is Bootstrap?",
        "How are the span and div elements different from other elements in HTML?",
        "What Is A Clear?"
    ],
    "JS Basics": [
        "What is JavaScript?",
        "What are the advantages of using JavaScript?",
        "What are the disadvantages of using JavaScript?",
        "Tell Me Where Do You Place Your Javascript On The Page?",
        "What is a JavaScript variable?",
        "What are the variable types and their differences?",
        "What are the rules when naming variables?",
        "What is a JavaScript operator? Name some types of operators.",
        "What are the two main value types in JavaScript?",
        "What is a primitive value type?",
        "What is a string? Explain some string manipulation methods.",
        "What is String concatenation?",
        "How to find the size of a string?",
        "What does 'sanitize input' mean?",
        "What are JavaScript reserved words and keywords?",
        "Is JavaScript case-sensitive?",
        "Why is equality in JavaScript important?",
        "Describe the process of comparing two values in JavaScript."
    ],
    "Conditionals": [
        "What is a Conditional Statement?",
        "What is an example of a conditional Statement?",
        "What is the difference between == and === ?",
        "What are some conditional operators?",
        "What are the logical operators?",
        "What is a ternary?"
    ],
    "Arrays": [
        "What is an array?How can you create an array in JS?",
        "How do you access a value in an array?",
        "Explain splice()",
        "What is indexOf() ?",
        "What is a multi dimensional array?"
    ],
    "Loops": [
        "Why are loops used?",
        "What are some looping structures?",
        "What is the difference between 'for' and 'for of'?",
        "What do 'break' and 'continue' do?",
        "What is an infinite loop"
    ],
    "Functions":  [
        "Explain 'return' statements.",
        "What is a function expression?",
        "What is the difference between spread and rest?",
        "What is scope?",
        "Can a function be assigned to a variable and sent as an argument to a function?",
        "What is an arrow function?",
        "What is 'hoisting'?",
        "What is a function", 
        "What is the difference between a parameter and an argument?",
        "What is the difference between a named function and anonymous function?",
        "What is a callback function?",
        "What is an iteration method?",
        "Name an iteration methods and how it works"
    ],
    "DOM":  [
        "What is the DOM?", 
        "Why is it important?", 
        "What is the global DOM property that allows access to the web page?", 
        "Explain parent, child, sibling relationships.", 
        "What are some methods for selecting HTML elements in a web page?", 
        "What is the process of adding a new element to a webpage?", 
        "What are events and how are they handled?", 
        "Explain event bubbling and capturing?", 
        "What is an event object?"
    ],
    "Objects": [
        "What is an object?", 
        "Why are objects used?", 
        "What is a property?", 
        "What is a method and how are they used?", 
        "What is encapsulation?", 
        "What is a object literal?", 
        "Explain dot and bracket notation.", 
        "What is a class?", 
        "What is 'this'?", 
        "How does hoisting work with class definitions?", 
        "What is inheritance?", 
        "How does JavaScript handle inheritance?", 
        "What does “favor object composition over class inheritance” mean?"
    ],
    "Async": [
        "What is Asynchronous Programming vs Synchronous Programming?", 
        "Explain Web Requests and Responses.", 
        "Explain Client/Server Relationship", 
        "How does AJAX work?", 
        "What Is The Difference Between Get And Post?"
    ],
    "OOP": [
        "Can you name two programming paradigms important for JavaScript app developers?", 
        "What is the difference between an Object and a Class",
        "Explain the difference between classical inheritance and prototypal inheritance?", 
        "Explain the difference between OOP and Function Programming?", 
        "Explain What Is the Difference Between A Prototype And A Class?"
        ],
    "Data Formats": [
        "What is a data exchange format?",
        "What data exchange format was used when AJAX was created",
        "Name the most common data exchange formats?",
        "What does JSON stand for?",
        "Name some of the data echange formats a server resond with."
    ],
    "Architecture": [
        "What is a RESTful Web Service?",
        "Which frameworks are you most familiar with?",
        "What is the difference between JavaScript and another programming language you know?",
        "What are the two types of databases",
        "What platform do we use to run an Express.JS application"
    ]
}

let categories = []
let gameMatrix = Array(5).fill(null).map(row => Array(5).fill(null))

function setQuestion(row, col){
    document.getElementById("question").innerText = gameMatrix[row][col];
    document.getElementById(`${row}_${col}`).onclick = ""
    document.getElementById(`${row}_${col}`).className = "card question clicked"
}

function buildGrid(){

    let body = "";

    for(let i = 0; i < 6; i++){

        body += `<div class="card header">
                    ${categories[i]}
                </div>`

    }

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 6; j++){
            body += `<div id="${i}_${j}" class="card question" onclick='setQuestion(${i},${j})'>
                        ${(i+1)*100}
                    </div>`
        }
    }

    document.getElementById("grid").innerHTML = body;
}

function chooseRandomNFromList(list, n){

    let selected = new Set;

    let i;
    while(selected.size < n){
        i = Math.floor(Math.random() * list.length);
        selected.add(list[i]);
    }

    return [...selected];

}

function chooseQuestions(){

    let topics = Object.keys(questionBank);
    categories = chooseRandomNFromList(topics, 6);
    
    let questions;
    categories.forEach((category,col) => {
        questions = questionBank[category];
        chooseRandomNFromList(questions, 5).forEach((question, row) => {
            gameMatrix[row][col] = question;
        })
    })
}

function setup(){
    chooseQuestions();
    buildGrid();
}

setup()