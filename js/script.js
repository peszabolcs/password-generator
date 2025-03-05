const lowercase = ["abcdefghijklmnopqrstuvwxyz"];
const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

var isLowercase = false;
var isUppercase = false;
var isNumbers = false;
var isSymbols = false;

const slider = document.getElementById("length");
const passwordLength = document.getElementById("lengthValue");
var password = "";
var passwordArray = [];

slider.addEventListener("input", function() {
    passwordLength.textContent = slider.value;
});

function generate() {
  passwordArray = [];
  password = "";
  isLowercase = document.getElementById("lowercase").checked;
  isUppercase = document.getElementById("uppercase").checked;
  isNumbers = document.getElementById("numbers").checked;
  isSymbols = document.getElementById("special").checked;

  if (!isLowercase && !isUppercase && !isNumbers && !isSymbols) {
    alert("Please select at least one character type.");
    return;
  }

  for (let i = 0; i < slider.value; i++) {
    if (isLowercase && isUppercase && isNumbers && isSymbols) {
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
          break;
        case 1:
          passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
          break;
        case 2:
          passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          break;
        case 3:
          passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          break;
        default:
          break;
      }
    }

    if (isLowercase && isUppercase && isNumbers && !isSymbols) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
          break;
        case 1:
          passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
          break;
        case 2:
          passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          break;
        default:
          break;
      }
    }

    if (isLowercase && isUppercase && !isNumbers && isSymbols) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
          break;
        case 1:
          passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
          break;
        case 2:
          passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          break;
        default:
          break;
      }
    }

    if (isLowercase && !isUppercase && isNumbers && isSymbols) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
          break;
        case 1:
          passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          break;
        case 2:
          passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          break;
        default:
          break;
      }
    }

    if (!isLowercase && isUppercase && isNumbers && isSymbols) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
          break;
        case 1:
          passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          break;
        case 2:
          passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          break;
        default:
          break;
      }
    }

    if (isLowercase && isUppercase && !isNumbers && !isSymbols) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
          break;
        case 1:
          passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
          break;
        default:
          break;
      }
    }

    if (isLowercase && !isUppercase && isNumbers && !isSymbols) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
          break;
        case 1:
          passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          break;
        default:
          break;
      }
    }

    if (isLowercase && !isUppercase && !isNumbers && isSymbols) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
          break;
        case 1:
          passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          break;
        default:
          break;
      }
    }

    if (!isLowercase && isUppercase && isNumbers && !isSymbols) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
          break;
        case 1:
          passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          break;
        default:
          break;
      }
    }

    if (!isLowercase && isUppercase && !isNumbers && isSymbols) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
          break;
        case 1:
          passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          break;
        default:
          break;
      }
    }

    if (!isLowercase && !isUppercase && isNumbers && isSymbols) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
          break;
        case 1:
          passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          break;
        default:
          break;
      }
    }

    if (isLowercase && !isUppercase && !isNumbers && !isSymbols) {
      passwordArray.push(lowercase[0][Math.floor(Math.random() * lowercase[0].length)]);
    }

    if (!isLowercase && isUppercase && !isNumbers && !isSymbols) {
      passwordArray.push(uppercase[0][Math.floor(Math.random() * uppercase[0].length)]);
    }

    if (!isLowercase && !isUppercase && isNumbers && !isSymbols) {
      passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (!isLowercase && !isUppercase && !isNumbers && isSymbols) {
      passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  }

  passwordArray = passwordArray.sort(() => Math.random() - 0.5);
  password = passwordArray.join("");
  document.getElementById("password").textContent = password;
  console.log(password);
}

function copy() {
  const el = document.createElement("textarea");
  el.value = password;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Password copied to clipboard");
}
