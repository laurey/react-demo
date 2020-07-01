const quickSortHelper = (array, auxiliaryArray, animations) => {
  return quickSort(array, 0, array.length - 1, auxiliaryArray, animations);
};

const partition = (array, low, high) => {
  const pivot = array[Math.floor((high + low) / 2)]; // middle element
  let i = low; // low pointer
  let j = high; // high pointer
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      // swap(array, i, j); //swap two elements
      [array[j], array[i]] = [array[i], array[j]];
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (array, low, high, auxiliaryArray, animations) => {
  if (low < high) {
    const idx = partition(array, low, high);
    if (low < idx - 1) {
      quickSort(array, low, idx - 1, auxiliaryArray, animations);
    }

    if (idx < high) {
      quickSort(array, idx, high, auxiliaryArray, animations);
    }
  }

  return array;
};

export default function getQuickSortAnimations(source) {
  const animations = [];
  let sortedArray = [];
  if (!Array.isArray(source)) {
    return { animations, sortedArray };
  }
  const array = source.slice();
  if (array.length <= 1) return { animations, sortedArray: array };
  const auxiliaryArray = array.slice();
  sortedArray = quickSortHelper(array, auxiliaryArray, animations);
  return { animations, sortedArray };
}
