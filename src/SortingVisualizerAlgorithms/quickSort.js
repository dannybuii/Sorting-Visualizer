export function quickSort(array) {
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  console.log(animations);

  return animations;
}

function quickSortHelper(array, l, h, animations) {
  if (l < h) {
    let pi = partition(array, l, h, animations);
    quickSortHelper(array, l, pi - 1, animations);
    quickSortHelper(array, pi + 1, h, animations);
  }
}

function partition(array, l, h, animations) {
  let pivot = array[h];
  let i = l - 1;
  let pivotIndex = l;
  // animations.push(["pivot", pivotIndex, pivot]);
  for (let j = l; j <= h - 1; j++) {
    // animations.push(["compare", j, h]);
    // animations.push(["compare", j, h]);
    animations.push([j, h]);
    animations.push([j, h]);
    if (array[j] < pivot) {
      i++;
      // animations.push(["swap", i, array[j]]);
      // animations.push(["swap", j, array[i]]);

      animations.push([i, array[j]]);
      animations.push([j, array[i]]);
      swap(array, i, j);
    } else {
      animations.push([0, 0]);
      animations.push([0, 0]);
    }
    animations.push([0, 0]);
    animations.push([0, 0]);
  }

  animations.push([0, 0]);
  animations.push([0, 0]);

  animations.push([0, 0]);
  animations.push([0, 0]);

  // animations.push(["swap", h, array[i + 1]]);
  // animations.push(["swap", i + 1, array[h]]);

  animations.push([h, array[i + 1]]);
  animations.push([i + 1, array[h]]);
  swap(array, i + 1, h);
  return i + 1;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
