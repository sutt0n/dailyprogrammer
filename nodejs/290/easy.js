/* javascript */

/* func defs */
var isKaprekar = function(number) {
  var square = Math.pow(number, 2);
  var square_str = square.toString();

  for(var i = 0; i < square_str.length; i++) {
    var first_seg = square_str.substr(0, i);
    var second_seg = square_str.substr(i);

    // check for zeroes at the end
    if(square % 10 == 0) {
      return false;
    }

    // check for Kaprekar
    var sum = parseInt(first_seg) + parseInt(second_seg);

    if(sum == number) {
      return true;
    }

  }

  return false;
}

var getKaprekars = function(start, end) {

  var ret = [];

  for(var i = start; i <= end; i++) {
    if(isKaprekar(i, ret)) {
      ret.push(i);
    }

  }

  return ret;

}

/**
 * main
 */

var inputs = [
  [ 2, 100 ],
  [ 101, 9000 ]
];

for(var i = 0; i < inputs.length; i++) {
  var input = inputs[i];

  var start = input[0];
  var end = input[1];

  console.log(
    getKaprekars(start, end)
  );
}
