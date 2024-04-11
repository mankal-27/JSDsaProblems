function validatePassword(pass) {
    const isValidLength = pass.length >= 8

    const upperCaseValidation = pass
        .split('')
        .some((char) => char === char.toUpperCase() && char !== char.toLowerCase())

    const lowerCaseValidation = pass
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase())

    const isDigitValidation = pass
    .split('')
    .some((char) => !isNaN(parseInt(char, 10)))

    return isValidLength && upperCaseValidation && lowerCaseValidation && isDigitValidation
}

module.exports = validatePassword;
