var test = require('ava');
var nlp = require('./lib/nlp');

var garbage = [
  '',
  '  ',
  null,
  '\n\n', [], {},
];
test('garbage:', function (t) {
  garbage.forEach(function (g, i) {
    var num = nlp(g).list.length;
    var msg = (typeof g) + ' text input #' + i;
    t.is(num, 0, msg);
  });
  t.pass();
});

test('misc:', function (t) {
  var str = '2 million five hundred thousand and fifty nine is bigger than 2882';
  var m = nlp(str).values().toNumber();
  t.is(m.normal(), '2500059 is bigger than 2882', str);

  str = '2 million five hundred thousand and fifty nine is bigger than 2882';
  m = nlp(str).values().toNiceNumber();
  t.is(m.plaintext(), '2,500,059 is bigger than 2,882', str);

  str = 'doug is 5 years old';
  m = nlp(str).values().toTextValue();
  t.is(m.normal(), 'doug is five years old', str);

  str = 'i\'d buy those nachos';
  m = nlp(str).nouns().toSingular();
  t.is(m.normal(), 'i\'d buy that nacho', str);

  str = 'i\'d buy these nachos';
  m = nlp(str).nouns().toSingular();
  t.is(m.normal(), 'i\'d buy this nacho', str);

  str = 'i\'d buy nachos';
  m = nlp(str).nouns().toSingular();
  t.is(m.normal(), 'i\'d buy a nacho', str);

  str = 'i\'d buy the nachos';
  m = nlp(str).nouns().toSingular();
  t.is(m.normal(), 'i\'d buy a nacho', str);

  str = 'i\'d buy the eggs';
  m = nlp(str).nouns().toSingular();
  t.is(m.normal(), 'i\'d buy an egg', str);

  str = 'men go';
  m = nlp(str).verbs().toPast().nouns().toSingular();
  t.is(m.normal(), 'a man went', str);
  t.pass();
});
