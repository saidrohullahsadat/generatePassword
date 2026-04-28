function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-="
    let allowChars = "";
    let password = "";

    allowChars += includeLowercase ? lowercaseChars : "";
    allowChars += includeUppercase ? uppercaseChars : "";
    allowChars += includeNumber ? numberChars : "";
    allowChars += includeSymbols ? symbolChars : "";
    if (length < 4) {
        return `The password length must be at laeat 4`
    }
    if (allowChars.length === 0) {
        return `(at least 1 set of character needs to be selected )`
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomIndex];
    }
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumber,
    includeSymbols
);
console.log(`GeneratedPassword : ${password}`)