function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "`~!@#$%^&*()-_=+{}[]\\|;:'<>,.?/\"\"";
  
  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercase : "";
  allowedChars += includeUppercase ? uppercase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (passwordLength <= 0) {
      return "Password length cannot be zero or negative";
  }

  if (allowedChars.length === 0) {
      return "Please select at least one option";
  }

  for (let i = 0; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[index];
  }

  return password;
}

document.getElementById("generate-btn").addEventListener("click", function() {
  const passwordLength = document.getElementById("password-length").value;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById("generated-password").textContent = password;
});
