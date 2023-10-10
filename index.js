function hasTargetSum(array, target) {
  for(let i = 0 ; i < array.length-1;i++){
    for(let j = i+1 ; j < array.length;j++){
      if(array[i] + array[j] === target)
        return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  iterate over each item in the input array:
    iterate over each item in the input array after the current item:
      if the sum of the item from the outer iteration and the inner iteration equals the target
        return true

  reuturn false
*/

/*
  Add written explanation of your solution here
  the function will take an array and a target and the solution is to 
  find two numbers whose sum is equal to the target if any pair matching the 
  condition is found it will return true otherwise it will return false,
  so the function will first iterate on each number, and for each number 
  there will be another iteration to add that number to other each number,
  when a pair whose sum equals the target true is returned, if no pair meets the condition
  is found it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 21, 100, 95, 3, 20, 88, 24], 27));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([13, 100, 5, 9, 4, 2, 3], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 20, 30, 41, 0, 18, 31, 5, 3, 9], 40));
}

module.exports = hasTargetSum;
