import assert from "assert";
import { Problem, StarterCode } from "../types/problem";

const starterCodeBestTimeToBuyAndSellStock: StarterCode = {
  "Javascript": `function maxProfit(prices) {
    // Write your code here
  };`,
  "Python": `def maxProfit(self, prices: List[int]) -> int:
    # Write your code here`,
  "C++": `int maxProfit(vector<int>& prices) {
    // Write your code here
}`,
  "Java": `public int maxProfit(int[] prices) {
    // Write your code here
}`,
};

// checks if the user has the correct code
const handlerBestTimeToBuyAndSellStock = (fn: any) => {
  try {
    const inputs = [
      [7, 1, 5, 3, 6, 4],
      [7, 6, 4, 3, 1],
    ];

    const outputs = [5, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxProfit handler function error");
    throw new Error(error);
  }
};

export const bestTimeToBuyAndSellStock: Problem = {
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  problemStatement: `<p class='mt-3'>
    You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
  </p>
  <p class='mt-3'>
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  </p>
  <p class='mt-3'>
    Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "prices = [7,1,5,3,6,4]",
      outputText: "5",
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
    },
    {
      id: 2,
      inputText: "prices = [7,6,4,3,1]",
      outputText: "0",
      explanation: "In this case, no transactions are done and the max profit = 0.",
    },
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ prices.length ≤ 10<sup>5</sup></code>
  </li> <li class='mt-2'>
    <code>0 ≤ prices[i] ≤ 10<sup>4</sup></code>
  </li>`,
  handlerFunction: handlerBestTimeToBuyAndSellStock,
  starterCode: starterCodeBestTimeToBuyAndSellStock,
  order: 1,
  starterFunctionName: "function maxProfit(",
};
