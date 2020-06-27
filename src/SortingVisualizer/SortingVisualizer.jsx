import React from "react";
import "./SortingVisualizer.css";
import { mergeSort } from "../SortingVisualizerAlgorithms/mergeSort.js";
import { quickSort } from "../SortingVisualizerAlgorithms/quickSort.js";
import { insertionSort } from "../SortingVisualizerAlgorithms/insertionSort.js";
import { selectionSort } from "../SortingVisualizerAlgorithms/selectionSort.js";
import { bubbleSort } from "../SortingVisualizerAlgorithms/bubbleSort.js";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 75;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#28cd7e";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function areTheyEqual(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }

  return true;
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];

    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomInteger(5, 1000));
    }
    console.log(array);
    this.setState({ array });
  }

  mergeSort() {
    const animations = mergeSort(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
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
  }

  quickSort() {
    const animations = quickSort(this.state.array);
    for (let i = 0; i < animations.length - 1; i++) {
      // const isColorChange = animations[i][0] === "compare";
      const isColorChange = i % 6 === 0 || i % 6 === 1;
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const color = i % 6 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        // const color =
        //   animations[i][0] === "compare" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [barOneIndex, barTwoIndex] = animations[i];

        const barOneStyle = arrayBars[barOneIndex].style;

        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort() {
    const animations = insertionSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "compare1" || animations[i][0] === "compare2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const color =
          animations[i][0] === "compare1" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [status, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [status, barIndex, newHeight] = animations[i];

        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort() {
    const animations = selectionSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "compare1" || animations[i][0] === "compare2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const color =
          animations[i][0] === "compare1" ? SECONDARY_COLOR : PRIMARY_COLOR;

        const [status, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5);
      } else {
        const [status, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * 0.5);
      }
    }
  }
  // heapSort() {}

  bubbleSort() {
    const animations = bubbleSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "compare1" || animations[i][0] === "compare2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const color =
          animations[i][0] === "compare1" ? SECONDARY_COLOR : PRIMARY_COLOR;

        const [status, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5);
      } else {
        const [status, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * 0.5);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <>
        <h1>Sorting Visualizer</h1>
        <button onClick={() => this.resetArray()}>Reset Array</button>{" "}
        <button onClick={() => this.mergeSort()}>Merge Sort</button>{" "}
        <button onClick={() => this.quickSort()}>Quick Sort</button>{" "}
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>{" "}
        <button onClick={() => this.selectionSort()}>Selection Sort</button>{" "}
        {/* <button onClick={() => this.heapSort()}>Heap Sort</button>{" "} */}
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>{" "}
        <div className="array-container">
          {array.map((value, x) => (
            <div
              className="array-bar"
              key={x}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}
