
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

  "in astrology": "Which service in astrology?",

  "in solfeggio": "What is peroblem in solfeggio section?",
  "not playing": "Sometimes player start anter a few second, it is depend on trafic in website. player in your device take more or less then 30 second to play?",
  "player": "Sometimes player start anter a few second, it is depend on trafic in website. player in your device take more or less then 30 second to play?",
  "not play": "Sometimes player start anter a few second, it is depend on trafic in website. player in your device take more or less then 30 second to play?",

  "more": "Thank you for reporting this issiue. We will fix this issue as soon as posible",

  "in frequency": "What is peroblem in solfeggio section?",

  "in article": "Tell me please about problem?",
  "article not loading": "Is it a single article or more than one?",
  "article not exist": "",

  "more than": "Thank you for reporting. We fix problem as soon as possible.",
  "more": "Thank you for reporting. We fix problem as soon as possible.",
  "single": "Thank you for reporting. We fix problem as soon as possible.",

  "in video": "Tell me please about problem in video category",
  "video not loading": "Is it a single video or more?",
  "video not playing": "Is it a single video or more?",
  "video not plays": "Is it a single video or more?",
  "more video": "Tell me please that you use mobile, tablet or cimputer",

  "mobile": "Thank you for reporting. We fix problem as soon as possible",
  "tablet": "Thank you for reporting. We fix problem as soon as possible",
  "computer": "Thank you for reporting. We fix problem as soon as possible",
  
  "not working": "Tell me pleas which section not working, or in which category you have problem?",
 

  "contact": "You can contact us via email at contact@kandlus.net",
  "free trial": "sorry we dont have trial or free trial",
  "trial": "sorry we dont have trial or free trial",
  "free": "sorry we dont have trial or free trial",

  "cancellation": "When you cancel your plan, your subscription will continue until the end of the period you paid for. Then your plan will be automatically converted to Basic, which is free.",
  "cancel plan": "When you cancel your plan, your subscription will continue until the end of the period you paid for. Then your plan will be automatically converted to Basic, which is free.",
  "standard pro": "you can easily change your plan. Any changes are made immediately and your existing plans will be overwritten with the new plan and new billing cycle",
};


// Array to store conversation history
let conversationHistory = [];

function getResponse(userMessage) {
  // Normalize input by converting to lowercase and removing extra spaces
  const normalizedMessage = userMessage.toLowerCase().replace(/\s+/g, ' ').trim();
  
  const words = normalizedMessage.split(" ");
  console.log(words);
  
  const phrases = [];
  for (let i = 0; i < words.length - 1; i++) {
    phrases.push(words[i] + " " + words[i + 1]);
  }

  if (words === 'astrology') {
    for (let phrase of phrases) {
      if (responsAstro[phrase]) {
        return responsAstro[phrase];
      }
    }
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
