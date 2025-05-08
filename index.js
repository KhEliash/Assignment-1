function formatString(input, toUpper) {
    return toUpper !== false ? input.toUpperCase() : input.toLocaleLowerCase();
}
console.log(formatString("Hello"));
