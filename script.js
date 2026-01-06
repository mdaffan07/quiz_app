const quizQuestions = [
    {
        questions: "What does CPU stand for?",
        optionA: "Central Processing Unit",
        optionB: "Computer Personal Unit",
        optionC: "Central Program Utility",
        optionD: "Control Processing Unit",
        correctOption: "A"
    },
    {
        questions: "Which language is primarily used for web development?",
        optionA: "Python",
        optionB: "Java",
        optionC: "JavaScript",
        optionD: "C++",
        correctOption: "C"
    },
    {
        questions: "What does HTML stand for?",
        optionA: "HyperText Markup Language",
        optionB: "HighText Machine Language",
        optionC: "HyperTool Markup Language",
        optionD: "HyperText Multi Language",
        correctOption: "A"
    },
    {
        questions: "Which company developed Windows OS?",
        optionA: "Apple",
        optionB: "Google",
        optionC: "Microsoft",
        optionD: "IBM",
        correctOption: "C"
    },
    {
        questions: "What is the brain of the computer?",
        optionA: "RAM",
        optionB: "Hard Disk",
        optionC: "CPU",
        optionD: "Motherboard",
        correctOption: "C"
    },
    {
        questions: "Which protocol is used for secure web browsing?",
        optionA: "HTTP",
        optionB: "HTTPS",
        optionC: "FTP",
        optionD: "SMTP",
        correctOption: "B"
    },
    {
        questions: "What does RAM stand for?",
        optionA: "Read Access Memory",
        optionB: "Random Access Memory",
        optionC: "Run Access Memory",
        optionD: "Rapid Access Memory",
        correctOption: "B"
    },
    {
        questions: "Which device is used to connect a computer to the internet?",
        optionA: "Router",
        optionB: "Printer",
        optionC: "Scanner",
        optionD: "Monitor",
        correctOption: "A"
    },
    {
        questions: "Which operating system is open-source?",
        optionA: "Windows",
        optionB: "macOS",
        optionC: "Linux",
        optionD: "DOS",
        correctOption: "C"
    },
    {
        questions: "What does IoT stand for?",
        optionA: "Internet of Tools",
        optionB: "Input Output Tech",
        optionC: "Internet of Things",
        optionD: "Information of Technology",
        correctOption: "C"
    },
    {
        questions: "Which language is mainly used for Android app development?",
        optionA: "Swift",
        optionB: "Kotlin",
        optionC: "Ruby",
        optionD: "PHP",
        correctOption: "B"
    },
    {
        questions: "What is Git used for?",
        optionA: "Text Editing",
        optionB: "Version Control",
        optionC: "Game Development",
        optionD: "Image Editing",
        correctOption: "B"
    },
    {
        questions: "Which database is NoSQL?",
        optionA: "MySQL",
        optionB: "PostgreSQL",
        optionC: "MongoDB",
        optionD: "Oracle",
        correctOption: "C"
    },
    {
        questions: "What does API stand for?",
        optionA: "Application Programming Interface",
        optionB: "Advanced Program Interaction",
        optionC: "Application Process Integration",
        optionD: "Automated Programming Interface",
        correctOption: "A"
    },
    {
        questions: "Which cloud platform is provided by Google?",
        optionA: "AWS",
        optionB: "Azure",
        optionC: "GCP",
        optionD: "DigitalOcean",
        correctOption: "C"
    },
    {
        questions: "What does CSS control?",
        optionA: "Database",
        optionB: "Logic",
        optionC: "Structure",
        optionD: "Design & Layout",
        correctOption: "D"
    },
    {
        questions: "Which device stores data permanently?",
        optionA: "RAM",
        optionB: "Cache",
        optionC: "Hard Disk",
        optionD: "Register",
        correctOption: "C"
    },
    {
        questions: "Which company created React?",
        optionA: "Google",
        optionB: "Facebook",
        optionC: "Microsoft",
        optionD: "Amazon",
        correctOption: "B"
    },
    {
        questions: "What does URL stand for?",
        optionA: "Uniform Resource Locator",
        optionB: "Universal Reference Link",
        optionC: "Uniform Route Link",
        optionD: "User Resource Location",
        correctOption: "A"
    },
    {
        questions: "Which sensor measures temperature?",
        optionA: "IR Sensor",
        optionB: "DHT11",
        optionC: "Ultrasonic",
        optionD: "LDR",
        correctOption: "B"
    },
    {
        questions: "What is Cyber Security?",
        optionA: "Internet Speed",
        optionB: "Protection from digital attacks",
        optionC: "Web Hosting",
        optionD: "App Development",
        correctOption: "B"
    },
    {
        questions: "Which programming language is used for AI?",
        optionA: "Python",
        optionB: "HTML",
        optionC: "CSS",
        optionD: "SQL",
        correctOption: "A"
    },
    {
        questions: "What does SQL stand for?",
        optionA: "Simple Query Language",
        optionB: "Structured Query Language",
        optionC: "System Query Language",
        optionD: "Standard Query Logic",
        correctOption: "B"
    },
    {
        questions: "Which component connects all hardware parts?",
        optionA: "CPU",
        optionB: "RAM",
        optionC: "Motherboard",
        optionD: "SMPS",
        correctOption: "C"
    },
    {
        questions: "Which OS is used in iPhones?",
        optionA: "Android",
        optionB: "iOS",
        optionC: "Windows",
        optionD: "Linux",
        correctOption: "B"
    },
    {
        questions: "What is phishing?",
        optionA: "Fishing game",
        optionB: "Cyber fraud technique",
        optionC: "Network protocol",
        optionD: "Programming bug",
        correctOption: "B"
    },
    {
        questions: "Which storage is fastest?",
        optionA: "HDD",
        optionB: "SSD",
        optionC: "DVD",
        optionD: "Pen Drive",
        correctOption: "B"
    },
    {
        questions: "Which tag is used for JavaScript?",
        optionA: "<js>",
        optionB: "<javascript>",
        optionC: "<script>",
        optionD: "<code>",
        correctOption: "C"
    },
    {
        questions: "What does GUI stand for?",
        optionA: "Graphical User Interface",
        optionB: "General User Interface",
        optionC: "Global User Internet",
        optionD: "Graphical Utility Interface",
        correctOption: "A"
    },
    {
        questions: "Which tech is used in contactless payments?",
        optionA: "Bluetooth",
        optionB: "NFC",
        optionC: "WiFi",
        optionD: "Infrared",
        correctOption: "B"
    },
    {
        questions: "Which language runs in browser?",
        optionA: "C",
        optionB: "Java",
        optionC: "Python",
        optionD: "JavaScript",
        correctOption: "D"
    },
    {
        questions: "What does VPN do?",
        optionA: "Boost Internet",
        optionB: "Secure Network Connection",
        optionC: "Increase Storage",
        optionD: "Block Ads",
        correctOption: "B"
    },
    {
        questions: "Which company owns Android?",
        optionA: "Samsung",
        optionB: "Google",
        optionC: "Apple",
        optionD: "Microsoft",
        correctOption: "B"
    },
    {
        questions: "What is Cloud Computing?",
        optionA: "Weather Analysis",
        optionB: "Online Data Storage & Services",
        optionC: "Hardware Repair",
        optionD: "Local Hosting",
        correctOption: "B"
    },
    {
        questions: "Which port is used for HTTP?",
        optionA: "21",
        optionB: "25",
        optionC: "80",
        optionD: "443",
        correctOption: "C"
    },
    {
        questions: "What does AI stand for?",
        optionA: "Automated Interface",
        optionB: "Artificial Intelligence",
        optionC: "Advanced Internet",
        optionD: "Applied Informatics",
        correctOption: "B"
    },
    {
        questions: "Which device converts digital to analog?",
        optionA: "ADC",
        optionB: "DAC",
        optionC: "CPU",
        optionD: "RAM",
        correctOption: "B"
    },
    {
        questions: "What is BIOS?",
        optionA: "Basic Input Output System",
        optionB: "Binary Input Output System",
        optionC: "Basic Internet OS",
        optionD: "Boot Interface OS",
        correctOption: "A"
    },
    {
        questions: "Which technology is used in smart homes?",
        optionA: "AI",
        optionB: "IoT",
        optionC: "Cloud",
        optionD: "All of these",
        correctOption: "D"
    },
    {
        questions: "What does LAN stand for?",
        optionA: "Large Area Network",
        optionB: "Local Area Network",
        optionC: "Logical Access Network",
        optionD: "Light Area Network",
        correctOption: "B"
    },
    {
        questions: "Which file system is used by Windows?",
        optionA: "EXT4",
        optionB: "FAT32",
        optionC: "NTFS",
        optionD: "HFS",
        correctOption: "C"
    },
    {
        questions: "What is an IP address?",
        optionA: "Device Identifier",
        optionB: "Internet Password",
        optionC: "Web URL",
        optionD: "Server Name",
        correctOption: "A"
    },
    {
        questions: "Which company makes ChatGPT?",
        optionA: "Google",
        optionB: "OpenAI",
        optionC: "Meta",
        optionD: "Amazon",
        correctOption: "B"
    },
    {
        questions: "What is blockchain mainly used for?",
        optionA: "Gaming",
        optionB: "Cryptocurrency",
        optionC: "Web Design",
        optionD: "AI Training",
        correctOption: "B"
    },
    {
        questions: "Which language is used for styling web pages?",
        optionA: "HTML",
        optionB: "Java",
        optionC: "CSS",
        optionD: "Python",
        correctOption: "C"
    },
    {
        questions: "What does FTP stand for?",
        optionA: "File Transfer Protocol",
        optionB: "Fast Transfer Process",
        optionC: "File Transmission Program",
        optionD: "Folder Transfer Path",
        correctOption: "A"
    }
];

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const scoreContainer = document.getElementById("score-container");
const quizCard = document.getElementById("quiz-card");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// INITIAL STATE
scoreContainer.style.display = "none";
submitBtn.style.display = "none";

