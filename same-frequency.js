// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const s1 = num1.toString();
  const s2 = num2.toString();
  if (s1.length != s2.length) return false;
  const count1 = {};
  const count2 = {};

  for (char of s1) {
    count1[char] = count1[char] + 1 || 1;
  }
  for (char of s2) {
    count2[char] = count2[char] + 1 || 1;
  }

  for (key in count1) {
    if (count1[key] != count2[key]) return false;
  }
  return true;
}

module.exports = sameFrequency;
