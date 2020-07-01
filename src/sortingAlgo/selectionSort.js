const selectionSortHelper = (array, auxiliaryArray, animations) => {
  return selectionSort(array, auxiliaryArray, animations);
};

const selectionSort = (array, auxiliaryArray, animations) => {
  const len = array.length;
  let minIdx;
  let tmp;
  for (let i = 0; i < len - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    tmp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = tmp;
  }
  return array;
};

export default function getSelectionSortAnimations(source) {
  const animations = [];
  let sortedArray = [];
  if (!Array.isArray(source)) {
    return { animations, sortedArray };
  }
  const array = source.slice();
  if (array.length <= 1) return { animations, sortedArray: array };
  const auxiliaryArray = array.slice();
  sortedArray = selectionSortHelper(array, auxiliaryArray, animations);
  return { animations, sortedArray };
}
