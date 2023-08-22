function rangeOfNumbers(startNum, endNum) {
  if(startNum>endNum){
    return [];
  } else { const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.push(startNum);//unshift() o push()
    return countArray;
  }
};

console.log(rangeOfNumbers(10, 20))