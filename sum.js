// SUM - the sum of the numbers in a list


function sum(arr) {
  total = 0;
  for(i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}