function nextInLine(arr, item) {

    var queue = arr.push(item);
  
    var removeItem = arr.shift();
  
    return removeItem;  
  }
  
  
  var testArr = [1,2,3,4,5];
  
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));  
  console.log("After: " + JSON.stringify(testArr));