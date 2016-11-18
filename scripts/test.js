require('shelljs/global');
// var tape = './node_modules/tape/bin/tape';
var ava = './node_modules/.bin/ava';
var tapSpec = './node_modules/tap-spec/bin/cmd.js --color';

//run tests server-side
exec(ava + ' ./test/unit/*.test.js | ' + tapSpec);
