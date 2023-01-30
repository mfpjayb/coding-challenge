
module.exports = function evaluateBraces(value) {
    let unclosedCount = 0;
    // remove non-brace characters
    const braces = value.replace(/[^{|}]/g, '');

    for (let brace of braces.split('')) {
        unclosedCount += brace === '{' ? 1 : -1;
        if (unclosedCount < 0) break;
    }

    return unclosedCount === 0;
}