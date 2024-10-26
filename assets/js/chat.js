// script.js

// Toggle chat visibility
const chatIcon = document.getElementById("chat-icon");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");

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
});

// Chat logic
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const responses = {
  "hello": "Hi there! you can use this chat in case have any error, or problem using website. So how can I assist you?",
  "hi": "Hi there! How can I assist you?",
  "omid": "I'm sorry, Omid is not here now.",
  "talk omid": "Oops, wait, connecting you with an admin.",
  "help": "Sure, I'm here to help. What do you need assistance with?",
  "not loading": "Tell me pleas in which category you have problem with loading?",
  "in astrology error": "test error",
  "in astrology loading": "test loading",
  "in solfeggio frequency": "",
  "in article": "",
  "in video": "",
  
  "not working": "Tell me pleas which section not working, or in which category you have problem?",
  "not loading": "",
  "contact": "You can contact us via email at contact@kandlus.net.",
  "free trial": "sorry we dont have trial or free trial.",
  "trial": "sorry we dont have trial or free trial.",
  "free": "sorry we dont have trial or free trial.",
  "pricing": "Our pricing starts at $10 per month. Let us know if you'd like more details!"
};

// Array to store conversation history
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

  // Check individual words as fallback
  for (let word of words) {
    if (responses[word]) {
      return responses[word];
    }
  }
  
  return "I'm sorry, I didn't understand that. Can you please clarify?";

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
