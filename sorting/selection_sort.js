/*

CLRS

2.2-2

Selection Sort

Loop Invariant: At the start of each iteration of the loop, we know the sublist
prior to the current element is a sorted list.

Base: There is no prior sublist before the first element in the array.
Therefore the invariant holds.

Induction: There exists j s.t. j is the index of the loop, and n s.t. n is the
length of the list. Therefore, the prior sublist to the element at j consists
contains elements s.t. A[1] <= A[2] <= ... <= A[j-1], which represents a sorted
list.

Termination: At termination of the loop, where n is the length of list and j is
currently at n + 1, we know that elements A[1 ... n] are sorted from the
induction step, and therefore the loop terminates and returns the sorted list.


We know that this would only need to run n-1 times since the algorithm selects
the smallest element at each iteration. If A[1] <= A[2] <= ... <= A[n-1], then
A[n] must be the largest element in the array and is already in the correct
spot.

Best case: O(1)

Worst case: O(n^2)

*/

var list = [5,1,3,6,2,9,7,8,10,4];

function selectionSort(list) {
  var i, j, curr, min, min_index, sorted = list;
  for (i = 0; i < sorted.length; i++) {
    curr = sorted[i];
    min = curr;
    min_index = i;

    // Search for smallest element in array
    for (j = i + 1; j < sorted.length; j++) {
      if (sorted[j] < min) {
        min = sorted[j];
        min_index = j;
      }
    }

    // Swap elements if smaller element has been found
    if (min_index !== i) {
      sorted[i] = min;
      sorted[min_index] = curr;
    }
  }
  return list;
}

console.log(selectionSort(list));
