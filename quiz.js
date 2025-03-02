const questions = [
    {
        question: "What is the time complexity of accessing an element in an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: 0
    },
    {
        question: "Which data structure uses LIFO (Last In First Out) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: 1
    },
    {
        question: "What is the space complexity of a recursive function with n recursive calls?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: 1
    },
    {
        question: "Which of the following is not a type of linked list?",
        options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Multi Linked List"],
        answer: 3
    },
    {
        question: "What is the worst-case time complexity of Quick Sort?",
        options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
        answer: 1
    },
    {
        question: "Which data structure is used for breadth-first search?",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: 1
    },
    {
        question: "What is the primary purpose of a hash table?",
        options: ["Sorting data", "Storing data in a sorted manner", "Fast data retrieval", "Data compression"],
        answer: 2
    },
    {
        question: "Which algorithm is used to find the shortest path in a graph?",
        options: ["Dijkstra's Algorithm", "Merge Sort", "Binary Search", "Depth First Search"],
        answer: 0
    },
    {
        question: "What is the time complexity of binary search in a sorted array?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1
    },
    {
        question: "Which of the following is a self-balancing binary search tree?",
        options: ["Binary Tree", "AVL Tree", "B-Tree", "Red-Black Tree"],
        answer: 1
    },
    // Add more questions here

    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const retryButton = document.getElementById('retry');
const exitButton = document.getElementById('exit');
const messageElement = document.getElementById('message');
const answersContainer = document.getElementById('answers-container');
const answersList = document.getElementById('answers-list');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    console.log("Starting quiz");
    // Shuffle and select the first 4 questions
    const shuffledQuestions = shuffleArray([...questions]); // Create a copy of the questions array and shuffle it
    questions.length = 0; // Clear the original questions array
    questions.push(...shuffledQuestions.slice(0, 4)); // Add the first 4 shuffled questions

    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 15;
    resultContainer.classList.add('hide');
    answersContainer.classList.add('hide'); // Hide answers container
    questionContainer.classList.remove('hide');
    document.querySelector('.start_btn').classList.add('hide');
    document.querySelector('.rules').classList.add('hide');
    timerElement.classList.remove('hide'); // Ensure the timer is visible
    showQuestion();
}


function showQuestion() {
    console.log("Showing question");
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
    startTimer(); // Start timer when showing a new question
}

function selectOption(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        timeLeft = 15; // Reset time left for the next question
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    // Clear any existing timer
    if (timer) {
        clearInterval(timer);
    }
    // Start a new timer
    timer = setInterval(() => {
        console.log(`Time left: ${timeLeft}`); // Debugging line
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(-1); // Move to next question if time runs out
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    timerElement.classList.add('hide'); // Hide the timer

    // Populate and show the answers
    answersList.innerHTML = ''; // Clear previous answers
    questions.forEach((question, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Q${index + 1}: ${question.options[question.answer]}`;
        answersList.appendChild(listItem);
    });

    answersContainer.classList.remove('hide'); // Show answers container
    scoreElement.textContent = `Your score: ${score}`;
    messageElement.textContent = "Hope you had a nice time!";
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start_btn button');
    const quizContainer = document.getElementById('quiz-container');

    startButton.addEventListener('click', () => {
        quizContainer.classList.remove('hide');
        startQuiz(); // Start the quiz when the start button is clicked
    });

    // Link the sign-up button
    document.getElementById('registrationBtn').addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/'; // Replace with your sign-up page URL
    });
});

retryButton.addEventListener('click', () => {
    // Reset the view to the initial state
    resultContainer.classList.add('hide');
    answersContainer.classList.add('hide'); // Hide answers container
    questionContainer.classList.add('hide');
    document.querySelector('.start_btn').classList.remove('hide');
    document.querySelector('.rules').classList.remove('hide');
    // Reset the quiz state
    clearInterval(timer);
    timeLeft = 15;
    timerElement.textContent = `Time left: ${timeLeft}s`;
});

exitButton.addEventListener('click', () => {
    window.location.href = 'about:blank'; // home page link
});
