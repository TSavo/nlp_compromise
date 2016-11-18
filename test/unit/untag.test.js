var test = require('ava');
var nlp = require('./lib/nlp');

test('tag inference:', function (t) {
  var m = nlp('aasdf2').unTag('Noun').unTag('NounPhrase');
  var term = m.list[0].terms[0];
  t.is(Object.keys(term.tag).length, 0, 'aasdf2 has no tags');
  //give it a specific tag-
  m.tag('SportsTeam');
  term = m.list[0].terms[0];
  t.is(term.tag.Noun, true, 'aasdf2 now has Noun');
  t.is(term.tag.Organization, true, 'aasdf2 now has Organization(inferred)');
  //give it a redundant tag-
  m.tag('Organization');
  term = m.list[0].terms[0];
  t.is(term.tag.Noun, true, 'aasdf2 still has Noun');
  t.is(term.tag.Organization, true, 'aasdf2 still has Organization');
  t.pass();
});

test('untag inference:', function (t) {
  var m = nlp('aasdf');
  m.tag('FemaleName');
  var term = m.list[0].terms[0];
  t.is(term.tag.FemaleName, true, 'aasdf first has FemaleName');
  t.is(term.tag.Person, true, 'aasdf first has person');
  t.is(term.tag.Noun, true, 'aasdf first has noun');
  //remove the assumption..
  term.unTag('Noun');
  t.is(term.tag.Noun, undefined, 'aasdf now has no noun');
  t.is(term.tag.Person, undefined, 'aasdf now has no person(inferred)');
  t.is(term.tag.FemaleName, undefined, 'aasdf now has no FemaleName(inferred)');
  t.pass();
});



test('tag idempodence:', function (t) {
  var m = nlp('walk').tag('Verb');
  var term = m.list[0].terms[0];
  t.is(term.tag.Verb, true, 'walk has Verb');
  t.is(term.tag.Value, undefined, 'walk has no Value');
  //untag irrelevant stuff
  term.unTag('Value');
  term.unTag('Determiner');
  term.unTag('Country');
  term.unTag('Place');
  t.is(term.tag.Verb, true, 'walk has Verb after');
  t.is(term.tag.Value, undefined, 'walk has no Value after');
  t.pass();
});


test('tags are self-removing', function (t) {
  var terms = [
    'Person',
    'Place',
    'PastTense',
    'FemaleName',
    'Infinitive',
    'HashTag',
    'Month',
  ];
  terms.forEach((tag) => {
    var m = nlp('aasdf').tag(tag).unTag(tag);
    var t0 = m.list[0].terms[0];
    t.is(t0.tag[tag], undefined, 'tag removes self ' + tag);
  });
  t.pass();
});
