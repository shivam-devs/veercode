import assert from "assert";
import { Problem, StarterCode } from "../types/problem";

const starterCodeMergeIntervals: StarterCode = {
  "Javascript": `function merge(intervals) {
    // Write your code here
  };`,
  "Python": `def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    # Write your code here`,
  "C++": `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    // Write your code here
  }`,
  "Java": `public List<List<Integer>> merge(List<List<Integer>> intervals) {
    // Write your code here
  }`,
};

// checks if the user has the correct code
const handlerMergeIntervals = (fn: any) => {
  try {
    const inputs = [
      [[1,3],[2,6],[8,10],[15,18]],
      [[1,4],[4,5]],
    ];

    const outputs = [
      [[1,6],[8,10],[15,18]],
      [[1,5]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.deepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("merge handler function error");
    throw new Error(error);
  }
};

export const mergeIntervals: Problem = {
  id: "merge-intervals",
  title: "Merge Intervals",
  problemStatement: `<p class='mt-3'>
    Given an array of intervals where <code>intervals[i] = [starti, endi]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      outputText: "[[1,6],[8,10],[15,18]]",
      explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
    },
    {
      id: 2,
      inputText: "intervals = [[1,4],[4,5]]",
      outputText: "[[1,5]]",
      explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
    },
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ intervals.length ≤ 10<sup>4</sup></code>
  </li> <li class='mt-2'>
    <code>intervals[i].length == 2</code>
  </li> <li class='mt-2'>
    <code>0 ≤ starti ≤ endi ≤ 10<sup>4</sup></code>
  </li>`,
  handlerFunction: handlerMergeIntervals,
  starterCode: starterCodeMergeIntervals,
  order: 1,
  starterFunctionName: "function merge(",
};
