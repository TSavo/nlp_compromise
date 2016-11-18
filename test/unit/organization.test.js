var test = require('ava');
var nlp = require('./lib/nlp');

test('organization test', function(t) {
  var arr = [
    'google',
  // 'google inc',
  ];
  arr.forEach(function (str) {
    var terms = nlp(str).list[0].terms;
    var msg = '\'' + str + '\' ' + terms.length + ' terms';
    t.is(terms.length, 1, msg);

    var term = terms[0];
    msg = '\'' + term.normal + '\' is org -  (' + Object.keys(term.tag).join(',') + ')';
    t.is(term.tag.Organization, true, msg);
  });
  t.pass();
});
