export function selectionSort(array) {
  const animations = [];
  let n = array.length;
  for (let j = 0; j < n - 1; j++) {
    let iMin = j;

    for (let i = j + 1; i < n; i++) {
      animations.push(["compare1", j, iMin]);
      animations.push(["compare2", j, iMin]);
      if (array[i] < array[iMin]) {
        iMin = i;
      }
    }
    if (iMin != j) {
      animations.push(["swap", iMin, array[j]]);
      animations.push(["swap", j, array[iMin]]);
      swap(array, j, iMin);
    }
  }

  return animations;
}

function swap(array, j, iMin) {
  let temp = array[j];
  array[j] = array[iMin];
  array[iMin] = temp;
}
