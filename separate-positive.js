// add whatever parameters you deem necessary
function separatePositive(arr) {
  let swap = 1;
  let i = 0;

  while (swap) {
    swap = 0;
    i = 0;

    while (i < arr.length) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = 1;
      }
      i++;
    }
  }
  i = 0;
  while (arr[i] > 0) {
    i++;
  }
  let j = 0;
  i = i - 1;

  while (j < i) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    j++;
    i--;
  }
  return arr;
}
module.exports = separatePositive;
