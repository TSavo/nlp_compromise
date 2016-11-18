var test = require('ava');
var nlp = require('./lib/nlp');

const firstTerm = (str) => {
  return nlp(str).list[0].terms[0];
};

test('noun:', function (t) {

  var term = firstTerm('flower');
  t.is(term.noun.plural(), 'flowers');
  term = firstTerm('flowers');
  t.is(term.noun.singular(), 'flower');

  t.pass();
});

test('pronoun:', function (t) {

  var term = firstTerm('he');
  t.is(term.pronoun.toPlural(), 'they');

  term = firstTerm('those');
  t.is(term.pronoun.toSingular(), 'this');

  t.pass();
});

test('verb:', function (t) {

  var term = firstTerm('is');
  t.is(term.verb.toPlural(), 'are');

  term = firstTerm('walks');
  t.is(term.verb.toPlural(), 'walk');

  term = firstTerm('walked');
  t.is(term.verb.conjugation(), 'PastTense');

  var conj = term.verb.conjugate();
  t.is(conj.Gerund, 'walking');
  t.pass();
});
