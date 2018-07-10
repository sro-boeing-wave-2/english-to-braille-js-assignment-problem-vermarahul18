/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const set = new Map(englishToBrailleLiteralSet);

function converter() {
  const str = document.getElementById('sourceLangText').value;
  let res = '';
  let i = 0;
  for (i = 0; i < str.length; i += 1) {
    res += set.get(str[i]);
  }
  document.getElementById('targetLangText').innerHTML = res;
}

window.onload = function () {
  const btn = document.getElementById('btnConvertEnglishToBraille');
  btn.addEventListener('click', converter);
};
