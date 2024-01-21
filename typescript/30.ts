// https://leetcode.com/problems/substring-with-concatenation-of-all-words/

function findSubstring(s: string, words: string[]): number[] {
    let wordMap = new Map();
    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    let wordLength = words[0].length;
    let allWordsLength = wordLength * words.length;
    let result = [];

    for (let i = 0; i <= s.length - allWordsLength; i++) {
        let seen = new Map();
        for (let j = 0; j < words.length; j++) {
            let word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
            if (!wordMap.has(word)) break;
            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > wordMap.get(word)) break;
            if (j + 1 === words.length) result.push(i);
        }
    }

    return result;
}