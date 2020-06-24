export function bubbleSort(array) {
  const animations = [];

  let N = array.length;

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      animations.push(["compare1", j, j + 1]);
      animations.push(["compare2", j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push(["swap", j, array[j + 1]]);
        animations.push(["swap", j + 1, array[j]]);
        swap(array, i, j);
      }
    }
  }

  return animations;
}

function swap(array, i, j) {
  let temp = array[j];
  array[j] = array[j + 1];
  array[j + 1] = temp;
}
