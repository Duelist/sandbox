/*

CLRS

Heap Sort

*/

var heap = [4,1,3,2,16,9,10,14,8,7];

function parent(index) {
  return Math.floor(index / 2);
}

function left(index) {
  return index * 2;
}

function right(index) {
  return (index * 2) + 1;
}

function max_heapify(heap, index) {
  var largest,
    temp,
    left_index = left(index),
    right_index = right(index);

  if (left_index <= heap.length && heap[left_index - 1] > heap[index - 1]) {
    largest = left_index;
  } else {
    largest = index;
  }

  if (right_index <= heap.length && heap[right_index - 1] > heap[largest - 1]) {
    largest = right_index;
  }

  if (largest !== index) {
    temp = heap[index - 1];
    heap[index - 1] = heap[largest - 1];
    heap[largest - 1] = temp;

    return max_heapify(heap, largest);
  } else {
    return heap;
  }
}

function build_max_heap(heap) {
  var i,
    max_heap = [];
  for (i = Math.floor(heap.length / 2); i > 0; i--) {
    max_heap = max_heapify(heap, i);
  }
  return max_heap;
}

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
