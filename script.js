const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const characterSets = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+="
};

function getRandomCharacter(charSet) {
  return charSet[Math.floor(Math.random() * charSet.length)];
}

function generatePassword() {
  const len = lenEl.value;
  const selectedSets = [];

  if (upperEl.checked) {
    selectedSets.push(characterSets.upper);
  }

  if (lowerEl.checked) {
    selectedSets.push(characterSets.lower);
  }

  if (numberEl.checked) {
    selectedSets.push(characterSets.number);
  }

  if (symbolEl.checked) {
    selectedSets.push(characterSets.symbol);
  }

  if (selectedSets.length === 0) {
    pwEl.innerText = "Select at least one character set";
    return;
  }

  let password = "";

  for (let i = 0; i < len; i++) {
    const randomSetIndex = Math.floor(Math.random() * selectedSets.length);
    const randomCharSet = selectedSets[randomSetIndex];
    password += getRandomCharacter(randomCharSet);
  }

  pwEl.innerText = password;
}

function copyPasswordToClipboard() {
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy password to clipboard:", error);
    });
}

generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", copyPasswordToClipboard);
