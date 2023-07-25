function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array should have at least two elements");
    }
  
    const sortedArray = arr.slice().sort((a, b) => a - b);
    return sortedArray[1];
  }
console.log(findSecondSmallest([9, 5, 1, 2, 7]))  