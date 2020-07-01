function insertionSortHelper(array, auxiliaryArray, animations) {
  return insertionSort(array, auxiliaryArray, animations);
}

function insertionSort(array, auxiliaryArray, animations) {
  const len = array.length;
  let inner;
  let current;
  for (let outer = 1; outer <= len - 1; outer++) {
    inner = outer;
    current = array[outer];
    while (inner >= 0 && array[inner - 1] >= current) {
      array[inner] = array[inner - 1];
      --inner;
    }
    array[inner] = current;
  }

  return array;
}

export default function getInsertionSortAnimations(source) {
  const animations = [];
  let sortedArray = [];
  if (!Array.isArray(source)) {
    return { animations, sortedArray };
  }
  const array = source.slice();
  if (array.length <= 1) return { animations, sortedArray: array };
  const auxiliaryArray = array.slice();
  sortedArray = insertionSortHelper(array, auxiliaryArray, animations);
  return { animations, sortedArray };
}
