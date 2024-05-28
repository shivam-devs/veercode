import assert from "assert";
import { Problem, StarterCode } from "../types/problem";

const starterCodeSubsets: StarterCode = {
  "Javascript": `function subsets(nums) {
    // Write your code here
  };`,
  "Python": `def subsets(self, nums: List[int]) -> List[List[int]]:
    # Write your code here`,
  "C++": `vector<vector<int>> subsets(vector<int>& nums) {
    // Write your code here
}`,
  "Java": `public List<List<Integer>> subsets(int[] nums) {
    // Write your code here
}`,
};

// checks if the user has the correct code
const handlerSubsets = (fn: any) => {
  try {
    const inputs = [
      [1, 2, 3],
      [0],
    ];

    const outputs = [
      [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
      [[], [0]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.deepStrictEqual(result.sort(), outputs[i].sort());
    }
    return true;
  } catch (error: any) {
    console.log("subsets handler function error");
    throw new Error(error);
  }
};

export const subsets: Problem = {
  id: "subsets",
  title: "Subsets",
  problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code> of unique elements, return all possible
    subsets (the power set).
  </p>
  <p class='mt-3'>
    The solution set must not contain duplicate subsets. Return the solution in any order.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [1,2,3]",
      outputText: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
    },
    {
      id: 2,
      inputText: "nums = [0]",
      outputText: "[[],[0]]",
    },
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ nums.length ≤ 10</code>
  </li> <li class='mt-2'>
    <code>-10 ≤ nums[i] ≤ 10</code>
  </li> <li class='mt-2'>
    All the numbers of <code>nums</code> are unique.
  </li>`,
  handlerFunction: handlerSubsets,
  starterCode: starterCodeSubsets,
  order: 1,
  starterFunctionName: "function subsets(",
};
