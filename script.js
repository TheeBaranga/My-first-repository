// script.js
function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");
  
  // Change text content
  welcomeText.innerText = "JavaScript is Dynamic and Fun!";
  
  // Add a pulsating animation
  welcomeText.classList.add("pulse-animation");
  
  // Change button color randomly
  button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const texts = ["Welcome to the typing animation!", "Enjoy your stay!", "Explore and have fun!"];
const typingSpeed = 100;
const delayBetweenTexts = 2000;
let textIndex = 0; 
let charIndex = 0;



function typeText() {
    const typingTextElement = document.getElementById("typing-text");
    
    if (typingTextElement) {
       
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex + 1);
        charIndex++;

        
        if (charIndex === texts[textIndex].length) {
            
            setTimeout(deleteText, delayBetweenTexts);
        } else {
           
            setTimeout(typeText, typingSpeed);
        }
    }
}

function deleteText() {
    const typingTextElement = document.getElementById("typing-text");

    if (typingTextElement) {
       
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;

        
        if (charIndex === 0) {
            
            textIndex = (textIndex + 1) % texts.length;
           
            setTimeout(typeText, typingSpeed);
        } else {
            
            setTimeout(deleteText, typingSpeed / 2); 
        }
    }
}


window.addEventListener("load", function () {
    if (document.getElementById("typing-text")) {
        typeText();
    }
});

    
const eventDate = new Date("November 6, 2024 23:59:59").getTime();

    
const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   
    document.getElementById("countdown").textContent = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

    
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "The event has started!";
    }
  }, 1000);

  function saveName() {
    const nameInput = document.getElementById("name");
    if (nameInput.value==="") {
        alert("Please enter your name");
        localStorage.setItem("name", nameInput.value);
        alert("Your name has been saved");
    }
        else if (nameInput.value!=="") {
            localStorage.setItem("name", nameInput.value);
            alert("Your name has been saved");
            alert('Welcome Back!! ' + localStorage.getItem("name"));

        }       
    }

