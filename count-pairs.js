// add whatever parameters you deem necessary
function countPairs(arr, target) {
  const count = {};
  const res = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in count) {
      res.add([arr[i], target - arr[i]]);
    }
    count[arr[i]] = i;
  }
  return res.size;
}

module.exports = countPairs;

countPairs([1, 2, 4], 6);
