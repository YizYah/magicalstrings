import test from 'ava';

const {
    singularName, pluralName, pluralLowercaseName, singularLowercaseName, allCaps,
    relationshipsForSource,
    queryForSource
} = require('../../src/exports/inflections')

test('lowerCase input', t => {
    const lowerCaseSample= 'lowerCaseSample'
    t.is(allCaps(lowerCaseSample), 'LOWER_CASE_SAMPLE')
    t.is(singularLowercaseName(lowerCaseSample), 'lowerCaseSample')
    t.is(singularName(lowerCaseSample), 'LowerCaseSample')
    t.is(pluralLowercaseName(lowerCaseSample), 'lowerCaseSamples')
    t.is(pluralName(lowerCaseSample), 'LowerCaseSamples')
});

test('UpperCase input', t => {
    const UpperCaseSample= 'UpperCaseSample'
    t.is(singularLowercaseName(UpperCaseSample), 'upperCaseSample')
    t.is(singularName(UpperCaseSample), 'UpperCaseSample')
    t.is(pluralLowercaseName(UpperCaseSample), 'upperCaseSamples')
    t.is(pluralName(UpperCaseSample), 'UpperCaseSamples')
});


test('Source String Functions', t => {
    const source= 'mySource'
    t.is(relationshipsForSource(source), 'MY_SOURCE_RELATIONSHIPS')
    t.is(queryForSource(source), 'SOURCE_MY_SOURCE_QUERY')
});


test('Empty input', t => {
    t.is(allCaps(null), undefined)
    t.is(singularLowercaseName(null), undefined)
    t.is(singularName(null), undefined)
    t.is(pluralName(null), undefined)
    t.is(pluralLowercaseName(null), undefined)
    t.is(relationshipsForSource(null), undefined)
    t.is(queryForSource(null), undefined)
});
