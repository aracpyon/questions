// function findBusiestPeriod(data) {
//   // your code goes here
//   let maxDifference = 0;
//   let maxVisitors;
//   let integer;
  
//   for (let i = 0; i < data.length; i++){
//     //if (data[i][2] === 1){
//       maxVisitors += data[i][1]
//       let currentDiff = data[i + 1][1] - data[i][1]
//       if (maxDifference > currentDiff) {
//         maxDifference
//         integer = i
//       } else {
//         maxDifference = currentDiff
//       }
//       console.log(maxDifference)
//     //} else {
//     // maxVisitors -= data[i][1]
//    //}
//     //return maxDifference
//   }
  
//   console.log(data[integer][1])
// }


// solution

function findBusiestPeriod(data){
    let n = data.length;
    let count = 0;
    let maxCount = 0;
    let maxPeriodTime = 0;

    for (let i = 0; i < data.length; i ++){
        // update count
      if (data[i][2] == 1){ //# visitors entered the mall  
          count += data[i][1]
      } else if (data[i][2] == 0){ //# visitors existed the mall
          count -= data[i][1]
      }
        // check for other data points with the same timestamp
      if (i < n-1 && data[i][0] == data[i+1][0]){
        continue
      }
        // update maximum
      if (count > maxCount){
          maxCount = count
          maxPeriodTime = data[i][0]
      }
    }
    return maxPeriodTime;
}

data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]
findBusiestPeriod(data);
//answer = 1487800378