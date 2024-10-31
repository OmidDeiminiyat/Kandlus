
const chatIcon = document.getElementById("chat-icon");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");
const helpText = document.getElementById('getHelp');
const chatBody = document.getElementById("chat-body");

const userName = sessionStorage.getItem("User-name");

if (userName) {
  chatIcon.style.display = 'block';
  helpText.innerText = 'Hello' + ' ' + userName + '. ' + 'How can I help you?';
}
function openChatter(){
    chatContainer.style.display='flex';
}

chatIcon.addEventListener("click", () => {
  chatContainer.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
  chatContainer.style.display = 'none';
  sendConversationToEmail(); // Send conversation when chat is closed
  chatBody.innerText = '';
});

// Chat logic
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const responses = {
  "hello": "Hi there! you can use this chat in case have any error, or problem using website. So how can I assist you?",
  "hi": "Hi there! How can I assist you?",
  "omid": "I'm sorry, Omid is not here now.",
  "omid?": "I'm sorry, you can not talk to Omid here? send him a message in contact page.",
  "talk omid": "Oops, wait, connecting you with an admin.",
  "help": "Sure, I'm here to help. What do you need assistance with?",
  "not loading": "Tell me pleas in which category you have problem with loading?",

  "in astrology": "Which service in astrology?",
  "astrology": "Which service in astrology?",
  "tarot cards": "What is the peroblem in Tarot card?",
  "tarot": "What is the peroblem in Tarot card?",
  "tarot cards reading": "What is the peroblem in Tarot card?",
  "tarot not loading": "Thank you for reporting error in Tarot cards. We fix problem as soon as possible",
  "not loading": "Thank you for reporting error. We fix problem as soon as possible",
  "loading": "Thank you for reporting error. We fix problem as soon as possible",
  "horoscope": "What is the peroblem in Horoscope? Not loading or Error?",
  "biorythm": "What is the peroblem in Biorythm?",
  "personal characteris": "What is the peroblem in Personal Characteris?",
  "characteris": "What is the peroblem in Personal Characteris?",
  "ascendant": "What is the peroblem in Ascendant?",
  "type of spiritual Yogas": "What is the peroblem in Type of spiritual Yogas?",
  "type of spiritual Yoga": "What is the peroblem in type of spiritual Yogas?",
  "type of yogas": "Which one? Type of spiritual Yogas or Type of physical Yogas?",
  "physical yoga & exercise": "What is the peroblem in Physical Yoga & exercise?",
  "physical yoga": "What is the peroblem in Physical Yoga?",
  "numerology": "What is the peroblem in Numerology?",
  "numerology table": "What is the peroblem in Numerology Table?",
  "radical number": "What is the peroblem in Radical numbers?",


  "in solfeggio": "What is peroblem in solfeggio section?",
  "solfeggio": "What is peroblem in solfeggio section?",

  "not playing": "Sometimes the player starts after a few seconds, it depends on the website traffic. The player on your device takes more or less 30 seconds to play?",
  "player": "Sometimes the player starts after a few seconds, it depends on the website traffic. The player on your device takes more or less 30 seconds to play?",
  "not play": "Sometimes the player starts after a few seconds, it depends on the website traffic. The player on your device takes more or less 30 seconds to play?",

  "more": "Thank you for reporting this issiue. We will fix this issue as soon as posible",

  "in frequency": "What is the peroblem in solfeggio section?",

  "in article": "Tell me please about problem?",
  "article": "Tell me please about problem?",
  "article not loading": "Did the problem occur in one article or more?",
  "article not exist": "Did the problem occur in one article or more?",

  "more than": "Thank you for reporting the error in the system. We will fix the problem as soon as possible.",
  "more": "Thank you for reporting the error in the system. We will fix the problem as soon as possible.",
  "single": "Thank you for reporting the error in the system. We will fix the problem as soon as possible.",

  "in video": "Please explain more about the problem in the video category",
  "video not loading": "Error playing only one video or more?",
  "video not playing": "Error playing only one video or more?",
  "video not plays": "Error playing only one video or more?",
  "more video": "Please tell me if you are using a mobile phone, tablet or computer?",

  "mobile": "Thank you for reporting the error in the system. We will fix the problem as soon as possible",
  "tablet": "Thank you for reporting the error in the system. We will fix the problem as soon as possible",
  "computer": "Thank you for reporting the error in the system. We will fix the problem as soon as possible",
  
  "not working": "Please tell me which part is not working, or in which category you have problem?",
 

  "contact": "You can communicate with the admin in contact page or via email: customerservice@kandlus.net",
  "free trial": "sorry we dont have trial or free trial",
  "trial": "sorry we dont have trial",
  "free": "sorry we dont have trial or free trial",

  "cancellation": "When you cancel your plan, your subscription will continue until the end of the period you paid for. Then your plan will be automatically converted to Basic, which is free.",
  "cancel plan": "When you cancel your plan, your subscription will continue until the end of the period you paid for. Then your plan will be automatically converted to Basic, which is free.",
  "standard pro": "you can easily change your plan. Any changes are made immediately and your existing plans will be overwritten with the new plan and new billing cycle",
  "why": "Why what?",
   "why?": "Why what?"
};

let conversationHistory = [];

function getResponse(userMessage) {
  // Normalize input by converting to lowercase and removing extra spaces
  const normalizedMessage = userMessage.toLowerCase().replace(/\s+/g, ' ').trim();
  
  const words = normalizedMessage.split(" ");
  
  const phrases = [];
  for (let i = 0; i < words.length - 1; i++) {
    phrases.push(words[i] + " " + words[i + 1]);
  }

  for (let phrase of phrases) {
    if (responses[phrase]) {
      return responses[phrase];
    }
  }

  for (let word of words) {
    if (responses[word]) {
      return responses[word];
    }
  }
  
  return "I'm sorry, I didn't understand that. Can you please clarify? or in short write what is problem. i deliver your message to an admin";

}


// Function to send messages and store in conversationHistory
function sendMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = message;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
  
  conversationHistory.push({ sender, message });
}

// Typewriter function for bot responses
function typeWriter(text, element, delay = 50) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}

// Modified bot response function to use typewriter effect
function botResponse(userMessage) {
  const response = getResponse(userMessage);

  // Create bot message div
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "bot");
  chatBody.appendChild(messageDiv);

  // Use typewriter effect for bot's response
  typeWriter(response, messageDiv);
  
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to send the conversation history to an email
function sendConversationToEmail() {
  fetch('Emails/sendEmail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(conversationHistory)
  })
  .then(response => response.text())
  .then(data => {
    console.log("Email sent:", data);
  })
  .catch(error => console.error("Error:", error));
}

// Event listener for the send button
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    sendMessage(message, "user");
    botResponse(message);
    userInput.value = "";
  }
});
