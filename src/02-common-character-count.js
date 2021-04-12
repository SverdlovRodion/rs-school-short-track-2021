/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = [];
  let arr2 = [];
  arr1 = s1.split('');
  arr2 = s2.split('');
  const arrS1 = arr1.sort();
  const arrS2 = arr2.sort();
  let num = 0;
  for (let i = 0; i < arrS1.length; i++) {
    for (let j = 0; j < arrS2.length; j++) {
      if (arrS1[i] === arrS2[j]) {
        num++;
        arrS2[j] = ' ';
        arrS1[i] = ' ';
      }
    }
  }
  return num;
}

module.exports = getCommonCharacterCount;
