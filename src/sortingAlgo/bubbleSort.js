const bubbleSortHelper = (array, auxiliaryArray, animations) => {
  return bubbleSort(array, auxiliaryArray, animations);
};

const bubbleSort = (array, auxiliaryArray, animations) => {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = tmp;
      }
    }
  }

  return array;
};

export default function getBubbleSortAnimations(source) {
  const animations = [];
  let sortedArray = [];
  if (!Array.isArray(source)) {
    return { animations, sortedArray };
  }
  const array = source.slice();
  if (array.length <= 1) return { animations, sortedArray: array };
  const auxiliaryArray = array.slice();
  sortedArray = bubbleSortHelper(array, auxiliaryArray, animations);
  return { animations, sortedArray };
}
