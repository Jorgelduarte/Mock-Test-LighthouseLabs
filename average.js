// MEAN - the average value of numbers in a list
//      - use the provided 'round' function when returning your value


 function mean(arr) {
  total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  } if (arr.length === 0) {
    return null;
  } else {
    return total / arr.length;
  }
}