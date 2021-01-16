const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

function validateSubSequence(array, sequence) {
  var sequenceCounter = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequenceCounter]) {
      sequenceCounter++;
      console.log("counter >>>", sequenceCounter);
    } else if (array[i] != sequence[sequenceCounter]) {
        continue
    }
  }
  if (sequenceCounter === sequence.length) {
      console.log(true)
      return true
  } else {
      console.log(false)
      return false
  }
};

validateSubSequence(array, sequence);
