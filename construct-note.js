// add whatever parameters you deem necessary
function constructNote(s1, s2) {
  counts1 = {};
  counts2 = {};
  for (s of s1) {
    counts1[s] = counts1[s] + 1 || 1;
  }
  for (s of s2) {
    counts2[s] = counts2[s] + 1 || 1;
  }
  for (key in counts1) {
    if (counts1[key] > counts2[key] || !counts2[key] || !counts1[key]) {
      return false;
    }
  }
  return true;
}

module.exports = constructNote;
