import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { maximum_score } from "./Maximum-Score-Words-Formed-by-Letters";
import {lengthOfLongestSubstring} from "./longest-substring-without-repeating-characters"
import {containerWithMostWater} from "./container-with-most-water"
import { mergeIntervals } from "./merge-intervals";
import { maxDepthBinaryTree } from "./maximum-depth-of-binary-tree";
import { bestTimeToBuyAndSellStock } from "./best-time-to-buy-and-sell-stock";
import { subsets } from "./subsets";
interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"valid-parentheses": validParentheses,
	"search-a-2d-matrix": search2DMatrix,
	"container-with-most-water": containerWithMostWater,
	"merge-intervals": mergeIntervals,
	"maximum-depth-of-binary-tree": maxDepthBinaryTree,
	"best-time-to-buy-and-sell-stock": bestTimeToBuyAndSellStock,
	"subsets": subsets,
	"maximum-score-words-formed-by-letters":maximum_score,
	"longest-substring-without-repeating-characters":lengthOfLongestSubstring,
};
