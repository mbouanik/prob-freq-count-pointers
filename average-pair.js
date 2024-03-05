// add whatever parameters you deem necessary
function averagePair(arr, target) {
  const len = arr.length;
  const initialVal = 0;
  const res = arr.reduce((previous, current) => previous + current, initialVal);
  console.log(res);
  return res / arr.length == target ? true : false;
}
module.exports = averagePair;
