var test = require('ava');
var nlp = require('./lib/nlp');


test('to_adjective:', function (t) {
  [
    ['quickly', 'quick'],
    ['garishly', 'garish'],
    ['tediously', 'tedious'],
    ['frightfully', 'frightful'],
    ['tortuously', 'tortuous'],
    ['privately', 'private'],
    ['unambiguously', 'unambiguous'],
    ['cortically', 'cortic'],
    ['biradially', 'biradial'],
    ['meanly', 'mean'],
    ['raspingly', 'rasping'],
    ['comprehensively', 'comprehensive'],
    ['fervently', 'fervent'],
    ['nationally', 'national'],
    ['maternally', 'maternal'],
    ['flashily', 'flashy'],
    ['only', 'only'],
    ['narrowly', 'narrow'],
    ['blasphemously', 'blasphemous'],
    ['abortively', 'abortive'],
    ['inoffensively', 'inoffensive'],
    ['truly', 'true'],
    ['gently', 'gent'],
    ['tolerantly', 'tolerant'],
    ['enchantingly', 'enchanting'],
    ['unswervingly', 'unswerving'],
    ['grubbily', 'grubby'],
    ['longitudinally', 'longitudinal'],
    ['thermodynamically', 'thermodynamic'],
    ['mirthfully', 'mirthful'],
    ['salaciously', 'salacious'],
    ['dourly', 'dour'],
    ['credulously', 'credulous'],
    ['carefully', 'careful'],
    ['knowingly', 'knowing'],
    ['geometrically', 'geometrical'],
    ['unassailably', 'unassailable'],
    ['antecedently', 'antecedent'],
    ['adjectively', 'adjective'],
    ['hebdomadally', 'hebdomadal'],
    ['dizzily', 'dizzy'],
    ['obnoxiously', 'obnoxious'],
    ['thirstily', 'thirsty'],
    ['biennially', 'biennial'],
    ['roguishly', 'roguish'],
    ['mentally', 'mental'],
    ['incessantly', 'incessant'],
    ['intelligently', 'intelligent'],
    ['perseveringly', 'persevering'],
    ['namely', 'name'],
    ['formidably', 'formidable'],
    ['vertically', 'vertical']
  ].forEach(function (a) {
    var o = nlp(a[0]).tag('Adverb').adverbs().parse()[0];
    var msg = a[0] + ' -> ' + o.adjectiveForm;
    t.is(o.adjectiveForm, a[1], msg);
  });
  t.pass();
});
