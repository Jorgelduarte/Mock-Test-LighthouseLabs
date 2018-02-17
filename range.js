// RANGE - the difference between the highest and lowest values in a list


function range(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  return max - min;
}