// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  const res = {};
  let i = 0;

  while (i < arr1.length) {
    res[arr1[i]] = arr2[i] || null;
    i++;
  }
  return res;
}

module.exports = twoArrayObject;
