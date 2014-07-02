/*

CLRS

Maximum subarray

*/

var list = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]

function find_maximum_subarray(list) {
  var left, right, cross, middle;

  console.log("ibtest: list - "+list);

  if (list.length === 1) {
    return list;
  }

  middle = Math.floor(list.length / 2);

  left = find_maximum_subarray(list.slice(0, middle));
  right = find_maximum_subarray(list.slice(middle, list.length));
  cross = find_max_crossing_list(list);

  if (sum(left) > sum(right) && sum(left) > sum(cross)) {
    return left;
  } else if (sum(right) > sum(left) && sum(right) > sum(cross)) {
    return right;
  } else {
    return cross;
  }
}

function find_max_crossing_list(list) {
  var left_sum,
    left_sublist = [],
    right_sum,
    right_sublist = [],
    sum,
    middle,
    i;

  middle = Math.floor(list.length / 2);

  left_sublist;
  left_sum = null;
  sum = 0;

  for (i = middle; i >= 0; i--) {
    sum = sum + list[i];
    if (sum > left_sum || left_sum === null) {
      left_sum = sum;
      left_sublist.unshift(list[i]);
    }
  }

  right_sum = null;
  sum = 0;

  for (i = middle + 1; i < list.length; i++) {
    sum = sum + list[i];
    if (sum > right_sum || right_sum === null) {
      right_sum = sum;
      right_sublist.push(list[i]);
    }
  }

  return left_sublist.concat(right_sublist);
}

function sum(list) {
  var sum;
  if (list instanceof Array) {
    sum = list.reduce(function (x, y) {
      return x + y;
    });
    return sum;
  }
}

console.log(find_maximum_subarray(list));
