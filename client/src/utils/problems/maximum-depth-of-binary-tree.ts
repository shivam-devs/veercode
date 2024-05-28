import assert from "assert";
import { Problem, StarterCode } from "../types/problem";

const starterCodeMaxDepthBinaryTree: StarterCode = {
  "Javascript": `class TreeNode {
    constructor(val, left, right) {
      this.val = (val === undefined ? 0 : val);
      this.left = (left === undefined ? null : left);
      this.right = (right === undefined ? null : right);
    }
  }

  function maxDepth(root) {
    // Write your code here
  };`,
  "Python": `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(self, root: TreeNode) -> int:
    # Write your code here`,
  "C++": `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

int maxDepth(TreeNode* root) {
    // Write your code here
}`,
  "Java": `public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public int maxDepth(TreeNode root) {
    // Write your code here
}`,
};

// checks if the user has the correct code
const handlerMaxDepthBinaryTree = (fn: any) => {
  // Helper function to create a binary tree from an array (level-order)
  const createBinaryTree = (arr:any) => {
    if (arr.length === 0) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (i < arr.length) {
      let current = queue.shift();
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }
      i++;
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]);
        queue.push(current.right);
      }
      i++;
    }
    return root;
  };

  try {
    const inputs = [
      [3, 9, 20, null, null, 15, 7],
      [1, null, 2],
      [],
    ];

    const outputs = [3, 2, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < inputs.length; i++) {
      const root = createBinaryTree(inputs[i]);
      const result = fn(root);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxDepth handler function error");
    throw new Error(error);
  }
};

export const maxDepthBinaryTree: Problem = {
  id: "maximum-depth-of-binary-tree",
  title: "Maximum Depth of Binary Tree",
  problemStatement: `<p class='mt-3'>
    Given the <code>root</code> of a binary tree, return its maximum depth.
  </p>
  <p class='mt-3'>
    A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "root = [3,9,20,null,null,15,7]",
      outputText: "3",
      explanation: "The binary tree [3,9,20,null,null,15,7] has a maximum depth of 3.",
    },
    {
      id: 2,
      inputText: "root = [1,null,2]",
      outputText: "2",
    },
    {
      id: 3,
      inputText: "root = []",
      outputText: "0",
    },
  ],
  constraints: `<li class='mt-2'>
    The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.
  </li> <li class='mt-2'>
    <code>-100 ≤ Node.val ≤ 100</code>
  </li>`,
  handlerFunction: handlerMaxDepthBinaryTree,
  starterCode: starterCodeMaxDepthBinaryTree,
  order: 1,
  starterFunctionName: "function maxDepth(",
};
