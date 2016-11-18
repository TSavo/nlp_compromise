var test = require('ava');
var nlp = require('./lib/nlp');


test('tricky names:', function (t) {
  [
    'john stewart',
    'martha stewart',
    // 'dr. Martin Luther King',
  ].forEach((a) => {
    var str = nlp(a).people().plaintext();
    var msg = '\'' + a + '\'  becomes \'' + str + '\'';
    t.is(str, a, msg);
  });
  t.pass();
});
