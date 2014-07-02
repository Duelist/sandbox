/*

CLRS

Heap Sort

*/

var heap = [4,1,3,2,16,9,10,14,8,7];

function heap_sort(heap) {
  var i,
    temp,
    max_heap = build_max_heap(heap),
    sorted_heap = [];

  for (i = heap.length; i > 0; i--) {
    temp = max_heap[0];
    max_heap[0] = max_heap[i - 1];
    max_heap[i - 1] = temp;

    sorted_heap.unshift(max_heap.pop());

    max_heap = max_heapify(max_heap, 1);
  }

  return sorted_heap;
}

console.log(heap_sort(heap));
