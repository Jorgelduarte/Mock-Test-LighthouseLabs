// MEDIAN - the middle number of a list (when sorted)
//        - if the list length is even, then the median is the average of the two middle values
//        - use the provided 'round' function before returning your value



function median(arr) {
  var sorted = arr.sort();
  var number = 0;
  if (sorted.length % 2 === 0) {
    number = (Math.ceil(sorted.length / 2) + Math.ceil(sorted.length / 2) + 1) / 2;
    return number;
  } else {
    number = Math.ceil((sorted.length) / 2);
    return number;
  }
}