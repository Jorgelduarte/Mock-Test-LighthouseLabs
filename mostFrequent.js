// MODE - the most frequently occuring number
//      - for this test, the provided lists will only have a single value for the mode



function mode(arr) {
  var counter = {};
  var compare = 0;
  var mostFrequent;

  for(var i = 0; i < arr.length; i++) {
    var num = arr[i];

    if (counter[num] === undefined) {
      counter[num] = 1;
    } else {
      counter[num] = counter[num] + 1;
    }
    if (counter[num] > compare) {
      compare = counter[num];
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}