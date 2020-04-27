// Find The Duplicates
// Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

// Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.
function findDups(arr1, arr2){
  let dups = [];
  for (let i = 0; i < arr1.length; i++){
    let target = arr1[i];
    if (interBinary(arr2, target) !== null) dups.push(target)
  }
  return dups
}

// function binary(arr, target){
//   if (arr.length < 1 ) return null;
//   let middle = arr[Math.floor(arr.length / 2)];
//   if (middle === target) return middle
//   let left = arr.slice(0, middle)
//   let right = arr.slice(middle + 1)
//   console.log(left, right)
//   console.log(middle)
  
//   if (middle > target){
//     return binary(left, target);
//   } else if (middle < target) {
//     let res = binary(right, target)
//     re
//     }
//   }
  
// }

function recursBinary(arr, target){
  //we looking for val, not index
  if (arr.length === 0) return -1;
  
  const middleIdx = Math.floor(arr.length / 2) ;
  const middleVal = arr[middleIdx];
  const left = arr.slice(middleIdx + 1,arr.length);
  const right = arr.slice(0, middleIdx);
  
  if (target === middleVal){
    return middleVal;
  } else if (target > middleVal){
    return recursBinary(left, target);
  } else if (target < middleVal){
    return recursBinary(right, target);
  }
}


function interBinary(arr, target){ 
  
  let start = 0;
  let end_i = arr.length;
  // let middle = Math.floor(arr.length / 2);
  //[1,2,3,4,5,6] target = 6

  while ( start !== end_i){
    console.log("start:", start, "| end:", end_i)
    let mid_i = Math.floor((start + end_i) / 2);
    if (arr[mid_i] < target) {
      start = mid_i + 1;
      mid_i = Math.floor((start + end_i) /2)
    } else if (arr[mid_i] === target){
      return arr[mid_i]
    } else if (arr[mid_i] > target){
      end_i = mid_i;
      mid_i = Math.floor((start + end_i) /2)
    }
  }
  return null
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 5, 7, 8];

console.log(interBinary(arr1, 10));