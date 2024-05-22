function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

console.log(isValidEmail("example@example.com"));
console.log(isValidEmail("example@example.com"));
console.log(isValidEmail("example@example."));
console.log(isValidEmail("@example.com"));
console.log(isValidEmail("example@.com"));