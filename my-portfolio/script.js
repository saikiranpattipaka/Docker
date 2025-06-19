const phrases = [
  "Open to Opportunities",
  "Seeking New Challenges",
  "Ready for Next Move",
  "DevOps Engineer",
  "Automation Specialist",
  "Cloud Architect",
  "Infrastructure Automation",
  "CI/CD Expert",
  "AWS Enthusiast"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 100; // ms
const deletingSpeed = 50;
const delayBetweenPhrases = 1500;

const typedText = document.getElementById("typed-text");
typedText.style.color = "#00aaff"; // Set dynamic text color to blue

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (currentCharIndex < currentPhrase.length) {
    typedText.textContent += currentPhrase.charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenPhrases);
  }
}

function erase() {
  if (currentCharIndex > 0) {
    typedText.textContent = typedText.textContent.slice(0, -1);
    currentCharIndex--;
    setTimeout(erase, deletingSpeed);
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
