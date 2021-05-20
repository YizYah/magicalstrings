import test from 'ava';

const {isRequired} = require('../../src/exports/isRequired')

test('isRequired', t => {
    let error = t.throws( () => {
        isRequired('x','y','z')
    });
    t.regex(error.message,/Error calling command/)

    error = t.throws( () => {
        isRequired('x',null,'z')
    });
    t.regex(error.message,/is required for this/)
});
