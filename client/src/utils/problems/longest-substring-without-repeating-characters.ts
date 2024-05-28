import assert from "assert";
import { Problem, StarterCode } from "../types/problem";

const starterCodeLongestSubstring: StarterCode = {
  "Javascript": `function lengthOfLongestSubstring(s) {
    // Write your code here
  };`,
  "Python": `def lengthOfLongestSubstring(self, s: str) -> int:
    # Write your code here`,
  "C++": `int lengthOfLongestSubstring(string s) {
    // Write your code here
  }`,
  "Java": `public int lengthOfLongestSubstring(String s) {
    // Write your code here
  }`,
};

// checks if the user has the correct code
const handlerLongestSubstring = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const inputs = [
      "abcabcbb",
      "bbbbb",
      "pwwkew",
    ];

    const outputs = [3, 1, 3];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < inputs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(inputs[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("lengthOfLongestSubstring handler function error");
    throw new Error(error);
  }
};

export const lengthOfLongestSubstring: Problem = {
  id: "longest-substring-without-repeating-characters",
  title: "12. Longest Substring Without Repeating Characters",
  problemStatement: `<p class='mt-3'>
    Given a string <code>s</code>, find the length of the longest substring without repeating characters.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "s = \"abcabcbb\"",
      outputText: "3",
      explanation: "The answer is \"abc\", with the length of 3.",
    },
    {
      id: 2,
      inputText: "s = \"bbbbb\"",
      outputText: "1",
      explanation: "The answer is \"b\", with the length of 1.",
    },
    {
      id: 3,
      inputText: "s = \"pwwkew\"",
      outputText: "3",
      explanation: "The answer is \"wke\", with the length of 3. Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.",
    },
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ s.length ≤ 5 * 10^4</code>
  </li> <li class='mt-2'>
    <code>s consists of English letters, digits, symbols, and spaces.</code>
  </li>`,
  handlerFunction: handlerLongestSubstring,
  starterCode: starterCodeLongestSubstring,
  order: 1,
  starterFunctionName: "function lengthOfLongestSubstring(",
};