loadQuestion();

function loadQuestion() {
    clearSelection();

    const currentQuiz = quizQuestions[currentQuestion];

    questionEl.textContent = currentQuiz.questions;

    optionButtons[0].textContent = currentQuiz.optionA;
    optionButtons[1].textContent = currentQuiz.optionB;
    optionButtons[2].textContent = currentQuiz.optionC;
    optionButtons[3].textContent = currentQuiz.optionD;

    // BUTTON CONTROL
    if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    } else {
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }
}

optionButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        clearSelection();
        btn.classList.add("selected");
        selectedAnswer = ["A", "B", "C", "D"][index];
    });
});

nextBtn.addEventListener("click", () => {
    if (selectedAnswer === null) {
        alert("Please select an option!");
        return;
    }

    checkAnswer();
    currentQuestion++;

    selectedAnswer = null;
    loadQuestion();
});

submitBtn.addEventListener("click", () => {
    if (selectedAnswer === null) {
        alert("Please select an option!");
        return;
    }

    checkAnswer();
    showScore();
});

function checkAnswer() {
    if (selectedAnswer === quizQuestions[currentQuestion].correctOption) {
        score++;
    }
}

function showScore() {
    quizCard.style.display = "none";
    scoreContainer.style.display = "block";
    scoreEl.textContent = `${score} / ${quizQuestions.length}`;
}

function clearSelection() {
    optionButtons.forEach(btn => btn.classList.remove("selected"));
}
