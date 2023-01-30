function removeNonBrace(value) {
    return value.replace(/[^{|}]/g, '');
}

function evaluateBraces(value) {
    let unclosedCount = 0;
    const braces = removeNonBrace(value);

    for (let brace of braces.split('')) {
        unclosedCount += brace === '{' ? 1 : -1;
        if (unclosedCount < 0) break;
    }

    return unclosedCount === 0;
}

module.exports = {
    removeNonBrace,
    evaluateBraces
};