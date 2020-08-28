var haveEnough = function(totalCash,watchesCount,earringsCount,price) {
  let watchesSum = watchesCount * price
  let earringsSum = earringsCount * price
  if (totalCash >= watchesSum + earringsSum) {
    return 'Enough $$$';
  } else {
    return 'Not enough $$$';
  }
}
console.log(haveEnough(1555,1560,14,3));
console.log(haveEnough(100000,15,1,3));