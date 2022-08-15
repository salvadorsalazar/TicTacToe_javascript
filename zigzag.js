
//function to find whether or not an array of numbers is a zigzzag

function zigzag(numbers, leftValue, rightValue) {
  let tempNum = numbers.map((value, index) => {
    let notFound = false;
    for (let x = leftValue; x <= rightValue; x++) {
      if ((index + 1) * x == value) {
        notFound = true;
        break;
      }
    }
    return notFound;
  });

  return tempNum;
}
console.log(zigzag([8, 5, 4, 1, 5], 1, 3));
