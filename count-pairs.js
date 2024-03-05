// add whatever parameters you deem necessary
function countPairs(arr, target) {
  const count = {};
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in count) {
      res++;
    }
    count[arr[i]] = i;
  }
  return res;
}

module.exports = countPairs;

countPairs([1, 2, 4], 6);
