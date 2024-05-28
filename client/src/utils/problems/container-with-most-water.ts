import assert from "assert";
import { Problem, StarterCode } from "../types/problem";
import example from "./images/m833crat.bmp";
const starterCodeContainerWithMostWater: StarterCode = {
  "Javascript": `function maxArea(height) {
    // Write your code here
  };`,
  "Python": `def maxArea(self, height: List[int]) -> int:
    # Write your code here`,
  "C++": `int maxArea(vector<int>& height) {
    // Write your code here
  }`,
  "Java": `public int maxArea(int[] height) {
    // Write your code here
  }`,
};

// checks if the user has the correct code
const handlerContainerWithMostWater = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const heights = [
      [1, 8, 6, 2, 5, 4, 8, 3, 7],
      [1, 1],
    ];

    const outputs = [49, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < heights.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(heights[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxArea handler function error");
    throw new Error(error);
  }
};

export const containerWithMostWater: Problem = {
  id: "container-with-most-water",
  title: "Container With Most Water",
  problemStatement: `<p class='mt-3'>
    You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
  </p>
  <p class='mt-3'>
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
  </p>
  <p class='mt-3'>
    Return the maximum amount of water a container can store.
  </p>
  <p class='mt-3'>
    Notice that you may not slant the container.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "height = [1,8,6,2,5,4,8,3,7]",
      outputText: "49",
      img: example.src,
      explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
    },
    {
      id: 2,
      inputText: "height = [1,1]",
      outputText: "1",
    },
  ],
  constraints: `<li class='mt-2'>
    <code>n == height.length</code>
  </li> <li class='mt-2'>
    <code>2 ≤ n ≤ 10<sup>5</sup></code>
  </li> <li class='mt-2'>
    <code>0 ≤ height[i] ≤ 10<sup>4</sup></code>
  </li>`,
  handlerFunction: handlerContainerWithMostWater,
  starterCode: starterCodeContainerWithMostWater,
  order: 1,
  starterFunctionName: "function maxArea(",
};
