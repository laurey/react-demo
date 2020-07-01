const heapify = (array, heapSize, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < heapSize && array[left] > array[largest]) largest = left;

  if (right < heapSize && array[right] > array[largest]) largest = right;

  // Swap and continue heapifying if root is not the largest
  if (largest !== i) {
    // swap(array[i], array[largest]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, heapSize, largest);
  }
};

const buildMaxHeap = (array) => {
  const len = array.length;
  let i = Math.floor(len / 2) - 1;

  for (; i >= 0; i--) {
    heapify(array, len, i);
  }
};

const heapSort = (array, auxiliaryArray, animations) => {
  buildMaxHeap(array);
  const len = array.length;
  for (let i = len - 1; i > 0; i--) {
    // swap(array[0], array[i]);
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }

  return array;
};

const heapSortHelper = (array, auxiliaryArray, animations) => {
  return heapSort(array, auxiliaryArray, animations);
};

export default function getHeapSortAnimations(source) {
  const animations = [];
  let sortedArray = [];
  if (!Array.isArray(source)) {
    return { animations, sortedArray };
  }
  const array = source.slice();
  if (array.length <= 1) return { animations, sortedArray: array };
  const auxiliaryArray = array.slice();
  sortedArray = heapSortHelper(array, auxiliaryArray, animations);
  return { animations, sortedArray };
}
