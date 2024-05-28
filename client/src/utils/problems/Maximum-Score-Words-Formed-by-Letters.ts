import assert from "assert";
import { Problem,StarterCode } from "../types/problem";

const starterCodeMaxi:StarterCode = {
	"Javascript":`function maxScoreWords(words, letters, score){
	// Write your code here
};`,
	  "Python":` def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
	  # Write your code here`,
	  "C++":`int maxScoreWords(vector<string>& words, vector<char>& letters, vector<int>& score){
    // Write your code here
}`,
	  "Java":`public int maxScoreWords(String[] words, char[] letters, int[] score) {
    // Write your code here
}`,

};

// checks if the user has the correct code
const handlerMaxi= (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const words = [
			["dog","cat","dad","good"],
			["xxxz","ax","bx","cx"],
			["leetcode"]
		];

		const letters  = [
            ["a","a","c","d","d","d","g","o","o"],
            ["z","a","b","c","x","x","x"],
            ["l","e","t","c","o","d"]
        ];
		const score = [
			[1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
			[4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10],
			[0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
		];
        const answers = [
            23,27,0
        ]

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < words.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(words[i], letters[i], score[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Handler function error");
		throw new Error(error);
	}
};

export const maximum_score: Problem = {
	id: "maximum-score-words-formed-by-letters",
	title: "11. Maximum Score Words Formed by Letters",
	problemStatement: `<p class='mt-3'>
    Given a list of <code>words</code> , list of  single <code>letters</code> (might be repeating) and <code>score</code> of every character.
</p>
<p class='mt-3'>Return the maximum score of any valid set of words formed by using the given letters (<code>words[i]</code> cannot be used two or more times).</p>
<p class='mt-3'>
It is not necessary to use all characters in letters and each letter can only be used once. Score of letters <code>'a'</code>, <code>'b'</code>, <code>'c'</code>, ... ,<code>'z'</code> is given by <code>score[0]</code>, <code>score[1]</code>, ... , <code>score[25]</code> respectively.
</p>`,
	examples: [
		{
			id: 1,
			inputText: `words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]`,
			outputText: "23",
			explanation: `Score  a=1, c=9, d=5, g=3, o=2 Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23. Words "dad" and "dog" only get a score of 21.`,
		},
		{
			id: 2,
			inputText: `words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]`,
			outputText: "27",
			explanation: `Score  a=4, b=4, c=4, x=5, z=10 Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27. Word "xxxz" only get a score of 25.`,
		},
		{
			id: 3,
			inputText: `words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]`,
			outputText: "0",
            explanation:`Letter "e" can only be used once.`
		},
	],
	constraints: `<li class='mt-2'>
  <code>1 <= words.length <= 14</code>
</li> 
<li class='mt-2'>
<code>1 <= words[i].length <= 15</code>
</li> 
<li class='mt-2'>
<code>1 <= letters.length <= 100</code>
</li>
<li class='mt-2'>
<code>letters[i].length == 1</code>
</li>
<li class='mt-2'>
<code>1score.length == 26</code>
</li>
<li class='mt-2'>
<code>0 <= score[i] <= 10</code>
</li>
<li class='mt-2 text-sm'>
<code>words[i]</code> , <code>letters[i]</code> <strong>contains only lower case English letters.</strong>
</li>`,
	handlerFunction: handlerMaxi,
	starterCode: starterCodeMaxi,
	order: 6,
	starterFunctionName: "function maxScoreWords(",
};
