function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJ";
    const lowercaseLetters = "abcdefghij";
    const numbers = "4123456789";
    const specialCharacters = "!@#$%^&*()-";
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 8;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  