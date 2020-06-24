export function insertionSort(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    let j = i;
    animations.push(["compare1", 0, i]);
    animations.push(["compare2", 0, i]);
    while (j > 0 && array[j - 1] > array[j]) {
      animations.push(["loop", j, array[j - 1]]);
      animations.push(["loop", j - 1, array[j]]);
      swap(array, j);
      j = j - 1;
    }
    animations.push(["end loop", j, array[j]]);
  }
  console.log(animations);
  return animations;
}

function swap(array, j) {
  let temp = array[j];
  array[j] = array[j - 1];
  array[j - 1] = temp;
}
