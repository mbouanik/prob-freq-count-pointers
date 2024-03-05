// add whatever parameters you deem necessary
function averagePair(arr, target) {
  const count = {};
  let i = 0;
  const t = target * 2;
  while (i < arr.length) {
    if (t - arr[i] in count) {
      return true;
    }
    if (!count[arr[i]]) {
      count[arr[i]] = i;
    }
    i++;
  }
  return false;
}
module.exports = averagePair;
