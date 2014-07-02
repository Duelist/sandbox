/*

CLRS

*/

(function (window) {
  var heap = [];

  heap.parent = function (index) {
    return Math.floor(index / 2);
  }

  heap.left = function (index) {
    return index * 2;
  }

  heap.right = function (index) {
    return (index * 2) + 1;
  }

  heap.max_heapify = function (index) {
    var largest,
      temp,
      left_index = this.left(index),
      right_index = this.right(index);

    if (left_index <= this.length && this[left_index - 1] > this[index - 1]) {
      largest = left_index;
    } else {
      largest = index;
    }

    if (right_index <= this.length && this[right_index - 1] > this[largest - 1]) {
      largest = right_index;
    }

    if (largest !== index) {
      temp = this[index - 1];
      this[index - 1] = this[largest - 1];
      this[largest - 1] = temp;

      return this.max_heapify(largest);
    } else {
      return this;
    }
  }

  heap.build_max_heap = function () {
    var i,
      max_heap = [];
    for (i = Math.floor(this.length / 2); i > 0; i--) {
      max_heap = this.max_heapify(this, i);
    }
    return max_heap;
  }

}(window));
