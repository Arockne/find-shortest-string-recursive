
//i
  //array of strings
//o
  //shortest string that comes first in the list
//e
  //array will have a min length of one
//c
  //must use recursion
function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  if (arr[0].length > arr[1].length) {
    arr = arr.slice(1)
  } else {
    arr = [arr[0], ...arr.slice(2)]
  }

  return findShortestStringRecursive(arr)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
