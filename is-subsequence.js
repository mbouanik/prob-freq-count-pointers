// add whatever parameters you deem necessary
function isSubsequence(target, message) {
  let j = 0;
  let str = "";

  for (let i = 0; i < message.length; i++) {
    str = "";

    if ((message[i] = target[0])) {
      j = i;
      while (j < message.length && str.length < target.length) {
        if (message[j] == target[str.length]) {
          str += message[j];
        }
        j++;
      }
      if (str == target) {
        return true;
      }
    }
  }
  return false;
}

module.exports = isSubsequence;

isSubsequence("abc", "abracadabra");
