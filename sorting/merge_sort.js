/*

CLRS

Merge Sort

Loop invariant (merge): At the start of each iteration, the resulting list (R)
will always have the smallest elements of the left (A) and right (B) arrays in
sorted order due to A and B being sorted themselves and the algorithm always
picking the smallest element between the two to go into R.

Initiation: R starts empty before the first iteration, and so is in sorted order.

Induction: At each iteration, R contains elements r1, r2 ... rn s.t. r1 <= r2 <=
rn due to the algorithm picking the smallest element of sorted arrays A and B at
each iteration. Therefore, R will always be sorted.

Termination: The iteration will terminate when both A and B are out of elements,
at which point R will contain all elements in sorted order.

*/

var list = [5,1,3,6,2,9,7,8,10,4];

function mergeSort(list) {
  var i,
    left = [],
    right = [],
    middle;

  if (list.length === 1) {
    return list;
  }

  middle = Math.floor(list.length / 2);

  left = list.slice(0, middle);
  right = list.slice(middle, list.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right) {
  var sorted = [];

  while (left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {
      if (right[0] > left[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    } else if (left.length > 0) {
      sorted.push(left.shift());
    } else if (right.length > 0) {
      sorted.push(right.shift());
    }
  }

  return sorted;
}

console.log(mergeSort(list));
