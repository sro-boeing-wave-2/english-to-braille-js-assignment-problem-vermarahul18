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
  const res = Array.prototype.map.call(str, x => set.get(x)).toString().replace(/,/g, '');
  // let res = '';
  // for (let i = 0; i < str.length; i += 1) {
  //   res += set.get(str[i]);
  // }
  document.getElementById('targetLangText').innerHTML = res;
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', converter);
// window.onload = function () {
//   document.getElementById('btnConvertEnglishToBraille').addEventListener('click', converter);
// };
