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
});

// Chat logic
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const responses = {
  "hello": "Hi there! How can I assist you?",
  "omid": "im sorry, Omid is not avalaible now",
  "talk omid": "ooops, wait",
  "test": "Whay for test?",
  "help": "Sure, I'm here to help. What do you need assistance with?",
  "contact": "You can contact us via email at support@example.com.",
  "pricing": "Our pricing starts at $10 per month. Let us know if you'd like more details!"
};

function sendMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = message;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
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
    const normalizedMessage = userMessage.toLowerCase();
    const response = responses[normalizedMessage] || "I'm sorry, I didn't understand that.";
  
    // Create bot message div
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "bot");
    chatBody.appendChild(messageDiv);
  
    // Use typewriter effect for bot's response
    typeWriter(response, messageDiv);
    
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    sendMessage(message, "user");
    botResponse(message);
    userInput.value = "";
  }
});


// script.js

// Array to store conversation history
let conversationHistory = [];

// Function to send messages and store in conversationHistory
function sendMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = message;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
  
  conversationHistory.push({ sender, message });
}

function sendConversationToEmail() {
  fetch('../../Emails/sendEmail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(conversationHistory)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    
  })
  .catch(error => console.error("Error:", error));
}

// Event to send conversation on close
closeChat.addEventListener("click", () => {
  sendConversationToEmail(); // Send conversation when chat is closed
  chatContainer.classList.add("hidden");
});






