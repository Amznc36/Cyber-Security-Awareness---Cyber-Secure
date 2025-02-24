// Array of questions
const questions = [
    {
        question: "What does malware stand for?",
        answers: {
            a: "Malicious software",
            b: "Malicious hardware",
            c: "Malicious network"
        },
        correct: "a"
    },
    {
        question: "What is phishing?",
        answers: {
            a: "A type of malware",
            b: "A fraudulent attempt to obtain sensitive information",
            c: "A network attack"
        },
        correct: "b"
    },
    {
        question: "What is a DDoS attack?",
        answers: {
            a: "A type of malware",
            b: "A Distributed Denial of Service attack",
            c: "A phishing attempt"
        },
        correct: "b"
    },
    {
        question: "What does VPN stand for?",
        answers: {
            a: "Virtual Private Network",
            b: "Virtual Public Network",
            c: "Very Private Network"
        },
        correct: "a"
    },
    {
        question: "What is ransomware?",
        answers: {
            a: "A type of malware that encrypts files",
            b: "A phishing technique",
            c: "A network security measure"
        },
        correct: "a"
    },
    {
        question: "What is a firewall?",
        answers: {
            a: "A type of malware",
            b: "A network security device",
            c: "A phishing technique"
        },
        correct: "b"
    },
    {
        question: "What is social engineering?",
        answers: {
            a: "A method of hacking",
            b: "Manipulating people to gain confidential information",
            c: "A type of malware"
        },
        correct: "b"
    },
    {
        question: "What is two-factor authentication?",
        answers: {
            a: "A method to secure accounts",
            b: "A type of malware",
            c: "A phishing technique"
        },
        correct: "a"
    },
    {
        question: "What is spyware?",
        answers: {
            a: "Malware that collects user information",
            b: "A type of firewall",
            c: "A phishing technique"
        },
        correct: "a"
    },
    {
        question: "What is a botnet?",
        answers: {
            a: "A network of infected devices",
            b: "A type of malware",
            c: "A phishing technique"
        },
        correct: "a"
    }
];

// Function to select random questions
function getRandomQuestions(numQuestions) {
    const shuffled = questions.sort(() => 0.5 - Math.random()); // Shuffle the questions
    return shuffled.slice(0, numQuestions); // Return the first numQuestions
}

// Get 5 random questions
const selectedQuestions = getRandomQuestions(5);

// Render the questions in the quiz form
const quizForm = document.getElementById('quizForm');
selectedQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
        <label>${index + 1}. ${q.question}</label><br>
        <input type="radio" name="q${index}" value="a"> a) ${q.answers.a}<br>
        <input type="radio" name="q${index}" value="b"> b) ${q.answers.b}<br>
        <input type="radio" name="q${index}" value="c"> c) ${q.answers.c}<br>
    `;
    quizForm.appendChild(questionDiv);
});

// Add the submit button at the bottom
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
quizForm.appendChild(submitButton);

// Add event listener for form submission
quizForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let score = 0; // Initialize score

    // Check each question's answer
    selectedQuestions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (userAnswer && userAnswer.value === q.correct) {
            score++; // Increment score for correct answers
        }
    });

    // Display the result
    document.getElementById('result').innerText = `Your score: ${score}/${selectedQuestions.length}`;
    
    // Show the link to return to the home page
    document.getElementById('homeLink').style.display = 'block';
});