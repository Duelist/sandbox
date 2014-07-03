/*

CLRS

Binary Search

*/

var list = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(list, element) {
  var middle;

  if (list.length === 0) {
    return 0;
  }

  middle = Math.floor(list.length / 2);

  if (element > list[middle]) {
    return binarySearch(list.slice(middle + 1, list.length), element);
  } else if (element < list[middle]) {
    return binarySearch(list.slice(0, middle - 1), element);
  } else {
    return 1;
  }
}

console.log(binarySearch(list, 3));
