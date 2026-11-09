const test = require('node:test');
const assert = require('node:assert');

const { validateEmail } = require('../script');

test('Valid email', () => {
    assert.strictEqual(
        validateEmail('student@gmail.com'),
        true
    );
});

test('Invalid email', () => {
    assert.strictEqual(
        validateEmail('studentgmail.com'),
        false
    );
});

test('Empty email', () => {
    assert.strictEqual(
        validateEmail(''),
        false
    );
});