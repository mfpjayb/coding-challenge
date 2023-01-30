const evaluateBraces = require('./index');

test('should return "true" if all opening braces have matching closing braces', function() {
    expect(evaluateBraces('{}')).toBe(true);
    expect(evaluateBraces('{}{}')).toBe(true);
    expect(evaluateBraces('hel{lo {w}or}l{}d')).toBe(true);
});

test('should return "false" if there is a closing brace without a pair opening brace', function() {
    expect(evaluateBraces('}{')).toBe(false);
    expect(evaluateBraces('{}}')).toBe(false);
    expect(evaluateBraces('{h}e{l}}l{}o')).toBe(false);
});

test('should return "false" if there is an opening brace without a pair closing brace', function() {
    expect(evaluateBraces('{{}')).toBe(false);
    expect(evaluateBraces('{')).toBe(false);
    expect(evaluateBraces('h{e}{ll{o}')).toBe(false);
});

test('should return "true" if there are no brackets in the string', function() {
    expect(evaluateBraces('')).toBe(true);
    expect(evaluateBraces('hello world')).toBe(true);
    expect(evaluateBraces('hell(o w)or[ld]')).toBe(true);
});