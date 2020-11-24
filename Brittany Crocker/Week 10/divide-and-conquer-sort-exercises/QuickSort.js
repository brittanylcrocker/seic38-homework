function quickSort(arr){
  if (arr.length <=1) {
    return arr;
  }

  const pivot = arr.pop() // get this value from anywhere but do it consistently
// 0(2N)
  const lessThan = arr.filter(item => item < pivot);
  const greaterThan = arr.filter(item => item >= pivot);

  // 0(N)
  // const lessThan = [];
  // const greaterThan = [];
  // arr.forEach(function (element) {
  //   if (element < pivot) {
  //     lessThan.push(element)
  //   } else {
  //     greaterThan.push(element)
  //   }
  // })
  return quickSort(lessThan).concat(pivot, quickSort(greaterThan))
  // return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
}

module.exports = quickSort;
