import React, { useState, useEffect } from 'react';
import { getRandom } from '../../utils';
import {
  getHeapSortAnimations,
  getShellSortAnimations,
  getQuickSortAnimations,
  getMergeSortAnimations,
  getBubbleSortAnimations,
  getSelectionSortAnimations,
  getInsertionSortAnimations,
} from '../../sortingAlgo';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  ANIMATION_SPEED_MS,
  NUMBER_OF_ARRAY_BARS,
} from './settings';
import './style.scss';

function isEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

export default function Visualizer() {
  const [defaultList, setDefaultList] = useState([]);
  useEffect(() => {
    resetArray(3, 533);
  }, []);

  const resetList = (e) => {
    e.preventDefault();
    resetArray(3, 533);
  };

  const resetArray = (min = 1, max = 800) => {
    const list = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      list.push(getRandom(min, max));
    }

    setDefaultList(list);
  };

  const mergeSortHandler = () => {
    console.log(`defaultList => ${defaultList}`);
    const { animations, sortedArray } = getMergeSortAnimations(defaultList);
    console.log(`sortedArray => ${sortedArray}`);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.querySelectorAll('.array-bar');
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const selectionSortHandler = () => {
    console.log(`defaultList => ${defaultList}`);
    const { sortedArray } = getSelectionSortAnimations(defaultList);
    console.log(`sortedArray => ${sortedArray}`);
    setDefaultList(sortedArray);
  };

  const insertionSortHandler = () => {
    console.log(`defaultList => ${defaultList}`);
    const { sortedArray } = getInsertionSortAnimations(defaultList);
    console.log(`sortedArray => ${sortedArray}`);
    setDefaultList(sortedArray);
  };

  const quickSortHandler = () => {
    console.log(`defaultList => ${defaultList}`);
    const { sortedArray } = getQuickSortAnimations(defaultList);
    console.log(`sortedArray => ${sortedArray}`);
    setDefaultList(sortedArray);
  };

  const heapSortHandler = () => {
    console.log(`defaultList => ${defaultList}`);
    const { sortedArray } = getHeapSortAnimations(defaultList);
    console.log(`sortedArray => ${sortedArray}`);
    setDefaultList(sortedArray);
  };

  const bubbleSortHandler = () => {
    console.log(`defaultList => ${defaultList}`);
    const { sortedArray } = getBubbleSortAnimations(defaultList);
    console.log(`sortedArray => ${sortedArray}`);
    setDefaultList(sortedArray);
  };

  const shellSortHandler = () => {
    console.log(`defaultList => ${defaultList}`);
    const { sortedArray } = getShellSortAnimations(defaultList);
    console.log(`sortedArray => ${sortedArray}`);
    setDefaultList(sortedArray);
  };

  const testSortingAlgo = (count = 10) => {
    for (let i = 0; i < count; i++) {
      const array = [];
      const length = getRandom(1, 100);
      for (let j = 0; j < length; j++) {
        array.push(getRandom(-length, length));
      }
      const jsSortedArray = array.slice().sort((a, b) => a - b);
      const { sortedArray } = getMergeSortAnimations(array);
      console.log(isEqual(jsSortedArray, sortedArray));
    }
  };

  return (
    <div className="visualizer-container">
      <h1>Algo Visualizer</h1>
      <div className="wrapper">
        <div className="inner">
          {defaultList.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: value,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={resetList}>
          Generate New Array
        </button>
        <button className="btn" onClick={mergeSortHandler}>
          Merge Sort
        </button>
        <button className="btn" onClick={quickSortHandler}>
          Quick Sort
        </button>
        <button className="btn" onClick={heapSortHandler}>
          Heap Sort
        </button>
        <button className="btn" onClick={bubbleSortHandler}>
          Bubble Sort
        </button>
        <button className="btn" onClick={insertionSortHandler}>
          Insertion Sort
        </button>
        <button className="btn" onClick={selectionSortHandler}>
          Selection Sort
        </button>
        <button className="btn" onClick={shellSortHandler}>
          Shell Sort
        </button>
        <button className="btn" onClick={(e) => testSortingAlgo()}>
          Test Sorting Algorithms
        </button>
      </div>
    </div>
  );
}
