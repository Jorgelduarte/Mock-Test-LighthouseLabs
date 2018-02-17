// Implement the 'stdev' function defined below
// STDEV  - the square root of the average of the squared deviations of the values from their average value
//        - you are allowed to look at Wikipedia's example calculation:
//             https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples


function stdev(arr) {

  function average(param) {
    total = 0;
    for (i = 0; i < param.length; i++) {
      total += param[i];
    } if (param.length === 0) {
      return null;
    } else {
      var avg = total / param.length;
      return avg;
    }
  }

  var squareDiffs = arr.map(function(value){
    var avg = average(arr);
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;

  });

  var avgSquareDiff = average(squareDiffs);
  var stdDev = Math.sqrt(avgSquareDiff);
  var stdDevRound = Math.round(stdDev * 100) / 100;
  return stdDevRound;
}