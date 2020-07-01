const shellSortHelper = (array, auxiliaryArray, animations) => {
  return shellSort(array, auxiliaryArray, animations);
};

const shellSort = (array, auxiliaryArray, animations) => {
  const len = array.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const tmp = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > tmp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = tmp;
    }

    gap = Math.floor(gap / 2);
  }

  return array;
};

export default function getShellSortAnimations(source) {
  const animations = [];
  let sortedArray = [];
  if (!Array.isArray(source)) {
    return { animations, sortedArray };
  }
  const array = source.slice();
  if (array.length <= 1) return { animations, sortedArray: array };
  const auxiliaryArray = array.slice();
  sortedArray = shellSortHelper(array, auxiliaryArray, animations);
  return { animations, sortedArray };
}
