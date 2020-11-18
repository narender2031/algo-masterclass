/**
 * Solve witn slow code
 * 
 * @param {numbere} n 
 */
function addUpTo(n) {
  
  let total = 0;

  for(let i=1; i <= n; i++) {
    total += i;
  };

  console.log(total);
  
  return total;
}

// calling function
addUpTo(20);


/**
 * Perfact solution 
 * 
 * ZOMG WUT
addUpTo(n) =    1    +    2    +    3    + ... + (n - 1) +    n   
+addUpTo(n) =    n    + (n - 1) + (n - 2) + ... +    2    +    1 
-------------------------------------------------------------------------  
2addUpTo(n) = (n + 1) + (n + 1) + (n + 1) + ... + (n + 1) + (n + 1)


*
* formula n *(n + 1)/2
*
 */

 function batterAddUpto(number) {
   let result = (number * (number+1) / 2);

   console.log(result)
   return (result)
 }

 batterAddUpto(20);


 /**
  * 
  * Space complexity examples
  * 
  * 
  */

  function sum(arr) {
    let total = 0;
    for (let i = 1; i < arr.length; i++) {
      total =+ arr[i];
    }

    return total;
  }

  sum([1,2,3])
 /**
  * The space compliexity for this problem is O(1)
  * 
  * reason:-
  * There are total two variables. and no matter how much number we are storing here. Number only take constant space. 
  * 
  */


  function double(arr) {
    let newArr = [];

    for(let i = 1; i< arr.length; i ++) {
      newArr.push(arr[i] * arr[1]);
    }

    return newArr;
  }


  /**
   * In this problem what space complexity is O(1).
   * 
   * Reason:-
   * Here in this problem we are stroing the value in array here if the imput array length is 10 then new array take space 10 times. 
   * where the space complexity increases. 
   * 
   * 
   */